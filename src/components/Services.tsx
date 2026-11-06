import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Check, ChevronRight } from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectServiceForBooking: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null);

  const handleBookService = (title: string) => {
    onSelectServiceForBooking(title);
    const bookingEl = document.querySelector('#booking');
    if (bookingEl) {
      const offsetTop = bookingEl.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#0B0B0D] overflow-hidden">
      {/* Decorative Cinematic Light Glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#D6B574]/5 rounded-full filter blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[450px] h-[450px] bg-[#D6B574]/5 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-3">
              <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
              <span>Bespoke Filmmaking Offerings</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl tracking-[0.15em] font-light text-[#F5F5F5] uppercase">
              PREMIUM SERVICES
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-xs sm:text-sm tracking-[0.15em] text-white/60 uppercase max-w-md font-light leading-relaxed">
            Crafted with artistic precision, mobile agility, and cinematic color science for private memories and brand prestige.
          </p>
        </div>

        {/* 8 Premium Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service) => (
            <div
              key={service.id}
              className="service-card group relative rounded-2xl overflow-hidden bg-[#141416] border border-white/5 hover:border-[#D6B574]/40 transition-all duration-500 flex flex-col justify-between hover:shadow-[0_15px_40px_rgba(0,0,0,0.8)]"
            >
              {/* Image Container with Smooth Hover Zoom */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/40">
                <img
                  src={service.imageUrl}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 group-hover:scale-110 group-hover:brightness-105 transition-all duration-700 ease-out"
                />
                
                {/* Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#141416] via-[#141416]/20 to-transparent" />

                {/* Number Badge (Soft Champagne Gold) */}
                <div className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md border border-[#D6B574]/30">
                  <span className="font-serif text-xs font-semibold text-[#D6B574] tracking-widest">
                    {service.number}
                  </span>
                </div>

                {/* Deliverables pill */}
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="text-[9px] tracking-[0.15em] uppercase text-white/70 bg-black/70 px-2.5 py-1 rounded backdrop-blur-sm line-clamp-1 border border-white/5">
                    {service.deliverables}
                  </span>
                </div>
              </div>

              {/* Service Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide group-hover:text-[#D6B574] transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 leading-relaxed font-sans font-light">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-sans tracking-wider uppercase text-white/50 bg-white/5 px-2 py-0.5 rounded border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedServiceModal(service)}
                    className="text-[10px] tracking-[0.2em] uppercase text-white/60 hover:text-white flex items-center space-x-1 group/btn focus:outline-none"
                  >
                    <span>Details</span>
                    <ChevronRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => handleBookService(service.title)}
                    className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#D6B574]/10 hover:bg-[#D6B574] text-[#D6B574] hover:text-[#080808] transition-all text-[10px] font-sans tracking-[0.18em] uppercase font-medium border border-[#D6B574]/30"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal */}
      {selectedServiceModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#141416] border border-[#D6B574]/40 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8">
            <button
              onClick={() => setSelectedServiceModal(null)}
              className="absolute top-6 right-6 text-white/50 hover:text-white p-2 text-lg focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="text-[10px] tracking-[0.3em] uppercase text-[#D6B574] mb-2 font-mono">
              SERVICE {selectedServiceModal.number} · SPECIFICATIONS
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-white mb-4">
              {selectedServiceModal.title}
            </h3>

            <p className="text-sm text-white/80 leading-relaxed mb-6 font-light">
              {selectedServiceModal.fullDesc}
            </p>

            <div className="space-y-4 mb-6">
              <div className="text-xs tracking-[0.2em] uppercase text-[#D6B574] font-semibold">
                What’s Included:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedServiceModal.features.map((feat) => (
                  <div key={feat} className="flex items-start space-x-2 text-xs text-white/70">
                    <Check className="w-3.5 h-3.5 text-[#D6B574] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/5 mb-6">
              <div className="text-[10px] tracking-[0.2em] uppercase text-white/40 mb-1">
                Standard Deliverables
              </div>
              <div className="text-xs text-white/90 font-medium">
                {selectedServiceModal.deliverables}
              </div>
            </div>

            <div className="flex items-center justify-end space-x-4">
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="px-5 py-2.5 rounded-full text-xs tracking-wider uppercase text-white/60 hover:text-white"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const title = selectedServiceModal.title;
                  setSelectedServiceModal(null);
                  handleBookService(title);
                }}
                className="px-6 py-2.5 rounded-full bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] text-xs tracking-[0.2em] uppercase font-semibold transition-all shadow-[0_0_15px_rgba(214,181,116,0.3)]"
              >
                Book This Service Now
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
