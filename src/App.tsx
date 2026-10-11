import React, { useState, useEffect } from 'react';
import {
  StudentProfile,
  GameLanguage,
  GameScreen,
  NPC,
  PuzzleScenario,
} from './types';
import { GameStorage } from './engine/storage';
import { GameEngine } from './engine/gameEngine';
import { PUZZLES } from './data/puzzles';
import { Navbar } from './components/ui/Navbar';
import { TitleScreen } from './components/landing/TitleScreen';
import { TitleSettingsModal } from './components/landing/TitleSettingsModal';
import { LandingPage } from './components/landing/LandingPage';
import { PrologueModal } from './components/landing/PrologueModal';
import { WorldMapCanvas } from './components/world/WorldMapCanvas';
import { NpcDialogueModal } from './components/world/NpcDialogueModal';
import { PuzzleModal } from './components/gameplay/PuzzleModal';
import { BankruptcyModal } from './components/gameplay/BankruptcyModal';
import { NgoDashboardModal } from './components/analytics/NgoDashboardModal';

export const App: React.FC = () => {
  const [profile, setProfile] = useState<StudentProfile>(() => GameStorage.getOrCreateProfile());
  const [language, setLanguage] = useState<GameLanguage>('en');
  // Screen state initialized from persistent storage so reload continues directly in-game
  const [screen, setScreen] = useState<GameScreen>(() => {
    const saved = GameStorage.getSavedScreen();
    if (saved === 'world' || saved === 'prologue') {
      return saved;
    }
    return saved || 'landing';
  });

  // Automatically persist screen changes across page reloads
  useEffect(() => {
    GameStorage.saveScreen(screen);
  }, [screen]);

  // Modal states
  const [activeNpc, setActiveNpc] = useState<NPC | null>(null);
  const [activeScenario, setActiveScenario] = useState<PuzzleScenario | null>(null);
  const [isNgoDashboardOpen, setIsNgoDashboardOpen] = useState<boolean>(false);
  const [isTitleSettingsOpen, setIsTitleSettingsOpen] = useState<boolean>(false);

  // Sync profile changes to local storage
  const handleUpdateProfile = (updated: StudentProfile) => {
    setProfile(updated);
    GameStorage.saveProfile(updated);
  };

  const handleLanguageChange = (newLang: GameLanguage) => {
    setLanguage(newLang);
    handleUpdateProfile({ ...profile, preferredLanguage: newLang });
  };

  const handleResetProgress = () => {
    if (window.confirm('Reset all progress and start fresh with a new student ID?')) {
      const resetProf = GameStorage.resetProgress();
      setProfile(resetProf);
      setScreen('landing');
      setActiveNpc(null);
      setActiveScenario(null);
    }
  };

  const [isProgressSaved, setIsProgressSaved] = useState<boolean>(() => GameStorage.isProgressSaved());

  const [isBankruptcyModalDismissed, setIsBankruptcyModalDismissed] = useState<boolean>(false);

  // Automatically allow bankruptcy modal when wallet reaches 0 again
  useEffect(() => {
    if (profile.walletBalance > 0) {
      setIsBankruptcyModalDismissed(false);
    }
  }, [profile.walletBalance]);

  const handleToggleSaveProgress = () => {
    const next = !isProgressSaved;
    setIsProgressSaved(next);
    GameStorage.setProgressSaved(next);
    if (next) {
      GameStorage.saveProfile(profile);
    }
  };

  const handleResetWallet = () => {
    const fresh = GameStorage.resetBankruptcy(profile);
    setProfile(fresh);
    setIsBankruptcyModalDismissed(false);
  };

  const handleStartAdventure = () => {
    if (!GameStorage.isProgressSaved()) {
      const fresh = GameStorage.resetWallet(profile);
      setProfile(fresh);
    }
    setScreen('prologue');
  };

  const handleContinueJourney = () => {
    const savedScreen = GameStorage.getSavedScreen();
    if (savedScreen === 'world') {
      setScreen('world');
    } else if ((profile.completedScenarioIds && profile.completedScenarioIds.length > 0) || isProgressSaved) {
      setScreen('world');
    } else {
      handleStartAdventure();
    }
  };

  const handleEnterWorld = () => {
    if (!GameStorage.isProgressSaved()) {
      const fresh = GameStorage.resetWallet(profile);
      setProfile(fresh);
    }
    setScreen('world');
  };

  const handleInteractWithNpc = (npc: NPC) => {
    setActiveNpc(npc);
  };

  const handleStartChallenge = (scenarioId: string) => {
    const scenario = PUZZLES[scenarioId];
    if (scenario) {
      setActiveScenario(scenario);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-amber-500 selection:text-slate-950">
      {/* Global Navigation Bar (shown in world & gameplay, hidden on start title screen for immersion) */}
      {screen !== 'landing' && (
        <Navbar
          profile={profile}
          language={language}
          onLanguageChange={handleLanguageChange}
          onOpenDashboard={() => setIsNgoDashboardOpen(true)}
          onResetProgress={handleResetProgress}
          onReturnToHome={() => setScreen('landing')}
          onSaveProgress={handleToggleSaveProgress}
          onResetWallet={handleResetWallet}
          isProgressSaved={isProgressSaved}
        />
      )}

      {/* Main View Port */}
      <main className="flex-1 flex flex-col">
        {screen === 'landing' && (
          <TitleScreen
            language={language}
            hasSavedGame={isProgressSaved || Boolean(profile.completedScenarioIds && profile.completedScenarioIds.length > 0)}
            onStartAdventure={handleStartAdventure}
            onContinueJourney={handleContinueJourney}
            onOpenDashboard={() => setIsNgoDashboardOpen(true)}
            onOpenSettings={() => setIsTitleSettingsOpen(true)}
          />
        )}

        {screen === 'world' && (
          <WorldMapCanvas
            profile={profile}
            language={language}
            onInteractWithNpc={handleInteractWithNpc}
            onEnterCity={(cityId) => {
              console.log('Entered city:', cityId);
            }}
            onResetWallet={handleResetWallet}
          />
        )}
      </main>

      {/* Narrative Prologue Modal */}
      {screen === 'prologue' && (
        <PrologueModal language={language} onProceed={handleEnterWorld} />
      )}

      {/* Student Bankruptcy Rescue Modal */}
      {profile.walletBalance <= 0 && !activeScenario && !isBankruptcyModalDismissed && (
        <BankruptcyModal
          profile={profile}
          language={language}
          onResetBankruptcy={handleResetWallet}
          onFullReset={handleResetProgress}
          onClose={() => setIsBankruptcyModalDismissed(true)}
        />
      )}

      {/* NPC Dialogue Modal */}
      {activeNpc && (
        <NpcDialogueModal
          npc={activeNpc}
          language={language}
          isSolved={
            activeNpc.scenarioId
              ? GameEngine.isScenarioSolved(activeNpc.scenarioId, profile)
              : false
          }
          onClose={() => setActiveNpc(null)}
          onStartChallenge={handleStartChallenge}
        />
      )}

      {/* Financial Puzzle & Decision Modal */}
      {activeScenario && (
        <PuzzleModal
          scenario={activeScenario}
          profile={profile}
          language={language}
          onClose={() => setActiveScenario(null)}
          onUpdateProfile={handleUpdateProfile}
        />
      )}

      {/* Authorized NGO Reporting Dashboard */}
      {isNgoDashboardOpen && (
        <NgoDashboardModal profile={profile} onClose={() => setIsNgoDashboardOpen(false)} />
      )}

      {/* Title Screen Settings Modal */}
      {isTitleSettingsOpen && (
        <TitleSettingsModal
          language={language}
          profile={profile}
          isProgressSaved={isProgressSaved}
          onClose={() => setIsTitleSettingsOpen(false)}
          onLanguageChange={handleLanguageChange}
          onToggleSaveProgress={handleToggleSaveProgress}
          onResetProgress={handleResetProgress}
          onResetWallet={handleResetWallet}
        />
      )}
    </div>
  );
};

export default App;
