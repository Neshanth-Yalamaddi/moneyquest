import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StudentProfile, GameLanguage, NPC } from '../../types';
import {
  CITY1_CONFIG,
  CITY1_COLLISION_BOXES,
  CITY1_NPCS,
  CITY1_INTERACTIVES,
  CityObject,
} from '../../data/maps/city1Data';
import {
  DEFAULT_PLAYER_FOOTPRINT,
  slideMove,
  calculateCamera,
  WorldAudio,
} from '../../engine/worldEngine';
import { ObjectInspectionModal } from './ObjectInspectionModal';
import city1MapImageSrc from '../../assets/maps/city1_map.jpg';
import {
  MapPin,
  Compass,
  Volume2,
  VolumeX,
  Eye,
  EyeOff,
  Navigation,
  CheckCircle2,
  AlertTriangle,
  ZoomIn,
  ZoomOut,
} from 'lucide-react';

interface WorldMapCanvasProps {
  profile: StudentProfile;
  language: GameLanguage;
  onInteractWithNpc: (npc: NPC) => void;
  onEnterCity: (cityId: string) => void;
}

export const WorldMapCanvas: React.FC<WorldMapCanvasProps> = ({
  profile,
  language,
  onInteractWithNpc,
  onEnterCity,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Player state
  const [player, setPlayer] = useState({
    x: CITY1_CONFIG.spawnPoint.x,
    y: CITY1_CONFIG.spawnPoint.y,
    direction: CITY1_CONFIG.spawnPoint.direction as 'up' | 'down' | 'left' | 'right',
    speed: 3.2,
    isMoving: false,
    frame: 0,
  });

  // Map image state & fallback
  const [mapImageLoaded, setMapImageLoaded] = useState<boolean>(false);
  const [mapImageError, setMapImageError] = useState<boolean>(false);
  const mapImageRef = useRef<HTMLImageElement | null>(null);

  // Proximity states
  const [nearbyNpc, setNearbyNpc] = useState<NPC | null>(null);
  const [nearbyObject, setNearbyObject] = useState<CityObject | null>(null);
  const [activeInspectObject, setActiveInspectObject] = useState<CityObject | null>(null);

  // Controls & Camera Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showHitboxes, setShowHitboxes] = useState<boolean>(false);
  const [cameraZoom, setCameraZoom] = useState<'follow' | 'overview'>('overview');
  const [transitionNotification, setTransitionNotification] = useState<string | null>(null);

  // Input management
  const activeDirStackRef = useRef<Array<'up' | 'down' | 'left' | 'right'>>([]);
  const lastStepSoundTime = useRef<number>(0);
  const clickTarget = useRef<{ x: number; y: number } | null>(null);

  const isCity1Solved = profile.completedCityIds.includes('city_hostel_commons');

  // Load Map Asset with Cache Invalidation & Fallback Protection
  useEffect(() => {
    const img = new Image();
    img.src = `${city1MapImageSrc}?v=${Date.now()}`;

    img.onload = () => {
      mapImageRef.current = img;
      setMapImageLoaded(true);
      setMapImageError(false);
    };

    img.onerror = () => {
      console.warn('City 1 map asset could not be loaded directly. Activating high-res procedural fallback.');
      setMapImageError(true);
      setMapImageLoaded(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, []);

  // Keyboard Event Listeners (Strict 4-Way Movement)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      let dir: 'up' | 'down' | 'left' | 'right' | null = null;
      if (key === 'arrowup' || key === 'w') dir = 'up';
      else if (key === 'arrowdown' || key === 's') dir = 'down';
      else if (key === 'arrowleft' || key === 'a') dir = 'left';
      else if (key === 'arrowright' || key === 'd') dir = 'right';

      if (dir) {
        clickTarget.current = null;
        activeDirStackRef.current = activeDirStackRef.current.filter((d) => d !== dir);
        activeDirStackRef.current.push(dir);
      }

      // Interaction trigger via [E] or [Space]
      if (key === 'e' || key === ' ') {
        if (nearbyNpc) {
          e.preventDefault();
          WorldAudio.playInteract();
          onInteractWithNpc(nearbyNpc);
        } else if (nearbyObject) {
          e.preventDefault();
          WorldAudio.playDiscovery();
          setActiveInspectObject(nearbyObject);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();
      let dir: 'up' | 'down' | 'left' | 'right' | null = null;
      if (key === 'arrowup' || key === 'w') dir = 'up';
      else if (key === 'arrowdown' || key === 's') dir = 'down';
      else if (key === 'arrowleft' || key === 'a') dir = 'left';
      else if (key === 'arrowright' || key === 'd') dir = 'right';

      if (dir) {
        activeDirStackRef.current = activeDirStackRef.current.filter((d) => d !== dir);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [nearbyNpc, nearbyObject, onInteractWithNpc]);

  // Audio mute toggle
  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    WorldAudio.enabled = next;
  };

  // Main 60 FPS Game Loop
  useEffect(() => {
    let animationFrameId: number;
    let animTimer = 0;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gameLoop = (timestamp: number) => {
      animTimer += 0.05;

      // 1. Compute Strict 4-Way Movement from Keyboard or Mouse Click Target
      let rawDx = 0;
      let rawDy = 0;

      if (activeDirStackRef.current.length > 0) {
        const activeDir = activeDirStackRef.current[activeDirStackRef.current.length - 1];
        if (activeDir === 'up') rawDy = -player.speed;
        else if (activeDir === 'down') rawDy = player.speed;
        else if (activeDir === 'left') rawDx = -player.speed;
        else if (activeDir === 'right') rawDx = player.speed;
      } else if (clickTarget.current) {
        const diffX = clickTarget.current.x - player.x;
        const diffY = clickTarget.current.y - player.y;
        if (Math.abs(diffX) > 4) {
          rawDx = Math.sign(diffX) * player.speed;
        } else if (Math.abs(diffY) > 4) {
          rawDy = Math.sign(diffY) * player.speed;
        } else {
          clickTarget.current = null;
        }
      }

      const isMoving = rawDx !== 0 || rawDy !== 0;

      // 2. Perform 2.5D Foot-Aligned Collision & Wall Sliding
      if (isMoving) {
        const moveResult = slideMove(
          player.x,
          player.y,
          rawDx,
          rawDy,
          DEFAULT_PLAYER_FOOTPRINT,
          CITY1_COLLISION_BOXES,
          CITY1_CONFIG.width,
          CITY1_CONFIG.height
        );

        if (moveResult.moved) {
          // Play periodic step sound
          if (timestamp - lastStepSoundTime.current > 280) {
            WorldAudio.playStep();
            lastStepSoundTime.current = timestamp;
          }

          let newDir = player.direction;
          if (Math.abs(rawDx) > Math.abs(rawDy)) {
            newDir = rawDx < 0 ? 'left' : 'right';
          } else if (rawDy !== 0) {
            newDir = rawDy < 0 ? 'up' : 'down';
          }

          setPlayer((prev) => ({
            ...prev,
            x: moveResult.x,
            y: moveResult.y,
            direction: newDir,
            isMoving: true,
            frame: (prev.frame + 1) % 60,
          }));
        } else {
          setPlayer((prev) => ({ ...prev, isMoving: false }));
        }
      } else {
        if (player.isMoving) {
          setPlayer((prev) => ({ ...prev, isMoving: false }));
        }
      }

      // 3. Proximity Checks (NPCs & Objects)
      let foundNpc: NPC | null = null;
      for (const npc of CITY1_NPCS) {
        if (Math.hypot(player.x - npc.x, player.y - npc.y) <= 45) {
          foundNpc = npc;
          break;
        }
      }
      setNearbyNpc(foundNpc);

      let foundObj: CityObject | null = null;
      if (!foundNpc) {
        for (const obj of CITY1_INTERACTIVES) {
          if (Math.hypot(player.x - obj.x, player.y - obj.y) <= obj.radius) {
            foundObj = obj;
            break;
          }
        }
      }
      setNearbyObject(foundObj);

      // 4. Viewport & Camera Setup
      const mapW = CITY1_CONFIG.width;
      const mapH = CITY1_CONFIG.height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();

      if (cameraZoom === 'follow') {
        const zoomFactor = 1.35;
        const viewW = canvas.width / zoomFactor;
        const viewH = canvas.height / zoomFactor;
        const { camX, camY } = calculateCamera(player.x, player.y, viewW, viewH, mapW, mapH);

        ctx.scale(zoomFactor, zoomFactor);
        ctx.translate(-camX, -camY);
      } else {
        // Overview mode: scale 1024x572 to fit canvas cleanly
        const scaleX = canvas.width / mapW;
        const scaleY = canvas.height / mapH;
        ctx.scale(scaleX, scaleY);
      }

      // 5. Render Map Background Artwork (or High-Fidelity Procedural Fallback)
      if (mapImageRef.current && mapImageLoaded && !mapImageError) {
        ctx.drawImage(mapImageRef.current, 0, 0, mapW, mapH);
      } else {
        // High-Fidelity Fallback Renderer
        renderProceduralMapFallback(ctx, mapW, mapH);
      }

      // 6. Environmental Atmospheric Animation (Water Ripples on Canal)
      ctx.fillStyle = 'rgba(255, 255, 255, 0.2)';
      for (let i = 0; i < 4; i++) {
        const rippleY = 330 + ((animTimer * 12 + i * 50) % 200);
        ctx.fillRect(25 + Math.sin(animTimer + i) * 8, rippleY, 35, 1.5);
      }

      // 7. Render Debug Collision Geometry (When Enabled)
      if (showHitboxes) {
        ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1;
        CITY1_COLLISION_BOXES.forEach((b) => {
          ctx.fillRect(b.x, b.y, b.w, b.h);
          ctx.strokeRect(b.x, b.y, b.w, b.h);
        });

        // Player Footprint Hitbox
        ctx.fillStyle = 'rgba(34, 197, 94, 0.6)';
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5;
        const halfFootW = DEFAULT_PLAYER_FOOTPRINT.width / 2;
        const halfFootH = DEFAULT_PLAYER_FOOTPRINT.height / 2;
        ctx.fillRect(player.x - halfFootW, player.y - halfFootH, DEFAULT_PLAYER_FOOTPRINT.width, DEFAULT_PLAYER_FOOTPRINT.height);
        ctx.strokeRect(player.x - halfFootW, player.y - halfFootH, DEFAULT_PLAYER_FOOTPRINT.width, DEFAULT_PLAYER_FOOTPRINT.height);
      }

      // 8. Render Interactive Objects & Collectibles
      CITY1_INTERACTIVES.forEach((obj) => {
        const isNearby = nearbyObject?.id === obj.id;
        const pulse = Math.sin(animTimer * 3) * 3;

        // Ground Beacon Ring
        ctx.strokeStyle = isNearby ? '#f59e0b' : '#38bdf8';
        ctx.lineWidth = isNearby ? 2.5 : 1.5;
        ctx.beginPath();
        ctx.arc(obj.x, obj.y + 4, 14 + pulse, 0, Math.PI * 2);
        ctx.stroke();

        // Kiosk Icon Card
        ctx.fillStyle = isNearby ? 'rgba(245, 158, 11, 0.95)' : 'rgba(15, 23, 42, 0.85)';
        ctx.strokeStyle = isNearby ? '#ffffff' : '#64748b';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.roundRect(obj.x - 14, obj.y - 18, 28, 24, 6);
        ctx.fill();
        ctx.stroke();

        // Icon representation
        ctx.fillStyle = isNearby ? '#0f172a' : '#f8fafc';
        ctx.font = '12px serif';
        ctx.textAlign = 'center';
        let iconSymbol = '📍';
        if (obj.type === 'kiosk') iconSymbol = '🏧';
        if (obj.type === 'collectible') iconSymbol = '📜';
        if (obj.type === 'landmark') iconSymbol = '📊';
        if (obj.type === 'portal') iconSymbol = '🧭';
        ctx.fillText(iconSymbol, obj.x, obj.y - 2);

        // Interaction Prompt Indicator
        if (isNearby) {
          ctx.fillStyle = '#f59e0b';
          ctx.font = 'bold 9px Inter, sans-serif';
          ctx.fillText('[E] Inspect', obj.x, obj.y - 24);
        }
      });

      // 9. 2.5D Depth Sorted Rendering for Player and NPCs
      const renderEntities: Array<{
        y: number;
        render: () => void;
      }> = [];

      // Add NPCs to sorting list
      CITY1_NPCS.forEach((npc) => {
        renderEntities.push({
          y: npc.y,
          render: () => renderNpc(ctx, npc, nearbyNpc?.id === npc.id, isCity1Solved, animTimer),
        });
      });

      // Add Player to sorting list
      renderEntities.push({
        y: player.y,
        render: () => renderPlayer(ctx, player, animTimer),
      });

      // Sort by Y-coordinate so entities lower down render on top
      renderEntities.sort((a, b) => a.y - b.y);
      renderEntities.forEach((e) => e.render());

      ctx.restore();

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [player, nearbyNpc, nearbyObject, mapImageLoaded, mapImageError, showHitboxes, cameraZoom, isCity1Solved]);

  // Procedural Fallback Map Generator (Ensures Zero Blank Screen if asset fails)
  const renderProceduralMapFallback = (ctx: CanvasRenderingContext2D, mapW: number, mapH: number) => {
    // Ground
    ctx.fillStyle = '#47693d';
    ctx.fillRect(0, 0, mapW, mapH);

    // River
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(0, 310, 95, 262);

    // Wooden Bridge
    ctx.fillStyle = '#854d0e';
    ctx.fillRect(30, 420, 80, 55);

    // Paved Roads
    ctx.fillStyle = '#94a3b8';
    ctx.fillRect(110, 430, 550, 40);
    ctx.fillRect(660, 0, 55, 470);
    ctx.fillRect(195, 215, 470, 35);
    ctx.fillRect(715, 430, 240, 40);

    // Buildings
    const fallbackBuildings = [
      { name: 'SCHOOL & LIBRARY', x: 25, y: 20, w: 305, h: 135, color: '#b45309' },
      { name: 'BOOKSHOP', x: 330, y: 115, w: 100, h: 95, color: '#0284c7' },
      { name: 'STUDY ROOM', x: 475, y: 65, w: 155, h: 125, color: '#059669' },
      { name: 'HOSTEL', x: 740, y: 20, w: 240, h: 180, color: '#d97706' },
      { name: 'CANTEEN', x: 335, y: 260, w: 180, h: 95, color: '#e11d48' },
      { name: 'ELECTRONICS REPAIR', x: 605, y: 240, w: 130, h: 115, color: '#4f46e5' },
      { name: 'SAVINGS BANK', x: 810, y: 365, w: 145, h: 125, color: '#16a34a' },
    ];

    fallbackBuildings.forEach((b) => {
      ctx.fillStyle = b.color;
      ctx.fillRect(b.x, b.y, b.w, b.h);
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 2;
      ctx.strokeRect(b.x, b.y, b.w, b.h);
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 11px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(b.name, b.x + b.w / 2, b.y + b.h / 2);
    });
  };

  // 2.5D Depth-Aligned NPC Renderer (Modular Placeholder Architecture)
  const renderNpc = (
    ctx: CanvasRenderingContext2D,
    npc: NPC,
    isNearby: boolean,
    isSolved: boolean,
    animTimer: number
  ) => {
    // Foot shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.beginPath();
    ctx.ellipse(npc.x, npc.y + 4, 14, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // NPC Avatar Base & Frame
    const bob = isNearby ? Math.sin(animTimer * 6) * 2 : 0;
    const isWarden = npc.id === 'npc_hostel_warden';

    ctx.fillStyle = isNearby ? '#f59e0b' : '#0f172a';
    ctx.strokeStyle = isNearby ? '#ffffff' : '#64748b';
    ctx.lineWidth = isNearby ? 2 : 1;
    ctx.beginPath();
    ctx.roundRect(npc.x - 13, npc.y - 25 + bob, 26, 26, 7);
    ctx.fill();
    ctx.stroke();

    // Emoji/Avatar Glyph
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText(npc.avatar, npc.x, npc.y - 7 + bob);

    // Name Plate
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.fillText(npc.name, npc.x, npc.y + 16);

    // Role Subtitle
    ctx.fillStyle = '#94a3b8';
    ctx.font = '7.5px Inter, sans-serif';
    ctx.fillText(npc.role, npc.x, npc.y + 25);

    // Quest Indicator Beacon for Warden Rao Sir (Primary Challenge)
    if (isWarden) {
      const beaconBob = Math.sin(animTimer * 5) * 3;
      if (!isSolved) {
        ctx.fillStyle = '#ef4444';
        ctx.beginPath();
        ctx.arc(npc.x, npc.y - 36 + beaconBob, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 10px Inter, sans-serif';
        ctx.fillText('!', npc.x, npc.y - 33 + beaconBob);
      } else {
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.arc(npc.x, npc.y - 36 + beaconBob, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 9px Inter, sans-serif';
        ctx.fillText('✓', npc.x, npc.y - 33 + beaconBob);
      }
    }

    // Floating Interaction Prompt
    if (isNearby) {
      ctx.fillStyle = '#f59e0b';
      ctx.font = 'bold 9px Inter, sans-serif';
      ctx.fillText('[E] Talk', npc.x, npc.y - 38);
    }
  };

  // 2.5D Depth-Aligned Player Character Renderer
  const renderPlayer = (
    ctx: CanvasRenderingContext2D,
    p: typeof player,
    animTimer: number
  ) => {
    // Logical foot shadow
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 2, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    // Walking animation bob
    const walkBob = p.isMoving ? Math.sin(animTimer * 12) * 2 : 0;

    // Student Character Card Placeholder (Replaceable by external sprite sheet)
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.roundRect(p.x - 12, p.y - 26 + walkBob, 24, 26, 6);
    ctx.fill();
    ctx.stroke();

    // Scholar Avatar Emoji
    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🧑‍🎓', p.x, p.y - 8 + walkBob);

    // Directional Indicator Pip
    ctx.fillStyle = '#f59e0b';
    ctx.beginPath();
    let pipX = p.x;
    let pipY = p.y - 13 + walkBob;
    if (p.direction === 'up') pipY -= 15;
    if (p.direction === 'down') pipY += 15;
    if (p.direction === 'left') pipX -= 15;
    if (p.direction === 'right') pipX += 15;
    ctx.arc(pipX, pipY, 3, 0, Math.PI * 2);
    ctx.fill();
  };

  // Direct Canvas Click Handling
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    let clickX = (e.clientX - rect.left) * (canvas.width / rect.width);
    let clickY = (e.clientY - rect.top) * (canvas.height / rect.height);

    if (cameraZoom === 'follow') {
      const zoomFactor = 1.35;
      const viewW = canvas.width / zoomFactor;
      const viewH = canvas.height / zoomFactor;
      const { camX, camY } = calculateCamera(player.x, player.y, viewW, viewH, CITY1_CONFIG.width, CITY1_CONFIG.height);
      clickX = clickX / zoomFactor + camX;
      clickY = clickY / zoomFactor + camY;
    }

    // 1. Check if clicked an NPC directly
    for (const npc of CITY1_NPCS) {
      if (Math.hypot(clickX - npc.x, clickY - npc.y) <= 45) {
        WorldAudio.playInteract();
        onInteractWithNpc(npc);
        return;
      }
    }

    // 2. Check if clicked an Interactive Object directly
    for (const obj of CITY1_INTERACTIVES) {
      if (Math.hypot(clickX - obj.x, clickY - obj.y) <= obj.radius + 15) {
        WorldAudio.playDiscovery();
        setActiveInspectObject(obj);
        return;
      }
    }

    // 3. Set click walk destination
    clickTarget.current = { x: clickX, y: clickY };
  };

  // Mobile Touch D-Pad Handler
  const handleTouchDpad = (dir: 'up' | 'down' | 'left' | 'right') => {
    let dx = 0;
    let dy = 0;
    const delta = 18;
    if (dir === 'up') dy -= delta;
    if (dir === 'down') dy += delta;
    if (dir === 'left') dx -= delta;
    if (dir === 'right') dx += delta;

    const res = slideMove(
      player.x,
      player.y,
      dx,
      dy,
      DEFAULT_PLAYER_FOOTPRINT,
      CITY1_COLLISION_BOXES,
      CITY1_CONFIG.width,
      CITY1_CONFIG.height
    );

    if (res.moved) {
      WorldAudio.playStep();
      setPlayer((prev) => ({
        ...prev,
        x: res.x,
        y: res.y,
        direction: dir,
        isMoving: true,
      }));
    }
  };

  // Transition handler for City 2 Portal
  const handleCityTransition = (targetCityId: string) => {
    if (!isCity1Solved) {
      setTransitionNotification('Warden Rao Sir requires your hostel mess dues cleared before leaving City 1!');
      setTimeout(() => setTransitionNotification(null), 4000);
      return;
    }
    setTransitionNotification(`Advancing to ${targetCityId}... (Region 1 expansion scheduled for subsequent phase)`);
    onEnterCity(targetCityId);
    setTimeout(() => setTransitionNotification(null), 4500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-4 w-full">
      {/* City 1 Navigation & Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 rounded-2xl p-3.5 mb-4 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">City 1: Hostel Commons</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Pillar 1: Plan & Budget
              </span>
            </div>
            <div className="text-xs text-slate-400">The Scholar's District — Monthly Stipend: ₹5,000</div>
          </div>
        </div>

        {/* Objective & Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Quest Status Pill */}
          <div
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border ${
              isCity1Solved
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
            }`}
          >
            {isCity1Solved ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Mess Dues Cleared (Pillar 1 Mastered)</span>
              </>
            ) : (
              <>
                <MapPin className="w-4 h-4 text-amber-400 animate-pulse" />
                <span>Meet Warden Rao Sir at the Hostel Courtyard</span>
              </>
            )}
          </div>

          {/* Camera View Mode */}
          <button
            onClick={() => setCameraZoom((z) => (z === 'overview' ? 'follow' : 'overview'))}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
            title={cameraZoom === 'overview' ? 'Switch to Follow Camera' : 'Switch to Full Overview'}
          >
            {cameraZoom === 'overview' ? <ZoomIn className="w-4 h-4" /> : <ZoomOut className="w-4 h-4" />}
          </button>

          {/* Hitbox Debug Toggle */}
          <button
            onClick={() => setShowHitboxes((h) => !h)}
            className={`p-2 rounded-xl border transition ${
              showHitboxes
                ? 'bg-red-500/20 border-red-500/40 text-red-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Toggle Collision Geometry (Debug)"
          >
            {showHitboxes ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-2 rounded-xl border transition ${
              soundEnabled
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-400'
            }`}
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Main Exploration Canvas Viewport */}
      <div className="relative rounded-2xl overflow-hidden border-2 border-slate-700/80 shadow-2xl bg-slate-950 flex justify-center">
        <canvas
          ref={canvasRef}
          width={1024}
          height={572}
          onClick={handleCanvasClick}
          className="w-full max-w-full h-auto cursor-pointer block select-none"
        />

        {/* Legend / Instructions Overlay */}
        <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl px-3 py-1.5 text-[11px] text-slate-300 hidden sm:flex items-center gap-2 shadow-lg">
          <Navigation className="w-3.5 h-3.5 text-amber-400" />
          <span>
            Move with <strong className="text-amber-400">WASD / Arrow Keys</strong> or click map. Press{' '}
            <strong className="text-amber-400">[E] / Space</strong> to interact.
          </span>
        </div>

        {/* Coordinates HUD */}
        <div className="absolute top-3 right-3 bg-slate-950/85 backdrop-blur-md border border-slate-800 rounded-xl px-2.5 py-1 text-[10px] text-slate-400 hidden sm:block font-mono">
          X: {Math.round(player.x)} | Y: {Math.round(player.y)}
        </div>

        {/* Proximity Interaction Prompt Banner */}
        {nearbyNpc && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/95 border-2 border-amber-400 text-slate-100 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce z-20">
            <span className="text-2xl">{nearbyNpc.avatar}</span>
            <div className="text-xs">
              <div>
                <span className="font-bold text-amber-300">{nearbyNpc.name}</span>{' '}
                <span className="text-slate-400">({nearbyNpc.role})</span>
              </div>
              <div className="text-slate-400 text-[11px]">Press [E] or Click to Converse</div>
            </div>
            <button
              onClick={() => {
                WorldAudio.playInteract();
                onInteractWithNpc(nearbyNpc);
              }}
              className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl ml-2 shadow-md transition"
            >
              Talk
            </button>
          </div>
        )}

        {nearbyObject && !nearbyNpc && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/95 border-2 border-sky-400 text-slate-100 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce z-20">
            <span className="text-xl">📍</span>
            <div className="text-xs">
              <div className="font-bold text-sky-300">{nearbyObject.name}</div>
              <div className="text-slate-400 text-[11px]">Press [E] or Click to Inspect</div>
            </div>
            <button
              onClick={() => {
                WorldAudio.playDiscovery();
                setActiveInspectObject(nearbyObject);
              }}
              className="px-3.5 py-1.5 bg-sky-500 hover:bg-sky-400 text-slate-950 text-xs font-bold rounded-xl ml-2 shadow-md transition"
            >
              Inspect
            </button>
          </div>
        )}

        {/* Transition / Fallback Toast Notification */}
        {transitionNotification && (
          <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-slate-900/95 border border-amber-500 text-amber-200 px-5 py-2.5 rounded-2xl shadow-2xl text-xs font-semibold flex items-center gap-2.5 z-30 animate-fadeIn">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
            <span>{transitionNotification}</span>
          </div>
        )}
      </div>

      {/* Mobile Touch Virtual D-Pad */}
      <div className="sm:hidden flex items-center justify-between mt-4 bg-slate-900 border border-slate-800 rounded-2xl p-4 shadow-lg">
        <div className="text-xs text-slate-400">
          <div className="font-bold text-white">Touch Navigator</div>
          <div className="font-medium text-amber-400">Tap arrows to walk</div>
        </div>

        <div className="grid grid-cols-3 gap-2 w-36">
          <div />
          <button
            onClick={() => handleTouchDpad('up')}
            className="p-3 bg-slate-800 active:bg-amber-500 active:text-slate-950 rounded-xl text-center font-bold text-slate-200 transition"
          >
            ▲
          </button>
          <div />

          <button
            onClick={() => handleTouchDpad('left')}
            className="p-3 bg-slate-800 active:bg-amber-500 active:text-slate-950 rounded-xl text-center font-bold text-slate-200 transition"
          >
            ◀
          </button>
          <button
            onClick={() => handleTouchDpad('down')}
            className="p-3 bg-slate-800 active:bg-amber-500 active:text-slate-950 rounded-xl text-center font-bold text-slate-200 transition"
          >
            ▼
          </button>
          <button
            onClick={() => handleTouchDpad('right')}
            className="p-3 bg-slate-800 active:bg-amber-500 active:text-slate-950 rounded-xl text-center font-bold text-slate-200 transition"
          >
            ▶
          </button>
        </div>
      </div>

      {/* Inspectable Object Dialog Modal */}
      {activeInspectObject && (
        <ObjectInspectionModal
          object={activeInspectObject}
          language={language}
          isCitySolved={isCity1Solved}
          onClose={() => setActiveInspectObject(null)}
          onTransition={handleCityTransition}
        />
      )}
    </div>
  );
};
