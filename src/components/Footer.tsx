import React from 'react';
import { Instagram, MessageCircle, ArrowUp, Film, Heart } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface FooterProps {
  onReplayIntro: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onReplayIntro }) => {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060607] border-t border-white/10 text-white overflow-hidden">
      {/* Decorative Golden Line Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-16 border-b border-white/5">
          
          {/* Brand & Tagline */}
          <div className="text-center md:text-left space-y-2">
            <h3 className="font-serif text-3xl sm:text-4xl tracking-[0.2em] font-light text-[#F5F5F5] uppercase">
              {BRAND_CONFIG.founderBrand}
            </h3>
            <p className="font-serif italic text-sm sm:text-base text-[#D6B574]/90 tracking-wide font-light">
              “{BRAND_CONFIG.tagline}”
            </p>
            <p className="text-xs text-white/40 tracking-wider pt-1 font-mono">
              KHAPERKHEDA · NAGPUR · MAHARASHTRA
            </p>
          </div>

          {/* Center Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Footer Navigation">
            {[
              { label: 'Home', href: '#hero' },
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Films', href: '#films' },
              { label: 'Contact', href: '#contact' },
            ].map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                className="text-xs font-sans tracking-[0.2em] uppercase text-white/60 hover:text-[#D6B574] transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center space-x-4">
            {/* Instagram */}
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D6B574] flex items-center justify-center text-white/70 hover:text-[#D6B574] hover:bg-[#D6B574]/10 transition-all"
              aria-label="Instagram profile"
            >
              <Instagram className="w-4 h-4" />
            </a>

            {/* WhatsApp */}
            <a
              href={BRAND_CONFIG.whatsappDirectLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#25D366] flex items-center justify-center text-white/70 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all"
              aria-label="WhatsApp chat"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            {/* Scroll To Top */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 hover:border-[#D6B574] flex items-center justify-center text-white/70 hover:text-[#D6B574] hover:bg-white/5 transition-all"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/40 gap-4">
          <div>
            © 2026 Capture Videography. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={onReplayIntro}
              className="inline-flex items-center space-x-1.5 text-[11px] tracking-wider uppercase text-white/50 hover:text-[#D6B574] transition-colors"
            >
              <Film className="w-3.5 h-3.5 text-[#D6B574]" />
              <span>Replay Studio Intro</span>
            </button>

            <span className="text-white/20">|</span>

            <span className="text-[11px] tracking-wider text-white/40">
              Crafted for Ayush Parmar
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
