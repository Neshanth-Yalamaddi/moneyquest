import { StudentProfile, PuzzleScenario, PuzzleStep, PuzzleChoice, EvaluationResult, StepEvaluation, ChoiceTier, FinancialImpact } from '../types';

export class GameEngine {
  /**
   * Pure deterministic evaluation of a player's sequence of choices against a scenario.
   */
  static evaluateScenarioSequence(
    profile: StudentProfile,
    scenario: PuzzleScenario,
    chosenChoices: PuzzleChoice[],
    language: 'en' | 'hi' | 'te' = 'en'
  ): { updatedProfile: StudentProfile; result: EvaluationResult } {
    
    let currentWallet = profile.walletBalance;
    let currentEmergency = profile.emergencyFund;
    let currentScore = profile.totalScore;
    
    const stepResults: StepEvaluation[] = [];
    let totalPoints = 0;
    
    const combinedImpact: FinancialImpact = { walletDelta: 0, emergencyDelta: 0, scoreDelta: 0, stressDelta: 0 };
    let finalFeedback = '';
    
    chosenChoices.forEach((choice, index) => {
      const step = scenario.steps[index];
      let points = 0;
      switch (choice.tier) {
        case 'best': points = 3; break;
        case 'good': points = 2; break;
        case 'bad': points = 1; break;
        case 'very_bad': points = 0; break;
      }
      totalPoints += points;
      
      combinedImpact.walletDelta += choice.financialImpact.walletDelta;
      combinedImpact.emergencyDelta += choice.financialImpact.emergencyDelta;
      combinedImpact.scoreDelta += choice.financialImpact.scoreDelta;
      combinedImpact.stressDelta += choice.financialImpact.stressDelta;
      
      finalFeedback = choice.pedagogicalFeedback[language] || choice.pedagogicalFeedback.en;
      
      stepResults.push({
        stepId: step.id,
        choiceId: choice.id,
        tier: choice.tier,
        points,
        financialImpact: choice.financialImpact
      });
    });
    
    currentWallet = Math.max(0, currentWallet + combinedImpact.walletDelta);
    currentEmergency = Math.max(0, currentEmergency + combinedImpact.emergencyDelta);
    currentScore = Math.max(0, currentScore + combinedImpact.scoreDelta);
    
    let overallTier: ChoiceTier;
    let isPassed: boolean;
    let isRecoveryNeeded: boolean;
    
    if (totalPoints >= 8) {
      overallTier = 'best';
      isPassed = true;
      isRecoveryNeeded = false;
    } else if (totalPoints >= 6) {
      overallTier = 'good';
      isPassed = true;
      isRecoveryNeeded = false;
    } else if (totalPoints >= 3) {
      overallTier = 'bad';
      isPassed = false;
      isRecoveryNeeded = true;
    } else {
      overallTier = 'very_bad';
      isPassed = false;
      isRecoveryNeeded = true;
    }
    
    const completed = new Set(profile.completedCityIds);
    const failed = new Set(profile.failedCityIds);
    
    if (isPassed) {
      completed.add(scenario.cityId);
      failed.delete(scenario.cityId);
    } else {
      failed.add(scenario.cityId);
    }
    
    const updatedProfile: StudentProfile = {
      ...profile,
      walletBalance: currentWallet,
      emergencyFund: currentEmergency,
      totalScore: currentScore,
      completedCityIds: Array.from(completed),
      failedCityIds: Array.from(failed),
      lastActiveAt: Date.now(),
    };
    
    const result: EvaluationResult = {
      scenarioId: scenario.id,
      stepResults,
      totalPoints,
      overallTier,
      isPassed,
      isRecoveryNeeded,
      financialImpact: combinedImpact,
      feedback: finalFeedback,
    };
    
    return { updatedProfile, result };
  }

  static evaluateSingleStep(
    profile: StudentProfile,
    choice: PuzzleChoice
  ): StudentProfile {
    return {
      ...profile,
      walletBalance: Math.max(0, profile.walletBalance + choice.financialImpact.walletDelta),
      emergencyFund: Math.max(0, profile.emergencyFund + choice.financialImpact.emergencyDelta),
      totalScore: Math.max(0, profile.totalScore + choice.financialImpact.scoreDelta),
    };
  }

  static isCityUnlocked(cityId: string, requiredPredecessorId?: string, completedCityIds: string[] = []): boolean {
    if (!requiredPredecessorId) return true;
    return completedCityIds.includes(requiredPredecessorId);
  }

  static calculateHealthIndex(profile: StudentProfile): number {
    const savingsRatio = Math.min(1, profile.emergencyFund / 2000);
    const scoreRatio = Math.min(1, profile.totalScore / 1000);
    return Math.round((savingsRatio * 0.5 + scoreRatio * 0.5) * 100);
  }
}
