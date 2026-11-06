import React, { useEffect, useRef } from 'react';
import { X, Film, Sparkles } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKey);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-8 bg-black/95 backdrop-blur-2xl animate-fade-in">
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      <div className="relative w-full max-w-5xl bg-[#0A0A0C] border border-[#D6B574]/40 rounded-2xl overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.95)]">
        {/* Top Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10 bg-[#0E0E10]">
          <div className="flex items-center space-x-3">
            <Film className="w-4 h-4 text-[#D6B574]" />
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-white font-medium">
              CAPTURE BY AYUSH · MASTER SHOWREEL (2026)
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-white/50 hover:text-white rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player */}
        <div className="relative aspect-video bg-black flex items-center justify-center">
          <video
            ref={videoRef}
            controls
            autoPlay
            playsInline
            poster="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85"
            className="w-full h-full object-contain"
          >
            <source
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Bottom Specs */}
        <div className="p-4 sm:p-6 bg-[#0E0E10] flex flex-col sm:flex-row items-center justify-between text-xs text-white/70 gap-4">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span className="tracking-wider">
              Recorded in 4K 10-bit Apple ProRes Log · Graded in DaVinci Resolve Studio
            </span>
          </div>

          <a
            href="#booking"
            onClick={() => {
              onClose();
              const el = document.querySelector('#booking');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2 rounded-full bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] text-[11px] font-sans tracking-[0.2em] uppercase font-bold transition-all shadow-[0_0_15px_rgba(214,181,116,0.3)]"
          >
            Book Your Shoot Now
          </a>
        </div>
      </div>
    </div>
  );
};
