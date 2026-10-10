import { CollisionBox } from '../data/maps/city1Data';
import { NPC } from '../types';

export interface Rect {
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface PlayerFootprint {
  width: number;
  height: number;
  offsetY: number; // visual sprite offset relative to foot center
}

export const DEFAULT_PLAYER_FOOTPRINT: PlayerFootprint = {
  width: 14,
  height: 8,
  offsetY: -16,
};

/**
 * Checks if two axis-aligned bounding boxes intersect.
 */
export function rectsIntersect(a: Rect, b: Rect): boolean {
  return !(
    a.x + a.w <= b.x ||
    a.x >= b.x + b.w ||
    a.y + a.h <= b.y ||
    a.y >= b.y + b.h
  );
}

/**
 * Evaluates whether a foot bounding box collides with map bounds or collision geometry.
 */
export function checkFootCollision(
  footX: number,
  footY: number,
  footW: number,
  footH: number,
  boxes: CollisionBox[],
  mapW: number,
  mapH: number
): boolean {
  const halfW = footW / 2;
  const halfH = footH / 2;

  // Perimeter boundary check
  if (
    footX - halfW < 0 ||
    footX + halfW > mapW ||
    footY - halfH < 0 ||
    footY + halfH > mapH
  ) {
    return true;
  }

  const footRect: Rect = {
    x: footX - halfW,
    y: footY - halfH,
    w: footW,
    h: footH,
  };

  for (const box of boxes) {
    if (
      rectsIntersect(footRect, {
        x: box.x,
        y: box.y,
        w: box.w,
        h: box.h,
      })
    ) {
      return true;
    }
  }

  return false;
}

/**
 * Responsive 4-directional cardinal movement engine.
 * Completely prohibits diagonal movement and cleanly checks collision against boundaries.
 */
export function slideMove(
  curX: number,
  curY: number,
  rawDx: number,
  rawDy: number,
  footprint: PlayerFootprint,
  boxes: CollisionBox[],
  mapW: number,
  mapH: number
): { x: number; y: number; moved: boolean } {
  if (rawDx === 0 && rawDy === 0) {
    return { x: curX, y: curY, moved: false };
  }

  // Strictly enforce 4-way movement (no diagonal)
  let dx = rawDx;
  let dy = rawDy;
  if (dx !== 0 && dy !== 0) {
    if (Math.abs(dx) >= Math.abs(dy)) {
      dy = 0;
    } else {
      dx = 0;
    }
  }

  const targetX = curX + dx;
  const targetY = curY + dy;

  // Check collision for target position
  if (!checkFootCollision(targetX, targetY, footprint.width, footprint.height, boxes, mapW, mapH)) {
    return { x: targetX, y: targetY, moved: true };
  }

  // Blocked
  return { x: curX, y: curY, moved: false };
}

/**
 * Clamped camera follow mathematics.
 * Centers on player when inside the map, clamps to edges.
 */
export function calculateCamera(
  playerX: number,
  playerY: number,
  viewportW: number,
  viewportH: number,
  mapW: number,
  mapH: number
): { camX: number; camY: number } {
  // If viewport is larger than map, center the entire map
  let camX = 0;
  let camY = 0;

  if (viewportW >= mapW) {
    camX = (mapW - viewportW) / 2;
  } else {
    const rawX = playerX - viewportW / 2;
    camX = Math.max(0, Math.min(mapW - viewportW, rawX));
  }

  if (viewportH >= mapH) {
    camY = (mapH - viewportH) / 2;
  } else {
    const rawY = playerY - viewportH / 2;
    camY = Math.max(0, Math.min(mapH - viewportH, rawY));
  }

  return { camX, camY };
}

/**
 * Proximity entity locator for NPCs.
 */
export function findNearbyNpc(
  px: number,
  py: number,
  npcs: NPC[],
  maxDist = 75
): NPC | null {
  let closest: NPC | null = null;
  let minDist = maxDist;

  for (const npc of npcs) {
    const dist = Math.hypot(px - npc.x, py - npc.y);
    if (dist <= minDist) {
      minDist = dist;
      closest = npc;
    }
  }

  return closest;
}

/**
 * Procedural Retro Audio Synthesizer (Zero External Dependencies)
 * Provides crisp audio cues for footsteps, interactions, discoveries, and alerts.
 */
class SoundEngine {
  private ctx: AudioContext | null = null;
  public enabled = true;

  private getContext(): AudioContext | null {
    if (!this.enabled) return null;
    if (typeof window === 'undefined') return null;

    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
    return this.ctx;
  }

  public playStep(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(110, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(55, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.06);
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public playInteract(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
      osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.08); // E5

      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.23);
    } catch {
      // Fallback
    }
  }

  public playDiscovery(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const notes = [440, 554.37, 659.25, 880]; // A major fanfare
      notes.forEach((freq, idx) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;

        const startTime = ctx.currentTime + idx * 0.06;
        gain.gain.setValueAtTime(0.1, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.15);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(startTime);
        osc.stop(startTime + 0.16);
      });
    } catch {
      // Fallback
    }
  }

  public playBlocked(): void {
    const ctx = this.getContext();
    if (!ctx) return;
    try {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(80, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {
      // Fallback
    }
  }
}

export const WorldAudio = new SoundEngine();
