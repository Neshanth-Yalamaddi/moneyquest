import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NPC, GameLanguage } from '../../types';
import { MessageSquare, ArrowRight, X } from 'lucide-react';
import { audioManager } from '../ui/audioManager';

interface NpcDialogueModalProps {
  npc: NPC;
  language: GameLanguage;
  isSolved: boolean;
  activeScenarioId?: string;
  onClose: () => void;
  onStartChallenge: (scenarioId: string) => void;
}

export const NpcDialogueModal: React.FC<NpcDialogueModalProps> = ({
  npc,
  language,
  isSolved,
  activeScenarioId,
  onClose,
  onStartChallenge,
}) => {
  const challengeId = activeScenarioId || npc.scenarioId;
  const fullDialogue = isSolved && npc.dialogueSolved
    ? npc.dialogueSolved[language] || npc.dialogueSolved.en
    : npc.dialogueIntro[language] || npc.dialogueIntro.en;

  // Typewriter text streaming state
  const [displayedChars, setDisplayedChars] = useState<number>(0);
  const isTyping = displayedChars < fullDialogue.length;
  const intervalRef = useRef<any>(null);

  // Derive character pitch from role/name for personality
  const pitchMultiplier = React.useMemo(() => {
    const text = (npc.role + npc.name).toLowerCase();
    if (text.includes('student') || text.includes('friend') || text.includes('tech')) return 1.25;
    if (text.includes('warden') || text.includes('guard') || text.includes('officer')) return 0.8;
    if (text.includes('curator') || text.includes('professor')) return 0.95;
    return 1.05;
  }, [npc.role, npc.name]);

  useEffect(() => {
    setDisplayedChars(0);
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayedChars((prev) => {
        const next = prev + 1;
        // Play blip every 2 characters for rhythmic retro voice synthesis
        if (next % 2 === 0 && next <= fullDialogue.length) {
          audioManager.playNpcBlip(pitchMultiplier);
        }
        if (next >= fullDialogue.length) {
          clearInterval(intervalRef.current);
        }
        return next;
      });
    }, 24);

    return () => clearInterval(intervalRef.current);
  }, [fullDialogue, pitchMultiplier]);

  const handleSkipOrComplete = () => {
    if (isTyping) {
      clearInterval(intervalRef.current);
      setDisplayedChars(fullDialogue.length);
      audioManager.playClick();
    }
  };

  const handleClose = () => {
    audioManager.playClick();
    onClose();
  };

  const content = (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fadeIn">
      <div className="max-w-lg w-full bg-slate-900 border border-slate-700 rounded-2xl p-6 shadow-2xl relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-lg transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* NPC Profile Header */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-slate-800">
          <div className="w-14 h-14 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-3xl shadow-inner">
            {npc.avatar}
          </div>
          <div>
            <h3 className="font-bold text-lg text-white">{npc.name}</h3>
            <div className="text-xs text-amber-400 font-semibold">{npc.role}</div>
          </div>
        </div>

        {/* Dialogue Balloon (Click to skip typewriter) */}
        <div
          onClick={handleSkipOrComplete}
          className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 text-slate-200 text-sm leading-relaxed mb-6 cursor-pointer select-none transition hover:border-slate-700"
          title={isTyping ? 'Click to show all text' : undefined}
        >
          <div className="flex items-start gap-2">
            <MessageSquare className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <p className="italic">
              "{fullDialogue.slice(0, displayedChars)}"
              {isTyping && <span className="inline-block w-1.5 h-3.5 bg-amber-400 ml-1 animate-pulse align-middle" />}
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-end gap-3">
          <button
            onClick={handleClose}
            className="px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl transition"
          >
            Close
          </button>

          {challengeId && (
            <button
              onClick={() => {
                audioManager.playClick();
                onClose();
                onStartChallenge(challengeId);
              }}
              className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 text-xs font-bold rounded-xl flex items-center gap-1.5 shadow-md shadow-amber-500/20 transition transform active:scale-95"
            >
              <span>{isSolved ? 'Replay Challenge' : 'Accept Challenge'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const mountNode = document.fullscreenElement || document.body;
  return createPortal(content, mountNode);
};
