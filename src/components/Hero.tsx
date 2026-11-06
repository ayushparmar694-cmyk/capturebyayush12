import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, ChevronDown, Sparkles, Film } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface HeroProps {
  onOpenShowreelModal: () => void;
}

const HERO_VIDEOS = [
  {
    id: 'wedding',
    name: 'Wedding Cinematics',
    tag: 'Royal Wedding & Couple Stories',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-bride-and-groom-posing-in-nature-41555-large.mp4',
    poster: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'automotive',
    name: 'Luxury Automotive',
    tag: 'Night Rolling & Exhaust Notes',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    poster: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1920&q=85',
  },
  {
    id: 'haldi',
    name: 'Vibrant Celebrations',
    tag: 'Marigold & Traditional Energy',
    url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    poster: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1920&q=85',
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenShowreelModal }) => {
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const activeVideo = HERO_VIDEOS[activeVideoIndex];

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Autoplay may be restricted by browser until user gesture
      });
    }
  }, [activeVideoIndex]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offsetTop = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#080808]">
      {/* Background Cinematic Video with Zoom & Ken Burns Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          poster={activeVideo.poster}
          className="w-full h-full object-cover scale-105 transition-transform duration-[10000ms] ease-out animate-subtle-zoom"
          style={{
            filter: 'brightness(0.55) contrast(1.15)',
          }}
        >
          <source src={activeVideo.url} type="video/mp4" />
        </video>

        {/* Multi-layered Cinematic Gradients & Light Leak */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-black/70 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_#080808_100%)] pointer-events-none" />
        
        {/* Subtle Anamorphic Amber / Champagne Light Flare */}
        <div className="absolute top-1/4 -left-48 w-96 h-96 rounded-full bg-[#D6B574]/15 filter blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 -right-48 w-96 h-96 rounded-full bg-[#D6B574]/10 filter blur-3xl pointer-events-none" />
      </div>

      {/* Camera Viewfinder Studio HUD */}
      <div className="absolute top-24 left-6 sm:left-12 z-10 hidden sm:flex items-center space-x-3 text-[10px] tracking-[0.25em] text-white/50 uppercase font-mono pointer-events-none">
        <div className="w-2 h-2 rounded-full bg-[#D6B574] animate-pulse" />
        <span>4K PRORES 422HQ</span>
        <span className="text-white/20">|</span>
        <span>24.00 FPS</span>
        <span className="text-white/20">|</span>
        <span>ISO 160 · 2.39:1</span>
      </div>

      {/* Video Mood Switcher Pills (Top Right on Desktop) */}
      <div className="absolute top-24 right-6 sm:right-12 z-10 hidden lg:flex items-center space-x-2 bg-black/40 backdrop-blur-md p-1.5 rounded-full border border-white/10">
        {HERO_VIDEOS.map((vid, idx) => (
          <button
            key={vid.id}
            onClick={() => setActiveVideoIndex(idx)}
            className={`px-3.5 py-1.5 rounded-full text-[10px] tracking-[0.18em] uppercase transition-all duration-300 ${
              activeVideoIndex === idx
                ? 'bg-[#D6B574] text-[#080808] font-semibold shadow-[0_0_15px_rgba(214,181,116,0.3)]'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            }`}
          >
            {vid.name.split(' ')[0]}
          </button>
        ))}
      </div>

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center justify-center pt-20 pb-16">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full border border-[#D6B574]/30 bg-black/40 backdrop-blur-md mb-8 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
          <span className="text-[10px] sm:text-xs font-sans tracking-[0.3em] uppercase text-[#D6B574] font-medium">
            Turning Moments into Cinematic Memories
          </span>
        </div>

        {/* Primary Studio Brand Typography */}
        <div className="space-y-2 mb-6">
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-[0.2em] font-light text-[#F5F5F5] uppercase leading-tight sm:leading-none">
            CAPTURE VIDEOGRAPHY
          </h1>
          <div className="font-sans text-xs sm:text-sm md:text-base tracking-[0.45em] text-[#D6B574] uppercase font-medium">
            BY AYUSH
          </div>
        </div>

        {/* Hero Quote */}
        <div className="max-w-2xl mx-auto my-6">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl text-white/95 font-light tracking-wide leading-relaxed italic">
            “WE DON’T JUST SHOOT VIDEOS.
            <br />
            WE CREATE MEMORIES.”
          </h2>
        </div>

        {/* Supporting Text */}
        <p className="text-xs sm:text-sm md:text-base font-sans tracking-[0.18em] text-white/70 uppercase max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Cinematic iPhone Videography <span className="text-[#D6B574]/60">|</span> Creative Filmmaking <span className="text-[#D6B574]/60">|</span> Professional Video Editing
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          {/* Explore Films */}
          <button
            onClick={() => scrollTo('#films')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] font-sans text-xs tracking-[0.25em] uppercase font-semibold transition-all duration-300 shadow-[0_0_25px_rgba(214,181,116,0.3)] hover:shadow-[0_0_35px_rgba(214,181,116,0.5)] transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Films
          </button>

          {/* Book Your Shoot */}
          <button
            onClick={() => scrollTo('#booking')}
            className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/30 hover:border-[#D6B574] bg-black/40 hover:bg-[#D6B574]/10 text-white hover:text-[#D6B574] font-sans text-xs tracking-[0.25em] uppercase font-medium backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Book Your Shoot
          </button>
        </div>

        {/* Watch Showreel Quick Pill */}
        <div className="mt-8">
          <button
            onClick={onOpenShowreelModal}
            className="inline-flex items-center space-x-2 text-xs tracking-[0.2em] text-[#D6B574]/90 hover:text-[#D6B574] group transition-colors focus:outline-none"
          >
            <span className="w-7 h-7 rounded-full border border-[#D6B574]/60 flex items-center justify-center group-hover:bg-[#D6B574] group-hover:text-black transition-all">
              <Film className="w-3.5 h-3.5" />
            </span>
            <span className="underline-offset-4 group-hover:underline">WATCH MASTER SHOWREEL (2026)</span>
          </button>
        </div>
      </div>

      {/* Bottom Controls Bar (Video play/pause & Animated Scroll indicator) */}
      <div className="absolute bottom-8 left-0 right-0 z-10 px-6 sm:px-12 flex items-center justify-between pointer-events-auto">
        {/* Play/Pause background video */}
        <button
          onClick={togglePlay}
          className="flex items-center space-x-2 text-[11px] tracking-[0.2em] text-white/50 hover:text-[#D6B574] uppercase transition-colors"
          title={isPlaying ? 'Pause background video' : 'Play background video'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#D6B574]" />}
          <span className="hidden sm:inline">{isPlaying ? 'PAUSE BG' : 'PLAY BG'}</span>
        </button>

        {/* Scroll Indicator */}
        <div
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center cursor-pointer group text-white/50 hover:text-[#D6B574] transition-colors"
        >
          <span className="text-[9px] tracking-[0.3em] uppercase mb-1 font-sans">SCROLL</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-[#D6B574] to-transparent animate-bounce" />
          <ChevronDown className="w-3.5 h-3.5 text-[#D6B574] -mt-1 group-hover:translate-y-1 transition-transform" />
        </div>

        {/* Location Tag */}
        <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase hidden sm:block font-mono">
          NAGPUR, MH · INDIA
        </div>
      </div>
    </section>
  );
};
