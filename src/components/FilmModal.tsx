import React, { useEffect, useRef } from 'react';
import { X, Play, Clock, MapPin, Camera, ExternalLink, ArrowRight } from 'lucide-react';
import { FilmItem } from '../types';

interface FilmModalProps {
  film: FilmItem | null;
  onClose: () => void;
  onBookSimilar: (filmTitle: string) => void;
}

export const FilmModal: React.FC<FilmModalProps> = ({ film, onClose, onBookSimilar }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (film) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [film, onClose]);

  if (!film) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 lg:p-10 bg-black/90 backdrop-blur-2xl animate-fade-in">
      {/* Background click to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

      {/* Main Modal Card */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0E0E10] border border-[#D6B574]/40 rounded-2xl shadow-[0_25px_80px_rgba(0,0,0,0.95)] flex flex-col">
        {/* Header Bar */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/10">
          <div className="flex items-center space-x-3">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.25em] uppercase text-[#D6B574]">
              CINEMATIC PLAYBACK · {film.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-white/50 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container */}
        <div className="relative bg-black flex items-center justify-center overflow-hidden">
          {film.videoUrl ? (
            <video
              ref={videoRef}
              controls
              autoPlay
              playsInline
              poster={film.thumbnailUrl}
              className={`w-full max-h-[62vh] object-contain ${
                film.aspectRatio === '9:16' ? 'max-w-sm mx-auto' : ''
              }`}
            >
              <source src={film.videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : film.youtubeId ? (
            <div className="w-full aspect-video">
              <iframe
                src={`https://www.youtube.com/embed/${film.youtubeId}?autoplay=1&rel=0`}
                title={film.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          ) : (
            <div className="relative w-full aspect-video flex items-center justify-center">
              <img
                src={film.thumbnailUrl}
                alt={film.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center p-6">
                <Play className="w-12 h-12 text-[#D6B574] mb-3 animate-pulse" />
                <p className="text-white text-sm">Video Stream Ready to Link</p>
                <p className="text-white/60 text-xs mt-1">
                  (Easily configured via src/data/filmsData.ts)
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Film Details & Metadata */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-[10px] tracking-[0.25em] uppercase text-[#D6B574] font-medium mb-1">
                {film.subtitle}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-light tracking-wide">
                {film.title}
              </h3>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookSimilar(film.title);
              }}
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-[#D6B574] hover:bg-[#ECCB8E] text-[#080808] text-xs tracking-[0.2em] uppercase font-semibold transition-all shadow-[0_0_20px_rgba(214,181,116,0.3)] shrink-0 self-start sm:self-center"
            >
              <span>Book Similar Film</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-sm text-white/75 font-sans leading-relaxed font-light">
            {film.description}
          </p>

          {/* Technical Specs Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-white/10">
            <div className="flex items-center space-x-3 text-xs text-white/70">
              <Camera className="w-4 h-4 text-[#D6B574] shrink-0" />
              <div>
                <div className="text-[9px] uppercase tracking-wider text-white/40">Gear Rig</div>
                <div className="text-white/90 truncate">{film.gearUsed}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-white/70">
              <MapPin className="w-4 h-4 text-[#D6B574] shrink-0" />
              <div>
                <div className="text-[9px] uppercase tracking-wider text-white/40">Location</div>
                <div className="text-white/90">{film.location}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3 text-xs text-white/70">
              <Clock className="w-4 h-4 text-[#D6B574] shrink-0" />
              <div>
                <div className="text-[9px] uppercase tracking-wider text-white/40">Duration</div>
                <div className="text-white/90">{film.duration} · {film.aspectRatio}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
