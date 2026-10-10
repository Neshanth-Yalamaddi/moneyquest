import React, { useState } from 'react';
import { GameLanguage, StudentProfile } from '../../types';
import { GameStorage } from '../../engine/storage';
import { TRANSLATIONS } from '../../translations';
import { IslandCanvas } from './IslandCanvas';
import { AuthModal } from './AuthModal';
import { RegionQuestPanel } from '../ui/RegionQuestPanel';
import { AchievementsModal } from '../ui/AchievementsModal';
import { audioManager } from '../ui/audioManager';
import {
  Play,
  Sparkles,
  Shield,
  Compass,
  BookOpen,
  TrendingUp,
  Users,
  Award,
  Wallet,
  ArrowRight,
  Volume2,
  VolumeX,
  MapPin,
  CheckCircle2,
  HelpCircle,
  Sliders,
} from 'lucide-react';

interface LandingPageProps {
  language: GameLanguage;
  onStartAdventure: () => void;
  onOpenDashboard: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({
  language,
  onStartAdventure,
  onOpenDashboard,
}) => {
  const t = TRANSLATIONS[language].landing;
  const [profile, setProfile] = useState<StudentProfile>(() => GameStorage.getOrCreateProfile());

  // Modal triggers from landing page
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isRegionsOpen, setIsRegionsOpen] = useState(false);
  const [isAchievementsOpen, setIsAchievementsOpen] = useState(false);

  // Sound toggle on landing page
  const [isMuted, setIsMuted] = useState(() => audioManager.getSettings().isMuted);

  // Interactive Mini-Demo: Stipend Allocator
  const [demoNeeds, setDemoNeeds] = useState(2500); // 50%
  const [demoWants, setDemoWants] = useState(1500); // 30%
  const [demoReserve, setDemoReserve] = useState(1000); // 20%
  const [demoFeedback, setDemoFeedback] = useState<string | null>(null);

  const pillars = [
    {
      id: 'budget',
      title: 'Plan & Budget',
      desc: 'Needs vs. Wants, 50-30-20 rules, hostel mess dues, and avoiding cash leakages.',
      icon: BookOpen,
      color: 'from-amber-500 to-amber-700',
      dilemma: 'Mess bill is due tomorrow, but friends are inviting you for a ₹400 cafe treat. What do you do?',
    },
    {
      id: 'save',
      title: 'Save & Manage',
      desc: 'Building emergency cushions, unexpected repair reserves, and avoiding predatory loans.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-700',
      dilemma: 'Your phone display shatters right before online exam registration. Can your emergency reserve cover it?',
    },
    {
      id: 'invest',
      title: 'Understand Investing',
      desc: 'The geometric power of compounding, time horizons, and beating inflation safely.',
      icon: TrendingUp,
      color: 'from-sky-500 to-blue-700',
      dilemma: 'Save ₹500/month under a mattress vs in an interest-bearing RD. Discover how time builds wealth.',
    },
    {
      id: 'safety',
      title: 'Stay Financially Safe',
      desc: 'Spotting UPI QR code traps, fake scholarship SMS, OTP fraud, and cyber helpline 1930.',
      icon: Compass,
      color: 'from-violet-500 to-purple-700',
      dilemma: 'SMS received: "Scholarship suspended! Click bit.ly/kyc-fix to update bank KYC." Is it real or fake?',
    },
  ];

  const regionsPreview = [
    {
      id: 'region_scholars_district',
      number: '01',
      name: "The Scholar's District",
      cities: '5 Locations',
      desc: 'Hostel Commons, Koti Book Bazaar, Irani Chai Canteen & Digital Banking Hub.',
      accent: 'border-amber-500/40 bg-amber-950/20 hover:border-amber-500',
      badgeColor: 'text-amber-400 bg-amber-500/10',
    },
    {
      id: 'region_prosperity_outskirts',
      number: '02',
      name: 'The Prosperity Outskirts',
      cities: '5 Locations',
      desc: 'Compounding Grove, Diversified Markets, Inflation Alley & Skill Forge.',
      accent: 'border-emerald-500/40 bg-emerald-950/20 hover:border-emerald-500',
      badgeColor: 'text-emerald-400 bg-emerald-500/10',
    },
    {
      id: 'region_guardian_citadel',
      number: '03',
      name: 'The Guardian Citadel',
      cities: '5 Locations',
      desc: "Phishers' Cove, The UPI Maze, Pyramid Peak & Grand Conclave.",
      accent: 'border-sky-500/40 bg-sky-950/20 hover:border-sky-500',
      badgeColor: 'text-sky-400 bg-sky-500/10',
    },
  ];

  const handleToggleSound = () => {
    const muted = audioManager.toggleMute();
    setIsMuted(muted);
  };

  const handleValidateDemo = () => {
    audioManager.playCoin();
    const total = demoNeeds + demoWants + demoReserve;
    if (total !== 5000) {
      setDemoFeedback(`Total allocated is ₹${total}. Must balance exactly ₹5,000!`);
    } else if (demoReserve < 1000) {
      setDemoFeedback('Warning: Your emergency reserve is under 20% (₹1,000). A surprise medical bill could cause debt!');
    } else {
      setDemoFeedback('Excellent! Perfect 50-30-20 balance. ₹2,500 Needs, ₹1,500 Wants, ₹1,000 Reserve.');
    }
  };

  return (
    <div className="relative overflow-hidden pb-20 select-none">
      {/* Background Gradients & Ambient Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 -z-10" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-3/4 left-1/3 -translate-x-1/2 w-[600px] h-[400px] bg-sky-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 pt-10 sm:pt-16 pb-12 text-center">
        {/* Badge & Sound Pill */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.badge}</span>
          </div>

          <button
            onClick={handleToggleSound}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-300 text-xs transition"
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5 text-rose-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
            <span>{isMuted ? t.soundToggleOff : t.soundToggleOn}</span>
          </button>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.1]">
          {t.heroTitle}{' '}
          <span className="bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
            {t.heroTitleHighlight}
          </span>
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-3xl mx-auto text-base sm:text-lg text-slate-300 mb-10 leading-relaxed font-normal">
          {t.heroSubtitle}
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-14">
          {/* Start Adventure Button */}
          <button
            onClick={() => {
              audioManager.playFanfare();
              onStartAdventure();
            }}
            className="px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-black rounded-2xl text-base shadow-xl shadow-amber-500/30 flex items-center justify-center gap-2.5 transform transition hover:-translate-y-1 active:translate-y-0"
          >
            <Play className="w-5 h-5 fill-slate-950" />
            <span>{t.startAdventure}</span>
          </button>

          {/* Resume Journey / Login Button */}
          <button
            onClick={() => {
              audioManager.playClick();
              setIsAuthOpen(true);
            }}
            className="px-6 py-4 bg-slate-800/90 hover:bg-slate-800 text-slate-100 font-bold rounded-2xl text-base border border-slate-700 flex items-center justify-center gap-2 transition hover:-translate-y-0.5"
          >
            <Wallet className="w-5 h-5 text-amber-400" />
            <span>{t.resumeJourney}</span>
          </button>

          {/* Explore Regions Map */}
          <button
            onClick={() => {
              audioManager.playClick();
              setIsRegionsOpen(true);
            }}
            className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-bold rounded-2xl text-base border border-slate-800 flex items-center justify-center gap-2 transition"
          >
            <Compass className="w-5 h-5 text-sky-400" />
            <span>{t.exploreMap}</span>
          </button>

          {/* Achievements Button */}
          <button
            onClick={() => {
              audioManager.playFanfare();
              setIsAchievementsOpen(true);
            }}
            className="px-6 py-4 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white font-bold rounded-2xl text-base border border-slate-800 flex items-center justify-center gap-2 transition"
          >
            <Award className="w-5 h-5 text-emerald-400" />
            <span>{t.viewAchievements}</span>
          </button>

          {/* NGO Reports Button */}
          <button
            onClick={() => {
              audioManager.playClick();
              onOpenDashboard();
            }}
            className="px-6 py-4 bg-indigo-950/60 hover:bg-indigo-900/80 text-indigo-200 font-bold rounded-2xl text-base border border-indigo-500/40 flex items-center justify-center gap-2 transition"
          >
            <Users className="w-5 h-5 text-indigo-400" />
            <span>{t.ngoReports}</span>
          </button>
        </div>

        {/* 2D Interactive Island Showcase */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="flex items-center justify-between px-2 mb-3">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
              <MapPin className="w-4 h-4 text-amber-400" />
              <span>Interactive World Preview • 3 Thematic Regions</span>
            </div>
            <div className="text-xs text-amber-400/90 font-medium hidden sm:block">
              Click pins to inspect cities
            </div>
          </div>

          <IslandCanvas
            language={language}
            onSelectCity={() => {
              setIsRegionsOpen(true);
            }}
          />
        </div>

        {/* Active Stipend Banner */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-slate-950/70 p-5 shadow-2xl backdrop-blur-sm mb-16">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800/80 pb-4 mb-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🎓</span>
              <div className="text-left">
                <div className="text-sm font-bold text-slate-100">{t.stipendBannerTitle}</div>
                <div className="text-xs text-slate-400">{t.stipendBannerSub}</div>
              </div>
            </div>

            <div className="flex items-center gap-2 bg-emerald-950/60 border border-emerald-500/30 px-3.5 py-1.5 rounded-full text-xs text-emerald-400 font-extrabold shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.stipendAmount}</span>
            </div>
          </div>

          {/* 3 Region Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 text-left">
            {regionsPreview.map((reg) => (
              <div
                key={reg.id}
                onClick={() => {
                  audioManager.playClick();
                  setIsRegionsOpen(true);
                }}
                className={`p-4 rounded-xl border ${reg.accent} transition-all cursor-pointer group`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Region {reg.number}
                  </span>
                  <span className={`text-[10px] font-extrabold px-2 py-0.5 rounded ${reg.badgeColor}`}>
                    {reg.cities}
                  </span>
                </div>
                <div className="font-extrabold text-slate-100 mb-1 group-hover:text-amber-300 transition">
                  {reg.name}
                </div>
                <p className="text-xs text-slate-300 leading-normal">{reg.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Stipend Allocation Mini-Tool */}
      <section className="max-w-4xl mx-auto px-4 py-8 mb-16">
        <div className="bg-slate-900/90 border-2 border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-extrabold text-white">{t.interactiveDemoTitle}</h3>
              <p className="text-xs text-slate-400">{t.interactiveDemoSub}</p>
            </div>
          </div>

          {/* Allocation Sliders */}
          <div className="space-y-4 my-6 bg-slate-950/80 p-5 rounded-2xl border border-slate-800 text-xs">
            {/* Needs */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span className="text-amber-400">Needs (Mess, Rent, Books): ₹{demoNeeds}</span>
                <span className="text-slate-400">{Math.round((demoNeeds / 5000) * 100)}%</span>
              </div>
              <input
                type="range"
                min="1000"
                max="4000"
                step="100"
                value={demoNeeds}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDemoNeeds(val);
                  setDemoFeedback(null);
                }}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Wants */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span className="text-sky-400">Wants (Cafe Chai, Outings): ₹{demoWants}</span>
                <span className="text-slate-400">{Math.round((demoWants / 5000) * 100)}%</span>
              </div>
              <input
                type="range"
                min="500"
                max="3000"
                step="100"
                value={demoWants}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDemoWants(val);
                  setDemoFeedback(null);
                }}
                className="w-full accent-sky-500 cursor-pointer"
              />
            </div>

            {/* Emergency Reserve */}
            <div>
              <div className="flex justify-between font-bold mb-1">
                <span className="text-emerald-400">Emergency Reserve Fund: ₹{demoReserve}</span>
                <span className="text-slate-400">{Math.round((demoReserve / 5000) * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="2500"
                step="100"
                value={demoReserve}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setDemoReserve(val);
                  setDemoFeedback(null);
                }}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            <div className="pt-2 border-t border-slate-800 flex flex-wrap items-center justify-between gap-2">
              <span className="text-slate-300 font-semibold">
                Total: ₹{demoNeeds + demoWants + demoReserve} / ₹5,000
              </span>
              <button
                onClick={handleValidateDemo}
                className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold rounded-lg text-xs transition"
              >
                Validate Strategy
              </button>
            </div>

            {demoFeedback && (
              <div className="p-3 bg-slate-900 border border-amber-500/40 rounded-xl text-amber-300 text-xs flex items-center gap-2">
                <Sparkles className="w-4 h-4 flex-shrink-0" />
                <span>{demoFeedback}</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Four Educational Pillars Section */}
      <section className="max-w-6xl mx-auto px-4 py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            {t.pillarSectionTitle}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            {t.pillarSectionSub}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition relative overflow-hidden group flex flex-col justify-between"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${pillar.color} flex items-center justify-center text-white mb-5 shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-extrabold text-lg text-slate-100 mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{pillar.desc}</p>
                </div>

                <div className="pt-3 border-t border-slate-800/80 bg-slate-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                  <div className="text-[10px] text-amber-400 font-bold uppercase tracking-wider mb-1">
                    Sample Dilemma
                  </div>
                  <p className="text-[11px] text-slate-300 italic leading-snug">{pillar.dilemma}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Community & NGO Collaboration Footnote */}
      <section className="max-w-4xl mx-auto px-4 text-center mt-12">
        <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 text-xs text-slate-400 flex items-center justify-center gap-2">
          <Shield className="w-4 h-4 text-emerald-400" />
          <span>{t.vanguardMission}</span>
        </div>
      </section>

      {/* Landing Modals */}
      <AuthModal
        isOpen={isAuthOpen}
        currentProfile={profile}
        language={language}
        onClose={() => setIsAuthOpen(false)}
        onProfileUpdated={(updated) => setProfile(updated)}
      />

      <RegionQuestPanel
        isOpen={isRegionsOpen}
        profile={profile}
        language={language}
        onClose={() => setIsRegionsOpen(false)}
      />

      <AchievementsModal
        isOpen={isAchievementsOpen}
        profile={profile}
        language={language}
        onClose={() => setIsAchievementsOpen(false)}
      />
    </div>
  );
};
