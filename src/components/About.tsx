import React from 'react';
import { Camera, Film, Award, CheckCircle2, MapPin, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const About: React.FC = () => {
  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#D6B574]/5 rounded-full filter blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#D6B574]/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span>The Visionary Behind the Lens</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] font-light text-[#F5F5F5] uppercase">
            THE ART OF CAPTURING MOMENTS.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574] to-transparent mx-auto mt-6" />
        </div>

        {/* Two-Column Layout: Portrait Placeholder & Brand Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Filmmaker Portrait Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative group max-w-md mx-auto">
              
              {/* Outer Decorative Gold Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[#D6B574]/20 group-hover:border-[#D6B574]/40 transition-colors duration-500 pointer-events-none" />
              
              {/* Camera Frame Corners */}
              <div className="absolute -top-4 -left-4 w-6 h-6 border-t-2 border-l-2 border-[#D6B574]" />
              <div className="absolute -top-4 -right-4 w-6 h-6 border-t-2 border-r-2 border-[#D6B574]" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 border-b-2 border-l-2 border-[#D6B574]" />
              <div className="absolute -bottom-4 -right-4 w-6 h-6 border-b-2 border-r-2 border-[#D6B574]" />

              {/* Portrait Image Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#141416] border border-white/10 aspect-[4/5] sm:aspect-[4/5] shadow-2xl">
                <img
                  src="assets/ayush-founder.jpg"
                  alt="Ayush Parmar - Founder & Cinematic Videographer"
                  className="w-full h-full object-cover object-[35%_center] contrast-105 brightness-100 group-hover:scale-105 transition-all duration-700"
                />

                {/* Gradient Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20 pointer-events-none" />

                {/* Viewfinder Watermark overlay */}
                <div className="absolute top-4 left-4 text-[9px] tracking-[0.2em] uppercase font-mono text-white/60 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                  PRORES LOG · 24P
                </div>

                {/* Founder Info Overlay at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent">
                  <div className="text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-1">
                    FOUNDER & CINEMATIC VIDEOGRAPHER
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-white tracking-wider font-light">
                    {BRAND_CONFIG.founderName}
                  </h3>
                  <div className="flex items-center space-x-2 text-xs text-white/60 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-[#D6B574]" />
                    <span>{BRAND_CONFIG.location.town}, {BRAND_CONFIG.location.city}</span>
                  </div>
                </div>
              </div>

              {/* Mobile Filmmaking Badge */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-[#141416]/95 border border-[#D6B574]/40 rounded-xl p-3.5 shadow-2xl backdrop-blur-md hidden sm:flex items-center space-x-3">
                <div className="w-10 h-10 rounded-lg bg-[#D6B574]/10 border border-[#D6B574]/30 flex items-center justify-center text-[#D6B574]">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.2em] text-[#D6B574] uppercase font-bold">
                    iPhone Cine Rig
                  </div>
                  <div className="text-xs text-white/80 font-light">
                    4K ProRes Log Colorist
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Excellence (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* The Prompt's Core Content */}
            <div className="relative pl-6 border-l-2 border-[#D6B574]/60">
              <p className="font-serif text-xl sm:text-2xl text-white/90 leading-relaxed font-light italic">
                “Capture by Ayush is a cinematic videography brand built around creativity, emotions, and storytelling. We specialize in transforming real-life moments into visually stunning cinematic experiences through iPhone videography, creative shooting techniques, and professional editing.”
              </p>
            </div>

            {/* Philosophy Paragraph */}
            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-sans font-light tracking-wide">
              We reject stale wedding formulas and rigid traditional camera setups. By mastering state-of-the-art mobile filmmaking with Apple ProRes Log, anamorphic mobile glass, and Hollywood DaVinci Resolve color pipelines, we move seamlessly through your celebrations without interrupting the raw, authentic emotions of your family and guests.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D6B574]/10 text-[#D6B574]">
                    <Camera className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-white">
                    Unmatched Intimacy
                  </h4>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Capturing raw, candid laughter and uninhibited tears without intimidating subjects with giant camera rigs.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/30 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D6B574]/10 text-[#D6B574]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="text-xs tracking-[0.2em] uppercase font-medium text-white">
                    Film Color Science
                  </h4>
                </div>
                <p className="text-xs text-white/60 leading-relaxed font-light">
                  Every frame is graded in DaVinci Resolve Studio with bespoke film emulation LUTs for warm, timeless skin tones.
                </p>
              </div>
            </div>

            {/* Stats Counter Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
              {BRAND_CONFIG.stats.map((stat) => (
                <div key={stat.label} className="space-y-1">
                  <div className="font-serif text-2xl sm:text-3xl text-[#D6B574] font-light">
                    {stat.value}
                  </div>
                  <div className="text-[10px] tracking-[0.18em] uppercase text-white/50 font-sans">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Location & Contact Callout */}
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-white/70">
              <span className="inline-flex items-center space-x-1.5 text-[#D6B574]">
                <CheckCircle2 className="w-4 h-4" />
                <span className="tracking-wider">Khaperkheda & Nagpur HQ</span>
              </span>
              <span className="text-white/20">|</span>
              <span className="text-white/60 tracking-wider">
                Available for Destination Shoots Worldwide
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
