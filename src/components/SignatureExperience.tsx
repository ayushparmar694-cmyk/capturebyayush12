import React from 'react';
import { Sparkles, Sliders, Music, Zap, Smartphone, CheckCircle } from 'lucide-react';

export const SignatureExperience: React.FC = () => {
  const filmStrips = [
    'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80',
    'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80',
  ];

  const pillars = [
    {
      icon: Smartphone,
      title: 'The Mobile Advantage',
      desc: 'No intimidating rigs or intrusive lighting cranes. We move gracefully between your guests, capturing genuine micro-expressions that traditional bulky cameras miss.',
    },
    {
      icon: Sliders,
      title: 'DaVinci Color Science',
      desc: 'Every shot is recorded in 10-bit Apple ProRes Log and graded individually in DaVinci Resolve Studio. Rich skin tones, creamy highlights, and timeless warmth.',
    },
    {
      icon: Music,
      title: 'Emotional Audio Craft',
      desc: 'Cinematic memory lives in sound. We record crystal-clear vows and couple whispers with studio wireless mics and pair them with license-cleared cinematic scores.',
    },
    {
      icon: Zap,
      title: 'Express Social Turnaround',
      desc: 'While the celebration adrenaline is still flowing, receive your first viral-ready 9:16 Instagram Reel within 24 to 48 hours for instant sharing.',
    },
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden border-t border-b border-white/5">
      {/* Cinematic Ambient Flare */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-[#D6B574]/4 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Main Section Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span>The Signature Approach</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-[0.18em] font-light text-[#F5F5F5] uppercase leading-tight">
            EVERY FRAME.
            <br />
            EVERY EMOTION.
            <br />
            EVERY MEMORY.
          </h2>

          <div className="mt-8 max-w-2xl mx-auto">
            <p className="font-serif italic text-lg sm:text-2xl text-[#D6B574]/90 font-light leading-relaxed">
              “From the smallest detail to the biggest celebration, every moment deserves to be captured beautifully.”
            </p>
          </div>
        </div>

        {/* 35mm Motion Picture Film Strip Visualizer */}
        <div className="relative my-16 overflow-hidden rounded-2xl bg-[#0D0D0F] p-4 border border-[#D6B574]/20 shadow-2xl">
          {/* Top Film Sprocket Holes */}
          <div className="flex justify-between items-center space-x-3 pb-3 overflow-hidden opacity-40 select-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-3 h-4 rounded-sm bg-white/20 shrink-0" />
            ))}
          </div>

          {/* Film Frame Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 py-2">
            {filmStrips.map((img, i) => (
              <div
                key={i}
                className="relative aspect-[3/4] rounded-lg overflow-hidden border border-white/10 group bg-black"
              >
                <img
                  src={img}
                  alt={`Film reel frame ${i + 1}`}
                  loading="lazy"
                  className="w-full h-full object-cover filter grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                <div className="absolute bottom-2 left-2 text-[8px] font-mono tracking-widest text-[#D6B574] bg-black/80 px-1 rounded">
                  FRM·0{i + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Film Sprocket Holes */}
          <div className="flex justify-between items-center space-x-3 pt-3 overflow-hidden opacity-40 select-none">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-3 h-4 rounded-sm bg-white/20 shrink-0" />
            ))}
          </div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-8 rounded-2xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D6B574]/10 border border-[#D6B574]/30 flex items-center justify-center text-[#D6B574] mb-6 group-hover:bg-[#D6B574] group-hover:text-[#080808] transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-xl text-white font-light tracking-wide mb-3">
                  {pillar.title}
                </h3>
                <p className="text-xs text-white/60 font-sans leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
