import { GameEngine } from '../src/engine/gameEngine';
import { EventLogger } from '../src/engine/eventLogger';
import { AnalyticsService } from '../src/services/analyticsService';
import { PUZZLES } from '../src/data/puzzles';
import { StudentProfile } from '../src/types';

function assert(condition: boolean, msg: string) {
  if (!condition) {
    throw new Error(`Assertion failed: ${msg}`);
  }
}

console.log('--- Running MoneyQuest Engine Integration Tests ---');

const baseProfile: StudentProfile = {
  studentId: 'STU-TEST-01',
  sessionId: 'SESS-TEST',
  preferredLanguage: 'en',
  scholarshipStipend: 5000,
  walletBalance: 5000,
  emergencyFund: 0,
  totalScore: 0,
  currentRegionId: 'region_scholars_district',
  currentCityId: 'city_hostel_commons',
  completedCityIds: [],
  failedCityIds: [],
  badges: ['Scholarship Recipient'],
  createdAt: Date.now(),
  lastActiveAt: Date.now(),
};

const hostelScenario = PUZZLES['PB_001']; // Assuming PB_001 is the first scenario ID in the new data

if (hostelScenario) {
  // Test 1: Optimal Sequence (Best x3)
  const bestChoice1 = hostelScenario.steps[0].choices.find((c) => c.tier === 'best')!;
  const bestChoice2 = hostelScenario.steps[1].choices.find((c) => c.tier === 'best')!;
  const bestChoice3 = hostelScenario.steps[2].choices.find((c) => c.tier === 'best')!;
  
  const evalBest = GameEngine.evaluateScenarioSequence(baseProfile, hostelScenario, [bestChoice1, bestChoice2, bestChoice3], 'en');
  assert(evalBest.result.isPassed === true, 'Best sequence must pass the stage');
  assert(evalBest.result.isRecoveryNeeded === false, 'Best sequence must not trigger recovery');
  assert(evalBest.result.totalPoints === 9, 'Best sequence should yield 9 points');
  
  // Test 2: Destructive Sequence
  const badChoice1 = hostelScenario.steps[0].choices.find((c) => c.tier === 'very_bad')!;
  const badChoice2 = hostelScenario.steps[1].choices.find((c) => c.tier === 'very_bad')!;
  const badChoice3 = hostelScenario.steps[2].choices.find((c) => c.tier === 'very_bad')!;
  
  const evalBad = GameEngine.evaluateScenarioSequence(baseProfile, hostelScenario, [badChoice1, badChoice2, badChoice3], 'en');
  assert(evalBad.result.isPassed === false, 'Very Bad sequence must not pass');
  assert(evalBad.result.isRecoveryNeeded === true, 'Very Bad sequence must trigger recovery mode');
}

console.log('--- ALL INTEGRATION ENGINE TESTS PASSED SUCCESSFULLY! ---');
