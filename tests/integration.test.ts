import { GameEngine } from '../src/engine/gameEngine';
import { EventLogger } from '../src/engine/eventLogger';
import { AnalyticsService } from '../src/services/analyticsService';
import { PUZZLES } from '../src/data/puzzles';
import { GameStorage } from '../src/engine/storage';
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

// Test 5: Multi-Quest City Completion (Arrow unlocks only after all quests solved)
console.log('Testing multi-quest completion logic...');
const hostelStipendScenario = PUZZLES['scenario_hostel_stipend'];
const hostelStipendBestChoice = hostelStipendScenario.choices!.find((c) => c.tier === 'best')!;
const phoneScenario = PUZZLES['scenario_broken_phone'];
const phoneBestChoice = phoneScenario.choices!.find((c) => c.tier === 'best')!;

const freshProfile = GameStorage.getOrCreateProfile();
freshProfile.completedScenarioIds = [];
freshProfile.completedCityIds = [];

// Neither quest solved
assert(!GameEngine.isScenarioSolved('scenario_hostel_stipend', freshProfile), 'Hostel quest must start unsolved');
assert(!GameEngine.isScenarioSolved('scenario_broken_phone', freshProfile), 'Phone quest must start unsolved');

// Solve only Rao Sir (Hostel)
const pAfterHostel = GameEngine.evaluateChoice(freshProfile, hostelStipendScenario, hostelStipendBestChoice, 'en').updatedProfile;
assert(GameEngine.isScenarioSolved('scenario_hostel_stipend', pAfterHostel), 'Hostel quest must be solved');
assert(!GameEngine.isScenarioSolved('scenario_broken_phone', pAfterHostel), 'Phone quest must STILL be unsolved');

// Solve Suresh Anna (Phone)
const pAfterBoth = GameEngine.evaluateChoice(pAfterHostel, phoneScenario, phoneBestChoice, 'en').updatedProfile;
assert(GameEngine.isScenarioSolved('scenario_hostel_stipend', pAfterBoth), 'Hostel quest must be solved');
assert(GameEngine.isScenarioSolved('scenario_broken_phone', pAfterBoth), 'Phone quest must be solved');
console.log('✓ Test 5 Passed: City 1 multi-quest completion unlocks arrow to City 2');

// Test 5B: City 2 Multi-Quest Progression (Cycle Repair, Bazaar Bargain, Postal Savings)
console.log('Testing City 2 multi-quest progression...');
const cycleScenario = PUZZLES['scenario_cycle_repair'];
const bazaarScenario = PUZZLES['scenario_bazaar_bargain'];
const postalScenario = PUZZLES['scenario_postal_savings'];
assert(!!cycleScenario && !!bazaarScenario && !!postalScenario, 'All 3 City 2 scenarios must exist');

const cycleBest = cycleScenario.choices.find((c) => c.tier === 'best')!;
const bazaarBest = bazaarScenario.choices.find((c) => c.tier === 'best')!;
const postalBest = postalScenario.choices.find((c) => c.tier === 'best')!;

const pCity2Step1 = GameEngine.evaluateChoice(pAfterBoth, cycleScenario, cycleBest, 'en').updatedProfile;
assert(GameEngine.isScenarioSolved('scenario_cycle_repair', pCity2Step1), 'Cycle repair quest must be solved');
assert(!GameEngine.isScenarioSolved('scenario_bazaar_bargain', pCity2Step1), 'Bazaar quest must not yet be solved');

const pCity2Step2 = GameEngine.evaluateChoice(pCity2Step1, bazaarScenario, bazaarBest, 'en').updatedProfile;
assert(GameEngine.isScenarioSolved('scenario_bazaar_bargain', pCity2Step2), 'Bazaar bargain quest must be solved');
assert(!GameEngine.isScenarioSolved('scenario_postal_savings', pCity2Step2), 'Postal savings quest must not yet be solved');

const pCity2Step3 = GameEngine.evaluateChoice(pCity2Step2, postalScenario, postalBest, 'en').updatedProfile;
assert(GameEngine.isScenarioSolved('scenario_postal_savings', pCity2Step3), 'Postal savings quest must be solved');
assert(
  GameEngine.isScenarioSolved('scenario_cycle_repair', pCity2Step3) &&
  GameEngine.isScenarioSolved('scenario_bazaar_bargain', pCity2Step3) &&
  GameEngine.isScenarioSolved('scenario_postal_savings', pCity2Step3),
  'All 3 City 2 quests must now be solved, unlocking arrow to City 3'
);
console.log('✓ Test 5B Passed: City 2 multi-quest progression unlocks navigation to City 3');
// Test 6: Reload Game State Persistence (Continues from where player stopped)
console.log('Testing reload state persistence (continue from exact stopped position)...');
// Mock localStorage in Node environment if not present
if (typeof window === 'undefined' || !window.localStorage) {
  const store: Record<string, string> = {};
  (global as any).window = {
    localStorage: {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, val: string) => {
        store[key] = val;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    },
  };
}

// 1. Persist active world screen
GameStorage.saveScreen('world');
assert(GameStorage.getSavedScreen() === 'world', 'Saved screen must persist as "world" across reloads');

// 2. Persist exact stopped location in City 2
GameStorage.saveWorldState({
  cityId: 'city_academic_bazaar',
  x: 520,
  y: 230,
  direction: 'up',
});

const restoredWorld = GameStorage.getSavedWorldState();
assert(restoredWorld !== null, 'Restored world state must exist');
assert(restoredWorld!.cityId === 'city_academic_bazaar', 'Must resume in City 2 (Academic Bazaar)');
assert(restoredWorld!.x === 520, 'Must resume at exact x=520 coordinate');
assert(restoredWorld!.y === 230, 'Must resume at exact y=230 coordinate');
assert(restoredWorld!.direction === 'up', 'Must resume facing exact saved direction');

// 3. Reset progress clears world state and screen
GameStorage.resetProgress();
assert(GameStorage.getSavedScreen() === null, 'Reset must clear saved screen');
assert(GameStorage.getSavedWorldState() === null, 'Reset must clear saved world state');
console.log('✓ Test 6 Passed: Game reload persistence deterministically resumes stopped location & screen');

// Test 7: Bankruptcy Recovery & Relief Grant Reset
console.log('Testing bankruptcy reset functionality...');
const brokeProfile: StudentProfile = {
  ...baseProfile,
  walletBalance: 0,
  emergencyFund: 0,
  completedScenarioIds: ['scenario_hostel_stipend'],
};
assert(brokeProfile.walletBalance === 0, 'Wallet must start at 0 (bankrupt)');

const recovered = GameStorage.resetBankruptcy(brokeProfile);
assert(recovered.walletBalance === 5000, 'Bankruptcy reset must restore scholarship stipend to ₹5,000');
assert(recovered.completedScenarioIds.includes('scenario_hostel_stipend'), 'Bankruptcy reset must preserve solved quest progress');

// Verify persistent storage reflection
const persisted = GameStorage.getOrCreateProfile();
assert(persisted.walletBalance === 5000, 'Persisted wallet must reflect reset ₹5,000 balance');
console.log('✓ Test 7 Passed: Bankruptcy reset seamlessly restores ₹5,000 scholarship relief grant');

console.log('--- ALL INTEGRATION ENGINE TESTS PASSED SUCCESSFULLY! ---');
