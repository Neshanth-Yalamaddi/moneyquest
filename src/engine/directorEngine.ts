import { StudentProfile, NPC, PuzzleScenario, LearningPillar } from '../types';
import { PUZZLES } from '../data/puzzles';

export type FinancialStressTier = 'crisis' | 'vulnerable' | 'balanced' | 'thriving';

export interface DirectorEvaluationContext {
  stressTier: FinancialStressTier;
  healthIndex: number;
  weakestPillar: LearningPillar;
  strongestPillar: LearningPillar;
  completedScenarioCount: number;
}

export interface ScenarioMatchScore {
  scenarioId: string;
  scenario: PuzzleScenario;
  score: number;
  reasons: string[];
}

export class DirectorEngine {
  /**
   * Determine student financial stress tier based on wallet balance and emergency savings.
   * - crisis: Low wallet (< ₹1,000) and zero/low emergency reserves (< ₹500)
   * - vulnerable: Moderate wallet (< ₹2,500) or emergency fund < ₹1,000
   * - balanced: Solid wallet (₹2,500 - ₹5,000) and healthy buffer (₹1,000+)
   * - thriving: Wealthy wallet (> ₹5,000) and high reserves
   */
  public static getFinancialStressTier(profile: StudentProfile): FinancialStressTier {
    const { walletBalance, emergencyFund } = profile;
    if (walletBalance < 1000 && emergencyFund < 500) return 'crisis';
    if (walletBalance < 2500 || emergencyFund < 1000) return 'vulnerable';
    if (walletBalance >= 5000 && emergencyFund >= 2000) return 'thriving';
    return 'balanced';
  }

  /**
   * Analyzes student history to identify their weakest and strongest educational pillars.
   */
  public static getPillarAffinities(profile: StudentProfile): {
    weakestPillar: LearningPillar;
    strongestPillar: LearningPillar;
    pillarCounts: Record<LearningPillar, number>;
  } {
    const pillarCounts: Record<LearningPillar, number> = {
      budget: 0,
      save: 0,
      invest: 0,
      safety: 0,
    };

    const completed = profile.completedScenarioIds || [];
    completed.forEach((id) => {
      const sc = PUZZLES[id];
      if (sc && sc.pillar) {
        pillarCounts[sc.pillar] = (pillarCounts[sc.pillar] || 0) + 1;
      }
    });

    const sorted = (['budget', 'save', 'invest', 'safety'] as LearningPillar[]).sort(
      (a, b) => pillarCounts[a] - pillarCounts[b]
    );

    return {
      weakestPillar: sorted[0],
      strongestPillar: sorted[sorted.length - 1],
      pillarCounts,
    };
  }

  /**
   * Computes full evaluation context.
   */
  public static getEvaluationContext(profile: StudentProfile): DirectorEvaluationContext {
    const stressTier = this.getFinancialStressTier(profile);
    const { weakestPillar, strongestPillar } = this.getPillarAffinities(profile);
    const savingsRatio = Math.min(1, profile.emergencyFund / 2000);
    const scoreRatio = Math.min(1, profile.totalScore / 1000);
    const healthIndex = Math.round((savingsRatio * 0.5 + scoreRatio * 0.5) * 100);

    return {
      stressTier,
      healthIndex,
      weakestPillar,
      strongestPillar,
      completedScenarioCount: (profile.completedScenarioIds || []).length,
    };
  }

  /**
   * Infer NPC's thematic pillar affinity and role archetype from their properties.
   */
  public static getNpcThematicPillars(npc: NPC): LearningPillar[] {
    const text = `${npc.name} ${npc.role} ${npc.id}`.toLowerCase();
    const pillars: LearningPillar[] = [];

    // Safety / Security NPCs
    if (
      text.includes('guard') ||
      text.includes('police') ||
      text.includes('officer') ||
      text.includes('curator') ||
      text.includes('groundskeeper') ||
      text.includes('security') ||
      text.includes('tariq') ||
      text.includes('vikram')
    ) {
      pillars.push('safety');
    }

    // Investment / Growth NPCs
    if (
      text.includes('gardener') ||
      text.includes('mali') ||
      text.includes('boat') ||
      text.includes('economics') ||
      text.includes('club') ||
      text.includes('counselor') ||
      text.includes('invest') ||
      text.includes('market') ||
      text.includes('karim')
    ) {
      pillars.push('invest');
    }

    // Savings / Emergency / Banking NPCs
    if (
      text.includes('post') ||
      text.includes('teller') ||
      text.includes('repair') ||
      text.includes('mechanic') ||
      text.includes('murthy') ||
      text.includes('tech') ||
      text.includes('bank')
    ) {
      pillars.push('save');
    }

    // Budgeting / Daily Spending / Food / Books
    if (
      text.includes('warden') ||
      text.includes('canteen') ||
      text.includes('book') ||
      text.includes('bazaar') ||
      text.includes('friend') ||
      text.includes('roommate') ||
      text.includes('librarian') ||
      text.includes('vendor') ||
      text.includes('chai') ||
      text.includes('anand')
    ) {
      pillars.push('budget');
    }

    // Fallback: if NPC had a hardcoded scenario, inherit its pillar
    if (npc.scenarioId && PUZZLES[npc.scenarioId]) {
      const fallbackPillar = PUZZLES[npc.scenarioId].pillar;
      if (!pillars.includes(fallbackPillar)) {
        pillars.unshift(fallbackPillar);
      }
    }

    return pillars.length > 0 ? pillars : ['budget', 'save'];
  }

  /**
   * Evaluates all candidates in PUZZLES and dynamically selects the best matching
   * question for this NPC and current student situation.
   */
  public static selectNextScenario(npc: NPC, profile: StudentProfile): PuzzleScenario | null {
    const ctx = this.getEvaluationContext(profile);
    const npcPillars = this.getNpcThematicPillars(npc);
    const completed = new Set(profile.completedScenarioIds || []);

    const candidates: ScenarioMatchScore[] = [];

    for (const [id, scenario] of Object.entries(PUZZLES)) {
      let score = 0;
      const reasons: string[] = [];

      // 1. Role / Theme Compatibility (+50)
      if (npcPillars.includes(scenario.pillar)) {
        score += 50;
        reasons.push(`Matches NPC theme (${scenario.pillar})`);
      }

      // 2. Financial Stress Curve Matching (+40)
      if (ctx.stressTier === 'crisis') {
        // In crisis, prioritize immediate survival budgeting and emergency saving
        if (scenario.pillar === 'budget' || scenario.pillar === 'save') {
          score += 40;
          reasons.push('Addresses financial crisis state');
        } else if (scenario.pillar === 'invest') {
          score -= 20; // Don't invest when starving or bankrupt
        }
      } else if (ctx.stressTier === 'vulnerable') {
        // Needs emergency buffer
        if (scenario.pillar === 'save') {
          score += 35;
          reasons.push('Strengthens vulnerable emergency cushion');
        }
      } else if (ctx.stressTier === 'thriving' || ctx.stressTier === 'balanced') {
        // Wealthy students face cyber scams or should learn investing
        if (scenario.pillar === 'safety') {
          score += 45;
          reasons.push('Tests cyber safety against scams when holding high funds');
        } else if (scenario.pillar === 'invest') {
          score += 35;
          reasons.push('Encourages capital growth during financial stability');
        }
      }

      // 3. Learning Gap / Weakest Pillar Boost (+30)
      if (scenario.pillar === ctx.weakestPillar) {
        score += 30;
        reasons.push(`Targets student's weakest pillar (${ctx.weakestPillar})`);
      }

      // 4. Default NPC Affiliation Affinity (+25 if it's the NPC's default scenario)
      if (npc.scenarioId === id) {
        score += 25;
        reasons.push('NPC native scenario affinity');
      }

      // 5. Freshness / Unplayed Preference (+40 for unplayed, heavy penalty if already completed)
      if (!completed.has(id)) {
        score += 40;
        reasons.push('Unplayed scenario');
      } else {
        score -= 60; // strongly prefer unplayed questions
      }

      candidates.push({ scenarioId: id, scenario, score, reasons });
    }

    if (candidates.length === 0) {
      return npc.scenarioId ? PUZZLES[npc.scenarioId] || null : null;
    }

    // Sort descending by match score
    candidates.sort((a, b) => b.score - a.score);

    // Pick top candidate
    return candidates[0].scenario;
  }
}
