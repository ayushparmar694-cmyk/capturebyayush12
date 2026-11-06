import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Menu, X, ArrowUpRight } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface NavbarProps {
  isMuted: boolean;
  onToggleSound: () => void;
  onReplayIntro?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isMuted, onToggleSound, onReplayIntro }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Films', href: '#films' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? 'bg-[#080808]/90 backdrop-blur-xl border-b border-white/5 py-4 shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'bg-gradient-to-b from-[#080808]/80 via-[#080808]/40 to-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Identity / Logo */}
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="group flex flex-col tracking-wider focus:outline-none"
            aria-label="Capture by Ayush Home"
          >
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.25em] text-[#F5F5F5] group-hover:text-[#D6B574] transition-colors duration-300">
              CAPTURE
            </span>
            <span className="text-[9px] tracking-[0.35em] text-[#D6B574] uppercase font-sans font-medium -mt-1 group-hover:tracking-[0.4em] transition-all duration-300">
              BY AYUSH
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-xs font-sans tracking-[0.2em] uppercase text-white/70 hover:text-[#D6B574] transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D6B574] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Right Action Icons & CTA */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Ambient Sound Toggle */}
            <button
              onClick={onToggleSound}
              className="p-2 text-white/60 hover:text-[#D6B574] transition-colors duration-200 focus:outline-none rounded-full hover:bg-white/5"
              title={isMuted ? 'Turn cinematic audio ON' : 'Mute audio'}
              aria-label="Toggle ambient audio"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#D6B574]" />}
            </button>

            {/* Desktop CTA Button */}
            <a
              href="#booking"
              onClick={(e) => handleLinkClick(e, '#booking')}
              className="hidden sm:inline-flex items-center space-x-2 px-5 py-2.5 rounded-full border border-[#D6B574]/60 bg-[#D6B574]/10 hover:bg-[#D6B574] text-[#D6B574] hover:text-[#080808] transition-all duration-300 text-xs font-sans tracking-[0.2em] uppercase font-medium shadow-[0_0_15px_rgba(214,181,116,0.15)] group"
            >
              <span>Book Shoot</span>
              <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-white/80 hover:text-[#D6B574] transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-[#080808]/98 backdrop-blur-2xl md:hidden transition-all duration-500 flex flex-col justify-between px-8 py-24 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-8'
        }`}
      >
        <div className="flex flex-col space-y-6">
          <div className="text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium border-b border-white/10 pb-4">
            Navigation Menu
          </div>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="font-serif text-3xl text-white/90 hover:text-[#D6B574] tracking-wide transition-colors flex items-center justify-between group py-2"
              style={{ transitionDelay: `${idx * 50}ms` }}
            >
              <span>{link.label}</span>
              <span className="text-xs font-sans text-white/30 group-hover:text-[#D6B574] transition-colors">
                0{idx + 1}
              </span>
            </a>
          ))}
          <a
            href="#booking"
            onClick={(e) => handleLinkClick(e, '#booking')}
            className="font-serif text-3xl text-[#D6B574] tracking-wide pt-4 flex items-center justify-between"
          >
            <span>Book Your Shoot</span>
            <ArrowUpRight className="w-5 h-5 text-[#D6B574]" />
          </a>
        </div>

        {/* Mobile Menu Footer Info */}
        <div className="border-t border-white/10 pt-6 space-y-3">
          <div className="text-xs tracking-wider text-white/50">
            {BRAND_CONFIG.location.fullAddress}
          </div>
          <div className="flex items-center space-x-6 pt-2">
            <a
              href={`tel:${BRAND_CONFIG.phone}`}
              className="text-xs tracking-[0.15em] uppercase text-[#D6B574] hover:underline"
            >
              Call: {BRAND_CONFIG.phone}
            </a>
            <a
              href={BRAND_CONFIG.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs tracking-[0.15em] uppercase text-white/70 hover:text-[#D6B574]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
