/**
 * Web Audio API procedural sound synthesizer for MoneyQuest.
 * Zero external asset dependencies: generates clean 16-bit retro audio blips,
 * coin pickup chimes, fanfare chords, and gentle ambient chiptune background arpeggios.
 */

class AudioManager {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private isBgmActive: boolean = false;
  private isSfxActive: boolean = true;
  private volume: number = 0.5;
  private bgmIntervalId: any = null;

  constructor() {
    if (typeof window !== 'undefined') {
      try {
        const savedMute = localStorage.getItem('moneyquest_audio_mute');
        if (savedMute !== null) this.isMuted = savedMute === 'true';

        const savedBgm = localStorage.getItem('moneyquest_audio_bgm');
        if (savedBgm !== null) this.isBgmActive = savedBgm === 'true';

        const savedSfx = localStorage.getItem('moneyquest_audio_sfx');
        if (savedSfx !== null) this.isSfxActive = savedSfx === 'true';

        const savedVol = localStorage.getItem('moneyquest_audio_vol');
        if (savedVol !== null) this.volume = parseFloat(savedVol);
      } catch (e) {
        console.warn('Audio storage read skipped');
      }
    }
  }

  private initContext() {
    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public getSettings() {
    return {
      isMuted: this.isMuted,
      isBgmActive: this.isBgmActive,
      isSfxActive: this.isSfxActive,
      volume: this.volume,
    };
  }

  public setVolume(vol: number) {
    this.volume = Math.max(0, Math.min(1, vol));
    try {
      localStorage.setItem('moneyquest_audio_vol', this.volume.toString());
    } catch {}
  }

  public toggleMute(): boolean {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('moneyquest_audio_mute', this.isMuted.toString());
    } catch {}
    if (this.isMuted) {
      this.stopBgm();
    } else if (this.isBgmActive) {
      this.startBgm();
    }
    return this.isMuted;
  }

  public toggleBgm(): boolean {
    this.isBgmActive = !this.isBgmActive;
    try {
      localStorage.setItem('moneyquest_audio_bgm', this.isBgmActive.toString());
    } catch {}
    if (this.isBgmActive && !this.isMuted) {
      this.startBgm();
    } else {
      this.stopBgm();
    }
    return this.isBgmActive;
  }

  public toggleSfx(): boolean {
    this.isSfxActive = !this.isSfxActive;
    try {
      localStorage.setItem('moneyquest_audio_sfx', this.isSfxActive.toString());
    } catch {}
    return this.isSfxActive;
  }

  /**
   * Quick crisp UI click blip
   */
  public playClick() {
    if (this.isMuted || !this.isSfxActive) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'square';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.15 * this.volume, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + 0.05);
    } catch (e) {}
  }

  /**
   * Retro 2-tone coin chime (₹ stipend collected or savings deposited)
   */
  public playCoin() {
    if (this.isMuted || !this.isSfxActive) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(987.77, now); // B5
      osc.frequency.setValueAtTime(1318.51, now + 0.08); // E6

      gain.gain.setValueAtTime(0.25 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {}
  }

  /**
   * Triumphant fanfare arpeggio (Milestone unlocked / best choice)
   */
  public playFanfare() {
    if (this.isMuted || !this.isSfxActive) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.5]; // C5, E5, G5, C6
      notes.forEach((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        const gain = this.ctx!.createGain();
        const start = this.ctx!.currentTime + idx * 0.1;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.2 * this.volume, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.3);

        osc.connect(gain);
        gain.connect(this.ctx!.destination);

        osc.start(start);
        osc.stop(start + 0.3);
      });
    } catch (e) {}
  }

  /**
   * Soft error buzzer (for invalid input)
   */
  public playError() {
    if (this.isMuted || !this.isSfxActive) return;
    this.initContext();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(180, now + 0.1);

      gain.gain.setValueAtTime(0.18 * this.volume, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.25);
    } catch (e) {}
  }

  /**
   * Procedural ambient adventure chiptune loop
   */
  public startBgm() {
    if (this.bgmIntervalId || this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const chords = [
      [261.63, 329.63, 392.0], // C major
      [220.0, 261.63, 329.63], // A minor
      [174.61, 220.0, 261.63], // F major
      [196.0, 246.94, 293.66], // G major
    ];
    let chordIdx = 0;

    const playChordStep = () => {
      if (this.isMuted || !this.isBgmActive || !this.ctx) return;
      const currentChord = chords[chordIdx % chords.length];
      chordIdx++;

      currentChord.forEach((freq, noteIdx) => {
        try {
          const osc = this.ctx!.createOscillator();
          const gain = this.ctx!.createGain();
          const start = this.ctx!.currentTime + noteIdx * 0.15;

          osc.type = 'sine';
          osc.frequency.setValueAtTime(freq, start);

          gain.gain.setValueAtTime(0.04 * this.volume, start);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.9);

          osc.connect(gain);
          gain.connect(this.ctx!.destination);

          osc.start(start);
          osc.stop(start + 0.9);
        } catch (e) {}
      });
    };

    playChordStep();
    this.bgmIntervalId = setInterval(playChordStep, 1400);
  }

  public stopBgm() {
    if (this.bgmIntervalId) {
      clearInterval(this.bgmIntervalId);
      this.bgmIntervalId = null;
    }
  }
}

export const audioManager = new AudioManager();
