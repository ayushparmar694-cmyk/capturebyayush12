/**
 * Lightweight Web Audio API generator for luxury cinematic ambience
 * Safe, zero external network assets required, zero CORS errors.
 */
class CinematicSoundEngine {
  private ctx: AudioContext | null = null;
  private oscillators: OscillatorNode[] = [];
  private gainNode: GainNode | null = null;
  private isPlaying = false;

  private init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public playAmbience() {
    this.init();
    if (!this.ctx || this.isPlaying) return;

    try {
      this.gainNode = this.ctx.createGain();
      // Gentle cinematic low pass filter for warm soft pad
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 440;

      // Soft champagne ambient chord (C - G - D - E warm fifths)
      const freqs = [130.81, 196.0, 293.66, 329.63];

      this.oscillators = freqs.map((freq, idx) => {
        const osc = this.ctx!.createOscillator();
        osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
        osc.frequency.setValueAtTime(freq, this.ctx!.currentTime);
        
        // Very subtle detune for analog cinematic feel
        osc.detune.setValueAtTime(idx * 2 - 3, this.ctx!.currentTime);

        const subGain = this.ctx!.createGain();
        subGain.gain.setValueAtTime(0.02, this.ctx!.currentTime);

        osc.connect(subGain);
        subGain.connect(filter);
        osc.start();
        return osc;
      });

      filter.connect(this.gainNode);
      this.gainNode.connect(this.ctx.destination);

      // Smooth fade-in
      this.gainNode.gain.setValueAtTime(0.001, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.08, this.ctx.currentTime + 3);

      this.isPlaying = true;
    } catch {
      // Audio autoplay policy fallback
    }
  }

  public stopAmbience() {
    if (!this.gainNode || !this.ctx || !this.isPlaying) return;

    try {
      // Smooth fade-out
      this.gainNode.gain.setValueAtTime(this.gainNode.gain.value, this.ctx.currentTime);
      this.gainNode.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 1.2);

      setTimeout(() => {
        this.oscillators.forEach((osc) => {
          try {
            osc.stop();
            osc.disconnect();
          } catch {}
        });
        this.oscillators = [];
        this.isPlaying = false;
      }, 1300);
    } catch {
      this.isPlaying = false;
    }
  }
}

export const soundEngine = new CinematicSoundEngine();
