import React, { useEffect, useState } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [step, setStep] = useState(0); // 0: Start, 1: CAPTURE, 2: VIDEOGRAPHY, 3: BY AYUSH, 4: Tagline, 5: FadeOut
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Step 1: Reveal "CAPTURE"
    timers.push(setTimeout(() => setStep(1), 300));
    // Step 2: Animate "VIDEOGRAPHY"
    timers.push(setTimeout(() => setStep(2), 1100));
    // Step 3: Reveal "BY AYUSH"
    timers.push(setTimeout(() => setStep(3), 1900));
    // Step 4: Reveal Tagline
    timers.push(setTimeout(() => setStep(4), 2600));
    // Step 5: Smooth exit fadeout
    timers.push(setTimeout(() => setStep(5), 3800));
    // Final callback to remove intro
    timers.push(
      setTimeout(() => {
        onComplete();
      }, 4400)
    );

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const handleSkip = () => {
    setIsSkipped(true);
    setStep(5);
    setTimeout(() => {
      onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-[99999] bg-[#080808] flex flex-col items-center justify-center transition-all duration-700 ease-in-out select-none ${
        step === 5 || isSkipped ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
    >
      {/* Cinematic Anamorphic Light Sweep Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute -inset-full opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#D6B574]/30 via-transparent to-transparent animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        {/* Subtle camera lens HUD line */}
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574]/20 to-transparent transform -translate-y-1/2" />
      </div>

      {/* Camera REC Overlay for Studio Vibe */}
      <div className="absolute top-8 left-8 flex items-center space-x-2 text-[10px] tracking-[0.25em] text-[#D6B574]/60 uppercase font-mono">
        <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
        <span className="font-semibold text-white/70">REC ● 4K 24FPS PRORES</span>
      </div>

      {/* Skip Button */}
      <button
        onClick={handleSkip}
        className="absolute top-8 right-8 z-10 px-4 py-2 border border-white/10 hover:border-[#D6B574]/60 rounded-full text-[11px] tracking-[0.2em] uppercase text-white/60 hover:text-[#D6B574] transition-all duration-300 backdrop-blur-sm bg-black/30 group"
      >
        <span className="group-hover:translate-x-0.5 inline-block transition-transform">
          Skip Intro →
        </span>
      </button>

      {/* Main Studio Reveal Container */}
      <div className="relative text-center px-6 max-w-4xl mx-auto flex flex-col items-center justify-center min-h-[220px]">
        {/* CAPTURE */}
        <div className="overflow-hidden mb-1">
          <h1
            className={`font-serif text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-[0.22em] text-[#F5F5F5] font-light uppercase transition-all duration-1000 ease-out ${
              step >= 1
                ? 'opacity-100 translate-y-0 filter blur-0 scale-100'
                : 'opacity-0 translate-y-8 filter blur-md scale-95'
            }`}
            style={{
              textShadow: '0 0 35px rgba(214, 181, 116, 0.25)',
            }}
          >
            CAPTURE
          </h1>
        </div>

        {/* VIDEOGRAPHY */}
        <div className="overflow-hidden mb-3">
          <div
            className={`text-sm sm:text-lg md:text-xl lg:text-2xl tracking-[0.45em] uppercase text-[#D6B574] font-light transition-all duration-900 ease-out ${
              step >= 2
                ? 'opacity-100 translate-y-0 filter blur-0'
                : 'opacity-0 translate-y-6 filter blur-sm'
            }`}
          >
            VIDEOGRAPHY
          </div>
        </div>

        {/* Thin Gold Hairline Divider */}
        <div
          className={`h-[1px] bg-gradient-to-r from-transparent via-[#D6B574]/70 to-transparent transition-all duration-1000 ease-out my-3 ${
            step >= 3 ? 'w-48 sm:w-64 opacity-100' : 'w-0 opacity-0'
          }`}
        />

        {/* BY AYUSH */}
        <div className="overflow-hidden">
          <div
            className={`text-xs sm:text-sm md:text-base tracking-[0.35em] uppercase text-white/90 font-medium transition-all duration-800 ease-out ${
              step >= 3
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            BY AYUSH
          </div>
        </div>

        {/* Tagline */}
        <div className="overflow-hidden mt-6">
          <p
            className={`font-serif italic text-base sm:text-lg md:text-xl text-[#D6B574]/90 tracking-wide transition-all duration-1000 ease-out ${
              step >= 4
                ? 'opacity-100 translate-y-0 filter blur-0'
                : 'opacity-0 translate-y-4 filter blur-sm'
            }`}
          >
            “Turning Moments into Cinematic Memories.”
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-32 h-[1px] bg-white/10 overflow-hidden">
        <div
          className="h-full bg-[#D6B574] transition-all ease-linear"
          style={{
            width: `${Math.min((step / 4) * 100, 100)}%`,
            transitionDuration: '700ms',
          }}
        />
      </div>
    </div>
  );
};
