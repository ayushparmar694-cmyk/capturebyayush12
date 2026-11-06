import React from 'react';
import { Phone, MessageCircle, Instagram, MapPin, Sparkles, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Cinematic Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#D6B574]/4 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span>Connect Directly</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl tracking-[0.18em] font-light text-[#F5F5F5] uppercase leading-tight">
            YOUR STORY.
            <br />
            OUR LENS.
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574] to-transparent mx-auto mt-6" />
        </div>

        {/* Content Layout: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Brand & Direct Connect Info (7 cols) */}
          <div className="lg:col-span-7 space-y-10">
            <div>
              <div className="font-serif text-2xl sm:text-3xl font-light tracking-[0.2em] text-[#F5F5F5] uppercase">
                {BRAND_CONFIG.brandName}
              </div>
              <div className="text-xs sm:text-sm font-sans tracking-[0.4em] text-[#D6B574] uppercase font-medium mt-1">
                {BRAND_CONFIG.founderBrand}
              </div>
              <p className="mt-4 text-xs sm:text-sm text-white/60 tracking-wider leading-relaxed font-light">
                Available for luxury weddings, couple love stories, automotive cinematics, and commercial brand productions across Nagpur, Central India, and worldwide destination locations.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Phone */}
              <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D6B574]/10 text-[#D6B574]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-white/50">
                    Direct Phone & WhatsApp
                  </div>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-white font-light tracking-wider">
                  {BRAND_CONFIG.phoneDisplay}
                </div>
                <div className="text-[10px] text-[#D6B574]/80 tracking-wider mt-1">
                  7666242442 · Ayush Parmar
                </div>
              </div>

              {/* Instagram */}
              <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/40 transition-colors">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="p-2 rounded-lg bg-[#D6B574]/10 text-[#D6B574]">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-white/50">
                    Official Instagram
                  </div>
                </div>
                <div className="font-serif text-xl sm:text-2xl text-white font-light tracking-wider">
                  {BRAND_CONFIG.instagramHandle}
                </div>
                <div className="text-[10px] text-[#D6B574]/80 tracking-wider mt-1">
                  Daily Reels & Behind-the-Scenes
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="p-6 rounded-2xl bg-[#121214] border border-white/5 hover:border-[#D6B574]/40 transition-colors flex items-start space-x-4">
              <div className="p-3 rounded-xl bg-[#D6B574]/10 text-[#D6B574] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-sans tracking-[0.2em] uppercase text-white/50 mb-1">
                  Studio Headquarters
                </div>
                <div className="text-base sm:text-lg text-white font-serif tracking-wide">
                  {BRAND_CONFIG.location.fullAddress}
                </div>
                <div className="text-xs text-white/50 mt-1 font-light">
                  {BRAND_CONFIG.location.coverage}
                </div>
              </div>
            </div>

            {/* 3 Prominent Action Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* CALL NOW */}
              <a
                href={`tel:${BRAND_CONFIG.phone}`}
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-[0_0_20px_rgba(214,181,116,0.3)]"
              >
                <Phone className="w-4 h-4" />
                <span>CALL NOW</span>
              </a>

              {/* WHATSAPP */}
              <a
                href={BRAND_CONFIG.whatsappDirectLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-[#080808] text-xs font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-[0_0_20px_rgba(37,211,102,0.25)]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>

              {/* INSTAGRAM */}
              <a
                href={BRAND_CONFIG.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-2 px-6 py-4 rounded-xl border border-white/20 hover:border-[#D6B574] bg-[#141416] text-white hover:text-[#D6B574] text-xs font-sans tracking-[0.2em] uppercase font-medium transition-all"
              >
                <Instagram className="w-4 h-4" />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Dark Map & Studio Experience (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-3xl overflow-hidden bg-[#121214] border border-[#D6B574]/30 p-8 shadow-2xl relative">
              
              {/* Studio Card Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
                <div>
                  <div className="text-[10px] tracking-[0.25em] uppercase text-[#D6B574] font-mono">
                    HQ COORDINATES
                  </div>
                  <div className="text-lg font-serif text-white">
                    21.2858° N, 79.1174° E
                  </div>
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping" />
              </div>

              {/* Visual Dark Map Simulation */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-[#0A0A0C] border border-white/10 mb-6 group">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Nagpur Aerial Night View"
                  className="w-full h-full object-cover filter grayscale contrast-125 brightness-75 group-hover:scale-105 transition-transform duration-700"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#121214] via-transparent to-black/40" />

                {/* Pin Marker */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#D6B574] flex items-center justify-center text-black shadow-[0_0_20px_#D6B574]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="mt-2 px-3 py-1 rounded bg-black/90 backdrop-blur-md text-[10px] font-mono text-[#D6B574] border border-[#D6B574]/40 tracking-wider">
                      Khaperkheda · Nagpur
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Details */}
              <div className="space-y-3 text-xs text-white/60">
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Cinematographer:</span>
                  <span className="text-white">Ayush Parmar</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Direct Contact:</span>
                  <span className="text-[#D6B574]">7666242442</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/5">
                  <span className="text-white/40">Inquiry Response Time:</span>
                  <span className="text-white">Within 2 Hours</span>
                </div>
              </div>

              {/* Direct Open in Google Maps */}
              <a
                href="https://maps.google.com/?q=Khaperkheda+Nagpur+Maharashtra"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center space-x-2 py-3 rounded-xl border border-white/10 hover:border-[#D6B574]/60 text-xs tracking-[0.18em] uppercase text-white/80 hover:text-[#D6B574] transition-colors"
              >
                <span>Open Location in Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
