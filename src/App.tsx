import React, { useState, useEffect } from 'react';
import { IntroAnimation } from './components/IntroAnimation';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { SignatureExperience } from './components/SignatureExperience';
import { BookingSection } from './components/BookingSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { ShowreelModal } from './components/ShowreelModal';
import { soundEngine } from './utils/audioEngine';

export const App: React.FC = () => {
  const [showIntro, setShowIntro] = useState<boolean>(() => {
    // Only show on first visit in session, unless replayed
    return !sessionStorage.getItem('capture_intro_completed');
  });

  const [isMuted, setIsMuted] = useState(true);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const handleIntroComplete = () => {
    setShowIntro(false);
    sessionStorage.setItem('capture_intro_completed', 'true');
  };

  const handleReplayIntro = () => {
    setShowIntro(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleSound = () => {
    if (isMuted) {
      soundEngine.playAmbience();
      setIsMuted(false);
    } else {
      soundEngine.stopAmbience();
      setIsMuted(true);
    }
  };

  const handleSelectServiceForBooking = (serviceTitle: string) => {
    setPrefilledService(serviceTitle);
  };

  const handleSelectFilmForBooking = (filmTitle: string) => {
    setPrefilledService(`Film Style: ${filmTitle}`);
    const el = document.querySelector('#booking');
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#D6B574] selection:text-[#080808] font-sans overflow-x-hidden">
      {/* Luxury Gold Trailing Cursor (Desktop) */}
      <CustomCursor />

      {/* Cinematic Intro Animation Sequence */}
      {showIntro && <IntroAnimation onComplete={handleIntroComplete} />}

      {/* Sticky Blur Navigation Bar */}
      <Navbar
        isMuted={isMuted}
        onToggleSound={handleToggleSound}
        onReplayIntro={handleReplayIntro}
      />

      {/* Main Page Flow */}
      <main>
        {/* Hero Section */}
        <Hero onOpenShowreelModal={() => setShowreelOpen(true)} />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* Portfolio Gallery Section */}
        <Portfolio onSelectFilmForBooking={handleSelectFilmForBooking} />

        {/* Signature Experience Section */}
        <SignatureExperience />

        {/* Booking Experience Section */}
        <BookingSection prefilledService={prefilledService} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onReplayIntro={handleReplayIntro} />

      {/* Floating WhatsApp Action Pill */}
      <FloatingWhatsApp />

      {/* Master Showreel Modal */}
      <ShowreelModal isOpen={showreelOpen} onClose={() => setShowreelOpen(false)} />
    </div>
  );
};

export default App;
