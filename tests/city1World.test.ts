import {
  CITY1_CONFIG,
  CITY1_COLLISION_BOXES,
  CITY1_NPCS,
  CITY1_INTERACTIVES,
} from '../src/data/maps/city1Data';
import {
  DEFAULT_PLAYER_FOOTPRINT,
  checkFootCollision,
  slideMove,
  calculateCamera,
  findNearbyNpc,
} from '../src/engine/worldEngine';
import { PUZZLES } from '../src/data/puzzles';

function assert(condition: boolean, message: string) {
  if (!condition) {
    console.error(`❌ ASSERTION FAILED: ${message}`);
    process.exit(1);
  }
}

console.log('--- Running City 1 World Engine & Map Integration Tests ---');

// Test 1: Configuration & Spawn Validation
console.log('Checking City 1 configuration and spawn point...');
assert(CITY1_CONFIG.id === 'city_hostel_commons', 'City ID must be city_hostel_commons');
assert(CITY1_CONFIG.width === 1024 && CITY1_CONFIG.height === 572, 'Map dimensions must match supplied asset (1024x572)');

const spawn = CITY1_CONFIG.spawnPoint;
assert(spawn.x === 75 && spawn.y === 450, 'Spawn point must be (75, 450) on START bridge');
const spawnCollides = checkFootCollision(
  spawn.x,
  spawn.y,
  DEFAULT_PLAYER_FOOTPRINT.width,
  DEFAULT_PLAYER_FOOTPRINT.height,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(!spawnCollides, 'Spawn point must be completely collision-free');
console.log('✓ Test 1 Passed: Map configuration & spawn point verified collision-free');

// Test 2: Solid Obstacle Collisions
console.log('Checking collision boundaries on solid obstacles...');
// River (x: 50, y: 350)
const riverCollides = checkFootCollision(
  50,
  350,
  DEFAULT_PLAYER_FOOTPRINT.width,
  DEFAULT_PLAYER_FOOTPRINT.height,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(riverCollides, 'River must be impassable');

// School Building (x: 100, y: 80)
const schoolCollides = checkFootCollision(
  100,
  80,
  DEFAULT_PLAYER_FOOTPRINT.width,
  DEFAULT_PLAYER_FOOTPRINT.height,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(schoolCollides, 'School building must be impassable');

// Hostel Building (x: 850, y: 100)
const hostelCollides = checkFootCollision(
  850,
  100,
  DEFAULT_PLAYER_FOOTPRINT.width,
  DEFAULT_PLAYER_FOOTPRINT.height,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(hostelCollides, 'Hostel building must be impassable');

// Out of bounds (x: -10, y: 200)
const oobCollides = checkFootCollision(
  -10,
  200,
  DEFAULT_PLAYER_FOOTPRINT.width,
  DEFAULT_PLAYER_FOOTPRINT.height,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(oobCollides, 'Movement outside map bounds must be blocked');
console.log('✓ Test 2 Passed: Solid obstacles and perimeter boundaries strictly enforced');

// Test 3: Strict 4-Way Movement & Diagonal Prohibition
console.log('Testing strict 4-way movement and diagonal prohibition...');
// Normal walk in open area
const openMove = slideMove(
  200,
  440,
  4,
  0,
  DEFAULT_PLAYER_FOOTPRINT,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(openMove.moved && openMove.x === 204 && openMove.y === 440, 'Open horizontal movement must advance correctly');

// Diagonal movement input (+4, -4) must be strictly converted into single-axis move (no diagonal)
const diagMove = slideMove(
  200,
  440,
  4,
  -4,
  DEFAULT_PLAYER_FOOTPRINT,
  CITY1_COLLISION_BOXES,
  CITY1_CONFIG.width,
  CITY1_CONFIG.height
);
assert(diagMove.moved, 'Movement should succeed on primary axis');
assert(diagMove.x === 204 && diagMove.y === 440, 'Diagonal input must be strictly flattened to single-axis cardinal move');
console.log('✓ Test 3 Passed: 4-Way cardinal movement strictly enforced without diagonal drift');

// Test 4: Camera Clamping
console.log('Checking camera bounds clamping...');
// Top-left corner
const camTopLeft = calculateCamera(50, 50, 800, 500, 1024, 572);
assert(camTopLeft.camX === 0 && camTopLeft.camY === 0, 'Camera should clamp to (0,0) at top-left');

// Bottom-right corner
const camBottomRight = calculateCamera(1000, 550, 800, 500, 1024, 572);
assert(camBottomRight.camX === 1024 - 800, 'Camera should clamp to right edge');
assert(camBottomRight.camY === 572 - 500, 'Camera should clamp to bottom edge');
console.log('✓ Test 4 Passed: Camera clamping maintains viewport inside map bounds');

// Test 5: NPC Proximity and Challenge Interface
console.log('Testing NPC positioning and challenge launching contract...');
const warden = CITY1_NPCS.find((n) => n.id === 'npc_hostel_warden');
assert(!!warden, 'Warden Rao Sir must exist in City 1');
assert(warden!.x === 845 && warden!.y === 180, 'Warden must be stationed at Hostel Courtyard');
assert(warden!.scenarioId === 'scenario_hostel_stipend', 'Warden must link to scenario_hostel_stipend');
assert(warden!.cityId === 'city_hostel_commons', 'Warden cityId must match City 1');

// Verify scenario exists in PUZZLES
const puzzle = PUZZLES[warden!.scenarioId!];
assert(!!puzzle, 'scenario_hostel_stipend must exist in master PUZZLES registry');
assert(puzzle.cityId === 'city_hostel_commons', 'Puzzle cityId must be city_hostel_commons');
assert(puzzle.pillar === 'budget', 'Puzzle pillar must be budget');

// Proximity check
const farNpc = findNearbyNpc(75, 450, CITY1_NPCS, 45);
assert(farNpc === null, 'Player at spawn should not be within interaction range of any NPC');

const nearWarden = findNearbyNpc(840, 180, CITY1_NPCS, 60);
assert(nearWarden?.id === 'npc_hostel_warden', 'Player next to Warden must be detected');
console.log('✓ Test 5 Passed: NPC interaction zone and challenge contract verified');

// Test 6: Interactive Objects and Environmental Discoveries
console.log('Testing interactive objects and environmental entities...');
assert(CITY1_INTERACTIVES.length >= 3, 'City 1 must contain at least 3 interactive objects/entities');

const atm = CITY1_INTERACTIVES.find((o) => o.id === 'kiosk_atm_passbook');
assert(!!atm, 'ATM Passbook kiosk must exist');
assert(atm!.x === 925 && atm!.y === 505, 'ATM must be at Savings Bank');

const notice = CITY1_INTERACTIVES.find((o) => o.id === 'notice_scholarship_letter');
assert(!!notice, 'Scholarship Notice Board must exist');

const portal = CITY1_INTERACTIVES.find((o) => o.id === 'portal_city2_exit');
assert(!!portal, 'Road to City 2 portal must exist');
assert(portal!.x === 685 && portal!.y === 30, 'Portal must be located at northern road exit');
console.log('✓ Test 6 Passed: Interactive objects, notices, and portal configured correctly');

console.log('--- ALL CITY 1 WORLD ENGINE TESTS PASSED SUCCESSFULLY! ---');
