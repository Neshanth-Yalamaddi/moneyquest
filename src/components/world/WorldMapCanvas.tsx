import React, { useRef, useEffect, useState, useCallback } from 'react';
import { StudentProfile, GameLanguage, NPC } from '../../types';
import {
  CITY1_CONFIG,
  CITY1_COLLISION_BOXES,
  CITY1_COLLISION_GRID,
  CITY1_NPCS,
  CITY1_INTERACTIVES,
  CityObject,
  getCity1NpcCollisionBoxes,
} from '../../data/maps/city1Data';
import {
  DEFAULT_PLAYER_FOOTPRINT,
  slideMove,
  calculateCamera,
  WorldAudio,
} from '../../engine/worldEngine';
import { ObjectInspectionModal } from './ObjectInspectionModal';
import city1MapImageSrc from '../../assets/maps/city1_map.jpg';
import playerSpriteSheetSrc from '../../assets/characters/player_spritesheet.png';
import teacherSpriteSheetSrc from '../../assets/characters/npcs/teacher_spritesheet.png';
import watchmanSpriteSheetSrc from '../../assets/characters/npcs/watchman_spritesheet.png';
import hostelWardenSpriteSheetSrc from '../../assets/characters/npcs/hostel_warden_spritesheet.png';
import repairTechSpriteSheetSrc from '../../assets/characters/npcs/repair_tech_spritesheet.png';
import teaVendorSpriteSheetSrc from '../../assets/characters/npcs/tea_vendor_spritesheet.png';
import {
  CharacterDirection,
  PLAYER_SPRITE_CONFIG,
  NPC_DEFAULT_SPRITE_CONFIG,
  NPC_SPRITE_REGISTRY,
  registerNpcSprite,
  renderCharacterSprite,
} from '../../engine/characterAnimation';
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
  Maximize2,
  Minimize2,
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

  // Player & NPC Pixel Art Sprite Sheet State
  const [playerSpriteLoaded, setPlayerSpriteLoaded] = useState<boolean>(false);
  const playerSpriteRef = useRef<HTMLImageElement | null>(null);
  const animFrameCounter = useRef<number>(0);
  const animTimerAccumulator = useRef<number>(0);
  const lastLoopTimestamp = useRef<number>(0);
  const npcSpriteImagesRef = useRef<Map<string, HTMLImageElement>>(new Map());

  // Proximity states
  const [nearbyNpc, setNearbyNpc] = useState<NPC | null>(null);
  const [nearbyObject, setNearbyObject] = useState<CityObject | null>(null);
  const [activeInspectObject, setActiveInspectObject] = useState<CityObject | null>(null);

  // Controls & Camera Settings
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [showHitboxes, setShowHitboxes] = useState<boolean>(false);
  const [cameraZoom, setCameraZoom] = useState<'follow' | 'overview'>('overview');
  const [zoomLevel, setZoomLevel] = useState<number>(2.0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [transitionNotification, setTransitionNotification] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

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

  // Register NPC pixel art spritesheets into the animation registry
  useEffect(() => {
    registerNpcSprite('npc_hostel_warden', { imageSrc: hostelWardenSpriteSheetSrc, config: NPC_DEFAULT_SPRITE_CONFIG });
    registerNpcSprite('npc_repair_tech', { imageSrc: repairTechSpriteSheetSrc, config: NPC_DEFAULT_SPRITE_CONFIG });
    registerNpcSprite('npc_canteen_manager', { imageSrc: teaVendorSpriteSheetSrc, config: NPC_DEFAULT_SPRITE_CONFIG });
    registerNpcSprite('npc_senior_librarian', { imageSrc: teacherSpriteSheetSrc, config: NPC_DEFAULT_SPRITE_CONFIG });
    registerNpcSprite('npc_security_guard', { imageSrc: watchmanSpriteSheetSrc, config: NPC_DEFAULT_SPRITE_CONFIG });
  }, []);

  // Load Player & NPC Pixel Art Spritesheets with Dynamic Cache Invalidation
  useEffect(() => {
    const spriteImg = new Image();
    spriteImg.src = `${playerSpriteSheetSrc}?v=${Date.now()}`;

    spriteImg.onload = () => {
      playerSpriteRef.current = spriteImg;
      setPlayerSpriteLoaded(true);
    };

    spriteImg.onerror = () => {
      console.warn('Player spritesheet could not be loaded. Falling back to stylized avatar.');
      setPlayerSpriteLoaded(false);
    };

    // Preload NPC spritesheets
    const npcSources: Record<string, string> = {
      npc_hostel_warden: hostelWardenSpriteSheetSrc,
      npc_repair_tech: repairTechSpriteSheetSrc,
      npc_canteen_manager: teaVendorSpriteSheetSrc,
      npc_senior_librarian: teacherSpriteSheetSrc,
      npc_security_guard: watchmanSpriteSheetSrc,
    };

    Object.entries(npcSources).forEach(([id, src]) => {
      const img = new Image();
      img.src = `${src}?v=${Date.now()}`;
      img.onload = () => {
        npcSpriteImagesRef.current.set(id, img);
      };
      npcSpriteImagesRef.current.set(id, img);
    });

    return () => {
      spriteImg.onload = null;
      spriteImg.onerror = null;
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

  // Fullscreen toggle handler
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      const elem = document.documentElement;
      if (elem.requestFullscreen) {
        elem.requestFullscreen().catch(() => {
          containerRef.current?.requestFullscreen().catch(() => {});
        });
      } else if (containerRef.current?.requestFullscreen) {
        containerRef.current.requestFullscreen().catch(() => {});
      }
      setIsFullscreen(true);
    } else {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
      }
      setIsFullscreen(false);
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

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

      // Update Character Sprite Animation Accumulative Frame Timer
      const deltaMs = lastLoopTimestamp.current > 0 ? Math.min(timestamp - lastLoopTimestamp.current, 100) : 16;
      lastLoopTimestamp.current = timestamp;

      animTimerAccumulator.current += deltaMs;
      const frameDuration = player.isMoving
        ? PLAYER_SPRITE_CONFIG.frameDurationMs.walk
        : PLAYER_SPRITE_CONFIG.frameDurationMs.idle;
      const maxFrames = player.isMoving
        ? PLAYER_SPRITE_CONFIG.frameCount.walk
        : PLAYER_SPRITE_CONFIG.frameCount.idle;
      while (animTimerAccumulator.current >= frameDuration) {
        animTimerAccumulator.current -= frameDuration;
        animFrameCounter.current = (animFrameCounter.current + 1) % maxFrames;
      }

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

      // 2. Perform 2.5D Foot-Aligned Collision & Wall Sliding (incorporating NPC physical hitboxes)
      if (isMoving) {
        const dynamicCollisionBoxes = [
          ...CITY1_COLLISION_BOXES,
          ...getCity1NpcCollisionBoxes(CITY1_NPCS),
        ];

        const moveResult = slideMove(
          player.x,
          player.y,
          rawDx,
          rawDy,
          DEFAULT_PLAYER_FOOTPRINT,
          dynamicCollisionBoxes,
          CITY1_CONFIG.width,
          CITY1_CONFIG.height,
          CITY1_COLLISION_GRID
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
        const zoomFactor = zoomLevel;
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

      // 7. Render Development Collision Debug Overlay (Visualizes blocked & walkable spatial grid)
      if (showHitboxes) {
        // A. Visualise 8x8 Spatial Collision Grid (blocked tiles in translucent red)
        const ts = CITY1_COLLISION_GRID.tileSize;
        const cols = CITY1_COLLISION_GRID.cols;
        const rows = CITY1_COLLISION_GRID.rows;
        const cells = CITY1_COLLISION_GRID.cells;

        ctx.fillStyle = 'rgba(239, 68, 68, 0.25)';
        for (let r = 0; r < rows; r++) {
          for (let c = 0; c < cols; c++) {
            if (cells[r * cols + c] === 1) {
              ctx.fillRect(c * ts, r * ts, ts, ts);
            }
          }
        }

        // B. Obstacle Physical Boundary Outlines
        ctx.strokeStyle = '#ef4444';
        ctx.lineWidth = 1;
        CITY1_COLLISION_BOXES.forEach((b) => {
          ctx.strokeRect(b.x, b.y, b.w, b.h);
        });

        // C. NPC Foot Hitboxes (Translucent amber)
        const npcBoxes = getCity1NpcCollisionBoxes(CITY1_NPCS);
        ctx.fillStyle = 'rgba(245, 158, 11, 0.45)';
        ctx.strokeStyle = '#f59e0b';
        ctx.lineWidth = 1.5;
        npcBoxes.forEach((b) => {
          ctx.fillRect(b.x, b.y, b.w, b.h);
          ctx.strokeRect(b.x, b.y, b.w, b.h);
        });

        // C. Player Footprint Hitbox (Walk contact area)
        ctx.fillStyle = 'rgba(34, 197, 94, 0.7)';
        ctx.strokeStyle = '#22c55e';
        ctx.lineWidth = 1.5;
        const halfFootW = DEFAULT_PLAYER_FOOTPRINT.width / 2;
        const halfFootH = DEFAULT_PLAYER_FOOTPRINT.height / 2;
        ctx.fillRect(player.x - halfFootW, player.y - halfFootH, DEFAULT_PLAYER_FOOTPRINT.width, DEFAULT_PLAYER_FOOTPRINT.height);
        ctx.strokeRect(player.x - halfFootW, player.y - halfFootH, DEFAULT_PLAYER_FOOTPRINT.width, DEFAULT_PLAYER_FOOTPRINT.height);

        // D. Development HUD Badge
        ctx.fillStyle = 'rgba(15, 23, 42, 0.85)';
        ctx.fillRect(player.x - 46, player.y - 38, 92, 16);
        ctx.strokeStyle = '#38bdf8';
        ctx.strokeRect(player.x - 46, player.y - 38, 92, 16);
        ctx.fillStyle = '#38bdf8';
        ctx.font = 'bold 8px monospace';
        ctx.textAlign = 'center';
        ctx.fillText(`COLLISION GRID 8x8`, player.x, player.y - 27);
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
          render: () => renderNpc(ctx, npc, nearbyNpc?.id === npc.id, isCity1Solved, animTimer, animFrameCounter.current),
        });
      });

      // Add Player to sorting list
      renderEntities.push({
        y: player.y,
        render: () => renderPlayer(ctx, player, animFrameCounter.current, animTimer),
      });

      // Sort by Y-coordinate so entities lower down render on top
      renderEntities.sort((a, b) => a.y - b.y);
      renderEntities.forEach((e) => e.render());

      // 10. Navigational Guidance to City 2 when all City 1 quests are completed
      if (isCity1Solved) {
        renderCity2Guidance(ctx, player, animTimer);
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(gameLoop);
    };

    animationFrameId = requestAnimationFrame(gameLoop);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [player, nearbyNpc, nearbyObject, mapImageLoaded, mapImageError, showHitboxes, cameraZoom, zoomLevel, isCity1Solved, playerSpriteLoaded]);

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

  // 2.5D Depth-Aligned NPC Renderer (Extensible Sprite & Placeholder Architecture)
  const renderNpc = (
    ctx: CanvasRenderingContext2D,
    npc: NPC,
    isNearby: boolean,
    isSolved: boolean,
    animTimer: number,
    frameIndex: number
  ) => {
    // Check if an external spritesheet is registered for this NPC
    const registeredNpc = NPC_SPRITE_REGISTRY[npc.id];
    let renderedSprite = false;

    if (registeredNpc) {
      let npcImg = npcSpriteImagesRef.current.get(npc.id);
      if (!npcImg) {
        npcImg = new Image();
        npcImg.src = `${registeredNpc.imageSrc}?v=${Date.now()}`;
        npcSpriteImagesRef.current.set(npc.id, npcImg);
      }
      if (npcImg.complete && npcImg.naturalWidth > 0) {
        // Dynamic NPC facing direction: turn to look directly at player when in vicinity (within 70px)
        let facingDir: CharacterDirection = 'down';
        const distToPlayer = Math.hypot(player.x - npc.x, player.y - npc.y);
        if (distToPlayer <= 70) {
          const dx = player.x - npc.x;
          const dy = player.y - npc.y;
          if (Math.abs(dx) > Math.abs(dy)) {
            facingDir = dx > 0 ? 'right' : 'left';
          } else {
            facingDir = dy > 0 ? 'down' : 'up';
          }
        }

        renderCharacterSprite(
          ctx,
          npcImg,
          npc.x,
          npc.y,
          facingDir,
          false,
          frameIndex,
          registeredNpc.config,
          false // Sprites already have authentic pixel art shadow at base
        );
        renderedSprite = true;
      }
    }

    // If no sprite registered yet or image still loading, render development placeholder avatar card
    if (!renderedSprite) {
      // Foot shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
      ctx.beginPath();
      ctx.ellipse(npc.x, npc.y + 4, 14, 5, 0, 0, Math.PI * 2);
      ctx.fill();

      // NPC Avatar Base & Frame
      const bob = isNearby ? Math.sin(animTimer * 6) * 2 : 0;

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
    }

    // Name Plate (positioned below baseline)
    ctx.fillStyle = '#f8fafc';
    ctx.font = 'bold 9px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(npc.name, npc.x, npc.y + (renderedSprite ? 14 : 16));

    // Role Subtitle
    ctx.fillStyle = '#94a3b8';
    ctx.font = '7.5px Inter, sans-serif';
    ctx.fillText(npc.role, npc.x, npc.y + (renderedSprite ? 23 : 25));

    // Quest Indicator Beacon for Warden Rao Sir (Primary Challenge)
    // Only display beacon '!' when unsolved; no checkmark after completion
    const isWarden = npc.id === 'npc_hostel_warden';
    if (isWarden && !isSolved) {
      const beaconBob = Math.sin(animTimer * 5) * 3;
      const beaconY = renderedSprite ? npc.y - 48 : npc.y - 36;
      ctx.fillStyle = '#ef4444';
      ctx.beginPath();
      ctx.arc(npc.x, beaconY + beaconBob, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 10px Inter, sans-serif';
      ctx.fillText('!', npc.x, beaconY + 3 + beaconBob);
    }

    // Interactive Speech Bubble / Action Prompt when player is nearby
    if (isNearby) {
      const bubbleBob = Math.sin(animTimer * 5) * 2;
      const bubbleY = renderedSprite ? npc.y - 48 + bubbleBob : npc.y - 38 + bubbleBob;

      // Speech prompt balloon
      ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.roundRect(npc.x - 26, bubbleY - 11, 52, 16, 6);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#fbbf24';
      ctx.font = 'bold 8.5px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('💬 [E] Talk', npc.x, bubbleY + 1.5);
    }
  };

  // 2.5D Depth-Aligned Player Character Renderer
  const renderPlayer = (
    ctx: CanvasRenderingContext2D,
    p: typeof player,
    frameIndex: number,
    animTimer: number
  ) => {
    // If pixel art spritesheet is loaded, render animated character sprite
    if (playerSpriteRef.current && playerSpriteLoaded) {
      renderCharacterSprite(
        ctx,
        playerSpriteRef.current,
        p.x,
        p.y,
        p.direction,
        p.isMoving,
        frameIndex,
        PLAYER_SPRITE_CONFIG,
        true
      );
      return;
    }

    // High-Fidelity Fallback Avatar Card (Zero glitch while loading)
    ctx.fillStyle = 'rgba(0, 0, 0, 0.45)';
    ctx.beginPath();
    ctx.ellipse(p.x, p.y + 2, 12, 5, 0, 0, Math.PI * 2);
    ctx.fill();

    const walkBob = p.isMoving ? Math.sin(animTimer * 12) * 2 : 0;
    ctx.fillStyle = '#1e293b';
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 1.8;
    ctx.beginPath();
    ctx.roundRect(p.x - 12, p.y - 26 + walkBob, 24, 26, 6);
    ctx.fill();
    ctx.stroke();

    ctx.font = '16px serif';
    ctx.textAlign = 'center';
    ctx.fillText('🧑‍🎓', p.x, p.y - 8 + walkBob);

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

  // Navigational Guidance to City 2 (Active once all City 1 quests are solved)
  const renderCity2Guidance = (
    ctx: CanvasRenderingContext2D,
    p: { x: number; y: number },
    animTimer: number
  ) => {
    const targetX = 685;
    const targetY = 30;
    const dx = targetX - p.x;
    const dy = targetY - p.y;
    const dist = Math.hypot(dx, dy);
    const angle = Math.atan2(dy, dx);

    // 1. Floating directional guidance arrow hovering near player
    if (dist > 45) {
      const orbitDist = 38 + Math.sin(animTimer * 5) * 3;
      const arrowX = p.x + Math.cos(angle) * orbitDist;
      const arrowY = p.y + Math.sin(angle) * orbitDist;

      ctx.save();
      ctx.translate(arrowX, arrowY);
      ctx.rotate(angle);

      // Glowing navigation arrowhead
      ctx.shadowColor = 'rgba(16, 185, 129, 0.9)';
      ctx.shadowBlur = 8;
      ctx.fillStyle = '#10b981';
      ctx.strokeStyle = '#ffffff';
      ctx.lineWidth = 1.5;

      ctx.beginPath();
      ctx.moveTo(13, 0);       // Tip
      ctx.lineTo(-7, -7);     // Left wing
      ctx.lineTo(-3, 0);      // Inner notch
      ctx.lineTo(-7, 7);      // Right wing
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      // Floating label pill next to player
      ctx.save();
      const pillDist = orbitDist + 18;
      const pillX = p.x + Math.cos(angle) * pillDist;
      const pillY = p.y + Math.sin(angle) * pillDist;
      const pillW = 48;
      const pillH = 15;

      ctx.fillStyle = 'rgba(15, 23, 42, 0.92)';
      ctx.strokeStyle = '#10b981';
      ctx.lineWidth = 1.2;
      ctx.beginPath();
      ctx.roundRect(pillX - pillW / 2, pillY - pillH / 2, pillW, pillH, 4);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#34d399';
      ctx.font = 'bold 8px Inter, sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('City 2 ➔', pillX, pillY);
      ctx.restore();
    }

    // 2. Highway Portal Destination Beacon & Directional Chevrons at (685, 30)
    ctx.save();
    const portalPulse = Math.sin(animTimer * 4) * 4;
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(targetX, targetY, 22 + portalPulse, 0, Math.PI * 2);
    ctx.stroke();

    // Animated upward chevrons pointing into North Highway
    const chevronShift = (animTimer * 28) % 16;
    ctx.fillStyle = '#34d399';
    ctx.font = 'bold 15px monospace';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('▲', targetX, targetY + 6 - chevronShift);

    // Highway Signboard
    const signW = 96;
    const signH = 16;
    ctx.fillStyle = 'rgba(6, 78, 59, 0.95)';
    ctx.strokeStyle = '#34d399';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.roundRect(targetX - signW / 2, targetY - 26, signW, signH, 4);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = '#ecfdf5';
    ctx.font = 'bold 8.5px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('★ TO CITY 2 ★', targetX, targetY - 18);
    ctx.restore();
  };

  // Direct Canvas Click Handling
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const mapW = CITY1_CONFIG.width;
    const mapH = CITY1_CONFIG.height;
    const canvasAspect = mapW / mapH;
    const rectAspect = rect.width / rect.height;

    let displayW = rect.width;
    let displayH = rect.height;
    let letterboxX = 0;
    let letterboxY = 0;

    if (rectAspect > canvasAspect) {
      displayW = rect.height * canvasAspect;
      letterboxX = (rect.width - displayW) / 2;
    } else {
      displayH = rect.width / canvasAspect;
      letterboxY = (rect.height - displayH) / 2;
    }

    const localX = e.clientX - rect.left - letterboxX;
    const localY = e.clientY - rect.top - letterboxY;

    if (localX < 0 || localX > displayW || localY < 0 || localY > displayH) {
      return; // Click outside visible map area
    }

    let clickX = (localX / displayW) * mapW;
    let clickY = (localY / displayH) * mapH;

    if (cameraZoom === 'follow') {
      const zoomFactor = zoomLevel;
      const viewW = mapW / zoomFactor;
      const viewH = mapH / zoomFactor;
      const { camX, camY } = calculateCamera(player.x, player.y, viewW, viewH, mapW, mapH);
      clickX = clickX / zoomFactor + camX;
      clickY = clickY / zoomFactor + camY;
    }

    // Set click walk destination (mouse click interaction is disabled; interactions require [E] / [Space])
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
      CITY1_CONFIG.height,
      CITY1_COLLISION_GRID
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
    <div
      ref={containerRef}
      className={`w-full flex flex-col transition-all duration-300 ${
        isFullscreen
          ? 'fixed inset-0 z-30 bg-slate-950 p-2 sm:p-3 w-screen h-screen'
          : 'w-full flex-1 flex flex-col px-2 sm:px-4 py-1.5 h-[calc(100vh-70px)] max-h-[calc(100vh-70px)]'
      }`}
    >
      {/* City 1 Navigation & Status Banner */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 backdrop-blur border border-slate-800 rounded-xl px-3 py-2 mb-2 shadow-lg shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold text-white">City 1: Hostel Commons</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                Pillar 1: Plan & Budget
              </span>
            </div>
            <div className="text-xs text-slate-400">The Scholar's District — Full City Map</div>
          </div>
        </div>

        {/* Objective & Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Quest Status Pill */}
          <div
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-2 border ${
              isCity1Solved
                ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-300'
                : 'bg-amber-500/10 border-amber-500/30 text-amber-300'
            }`}
          >
            {isCity1Solved ? (
              <>
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>City 1 Complete! Follow Arrow to City 2 ➔</span>
              </>
            ) : (
              <>
                <MapPin className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                <span>Meet Warden Rao Sir at Hostel</span>
              </>
            )}
          </div>

          {/* Full Map / Follow Player Toggle */}
          <button
            onClick={() => setCameraZoom((prev) => (prev === 'overview' ? 'follow' : 'overview'))}
            className={`px-3 py-1 rounded-lg text-xs font-semibold flex items-center gap-1.5 border transition ${
              cameraZoom === 'overview'
                ? 'bg-amber-500/25 border-amber-500/50 text-amber-300 shadow-sm'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
            title="Toggle between Full Map View and Close-Up Camera"
          >
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>{cameraZoom === 'overview' ? 'Full Map View' : 'Follow Player'}</span>
          </button>

          {/* Zoom controls only in follow mode */}
          {cameraZoom === 'follow' && (
            <>
              <button
                onClick={() => setZoomLevel((z) => Math.min(3.2, Number((z + 0.3).toFixed(1))))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                title="Zoom In"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel((z) => Math.max(1.2, Number((z - 0.3).toFixed(1))))}
                className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition"
                title="Zoom Out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
            </>
          )}

          {/* Fullscreen Toggle Button */}
          <button
            onClick={toggleFullscreen}
            className={`p-1.5 rounded-lg border transition ${
              isFullscreen
                ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                : 'bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700'
            }`}
            title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen (Edge-to-Edge)'}
          >
            {isFullscreen ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
          </button>

          {/* Hitbox Debug Toggle */}
          <button
            onClick={() => setShowHitboxes((h) => !h)}
            className={`p-1.5 rounded-lg border transition ${
              showHitboxes
                ? 'bg-red-500/20 border-red-500/40 text-red-300'
                : 'bg-slate-800 border-slate-700 text-slate-400 hover:text-white'
            }`}
            title="Toggle Collision Geometry (Debug)"
          >
            {showHitboxes ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
          </button>

          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            className={`p-1.5 rounded-lg border transition ${
              soundEnabled
                ? 'bg-slate-800 border-slate-700 text-amber-400 hover:text-amber-300'
                : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-slate-400'
            }`}
            title={soundEnabled ? 'Mute Audio' : 'Unmute Audio'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* Main Exploration Canvas Viewport (Fills Full Available Screen) */}
      <div
        className="relative overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-950 flex justify-center items-center w-full flex-1 rounded-2xl min-h-0"
      >
        <canvas
          ref={canvasRef}
          width={1024}
          height={572}
          onClick={handleCanvasClick}
          className="w-full h-full object-contain cursor-pointer block select-none bg-slate-950"
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
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/95 border-2 border-amber-400 text-slate-100 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce z-20 pointer-events-none">
            <span className="text-2xl">{nearbyNpc.avatar}</span>
            <div className="text-xs">
              <div>
                <span className="font-bold text-amber-300">{nearbyNpc.name}</span>{' '}
                <span className="text-slate-400">({nearbyNpc.role})</span>
              </div>
              <div className="text-slate-400 text-[11px]">Press [E] or [Space] to Converse</div>
            </div>
            <div className="px-3 py-1.5 bg-amber-500/20 border border-amber-500/50 text-amber-300 text-xs font-bold rounded-xl ml-2 shadow-md flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-amber-500 text-slate-950 rounded text-[10px] font-black">E</kbd>
              <span>Talk</span>
            </div>
          </div>
        )}

        {nearbyObject && !nearbyNpc && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-950/95 border-2 border-sky-400 text-slate-100 px-5 py-2.5 rounded-2xl shadow-2xl flex items-center gap-3 animate-bounce z-20 pointer-events-none">
            <span className="text-xl">📍</span>
            <div className="text-xs">
              <div className="font-bold text-sky-300">{nearbyObject.name}</div>
              <div className="text-slate-400 text-[11px]">Press [E] or [Space] to Inspect</div>
            </div>
            <div className="px-3 py-1.5 bg-sky-500/20 border border-sky-500/50 text-sky-300 text-xs font-bold rounded-xl ml-2 shadow-md flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 bg-sky-400 text-slate-950 rounded text-[10px] font-black">E</kbd>
              <span>Inspect</span>
            </div>
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
