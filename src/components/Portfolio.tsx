import React, { useState } from 'react';
import { Play, Sparkles, Filter, Smartphone, Monitor } from 'lucide-react';
import { FILMS_DATA } from '../data/filmsData';
import { FilmCategory, FilmItem } from '../types';
import { FilmModal } from './FilmModal';

interface PortfolioProps {
  onSelectFilmForBooking: (filmTitle: string) => void;
}

const CATEGORIES: FilmCategory[] = [
  'ALL',
  'WEDDINGS',
  'HALDI',
  'RECEPTION',
  'AUTOMOTIVE',
  'EVENTS',
  'BRAND FILMS',
  'CINEMATIC REELS',
];

export const Portfolio: React.FC<PortfolioProps> = ({ onSelectFilmForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<FilmCategory>('ALL');
  const [aspectFilter, setAspectFilter] = useState<'ALL' | '16:9' | '9:16'>('ALL');
  const [activeFilmModal, setActiveFilmModal] = useState<FilmItem | null>(null);

  const filteredFilms = FILMS_DATA.filter((film) => {
    const matchesCategory = activeCategory === 'ALL' || film.category === activeCategory;
    const matchesAspect = aspectFilter === 'ALL' || film.aspectRatio === aspectFilter;
    return matchesCategory && matchesAspect;
  });

  return (
    <section id="films" className="relative py-28 sm:py-36 bg-[#080808] overflow-hidden">
      {/* Ambient Radial Highlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#D6B574]/4 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 text-[10px] tracking-[0.3em] uppercase text-[#D6B574] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D6B574]" />
            <span>Cinematic Film Showcase</span>
          </div>
          <h2 className="font-serif text-4xl sm:text-6xl tracking-[0.15em] font-light text-[#F5F5F5] uppercase">
            SELECTED FILMS
          </h2>
          <p className="mt-4 text-xs sm:text-base font-serif italic text-white/70 tracking-wide">
            A collection of moments, stories, and cinematic memories.
          </p>
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#D6B574] to-transparent mx-auto mt-6" />
        </div>

        {/* Filter Toolbar: Categories & Aspect Ratio Mode */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12 border-b border-white/10 pb-6">
          
          {/* Category Filter Pills */}
          <div className="flex items-center flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-[11px] font-sans tracking-[0.18em] uppercase transition-all duration-300 focus:outline-none ${
                  activeCategory === cat
                    ? 'bg-[#D6B574] text-[#080808] font-semibold shadow-[0_0_15px_rgba(214,181,116,0.3)]'
                    : 'bg-[#121214] text-white/60 hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Aspect Ratio Switcher (16:9 Cinema vs 9:16 Vertical Reels) */}
          <div className="flex items-center space-x-2 bg-[#121214] p-1.5 rounded-full border border-white/10 text-[10px] tracking-wider uppercase">
            <button
              onClick={() => setAspectFilter('ALL')}
              className={`px-3 py-1.5 rounded-full transition-all ${
                aspectFilter === 'ALL'
                  ? 'bg-white/20 text-white font-medium'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              All Formats
            </button>
            <button
              onClick={() => setAspectFilter('16:9')}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition-all ${
                aspectFilter === '16:9'
                  ? 'bg-[#D6B574] text-[#080808] font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Monitor className="w-3 h-3" />
              <span>Cinema 16:9</span>
            </button>
            <button
              onClick={() => setAspectFilter('9:16')}
              className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-full transition-all ${
                aspectFilter === '9:16'
                  ? 'bg-[#D6B574] text-[#080808] font-semibold'
                  : 'text-white/50 hover:text-white'
              }`}
            >
              <Smartphone className="w-3 h-3" />
              <span>Reels 9:16</span>
            </button>
          </div>
        </div>

        {/* Masonry / Film Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {filteredFilms.map((film) => (
            <div
              key={film.id}
              onClick={() => setActiveFilmModal(film)}
              className="film-card group relative cursor-pointer rounded-2xl overflow-hidden bg-[#121214] border border-white/10 hover:border-[#D6B574]/60 transition-all duration-500 shadow-xl hover:shadow-[0_20px_50px_rgba(0,0,0,0.9)]"
            >
              {/* Thumbnail Container */}
              <div
                className={`relative w-full overflow-hidden ${
                  film.aspectRatio === '9:16' ? 'aspect-[9/14]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={film.thumbnailUrl}
                  alt={film.title}
                  loading="lazy"
                  className="w-full h-full object-cover filter brightness-90 contrast-105 group-hover:scale-110 group-hover:brightness-100 transition-all duration-700 ease-out"
                />

                {/* Dark Gradient Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E10] via-black/30 to-black/30 opacity-70 group-hover:opacity-40 transition-opacity" />

                {/* Center Animated Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md border border-[#D6B574]/60 flex items-center justify-center text-[#D6B574] group-hover:scale-125 group-hover:bg-[#D6B574] group-hover:text-[#080808] transition-all duration-300 shadow-[0_0_25px_rgba(0,0,0,0.6)]">
                    <Play className="w-6 h-6 ml-1 fill-current" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <span className="text-[9px] tracking-[0.2em] uppercase font-mono px-2.5 py-1 rounded bg-black/70 backdrop-blur-md text-[#D6B574] border border-[#D6B574]/30">
                    {film.category}
                  </span>
                  <span className="text-[9px] tracking-wider uppercase font-mono px-2 py-1 rounded bg-black/70 text-white/80">
                    {film.duration} · {film.aspectRatio}
                  </span>
                </div>

                {/* Gear Specs Tag Bottom-Left */}
                <div className="absolute bottom-3 left-4 right-4 pointer-events-none">
                  <div className="text-[9px] tracking-wider font-mono text-white/70 bg-black/70 px-2 py-1 rounded line-clamp-1 backdrop-blur-sm border border-white/5">
                    {film.gearUsed.split('·')[0]}
                  </div>
                </div>
              </div>

              {/* Film Title Info Box */}
              <div className="p-6 bg-[#0E0E10]">
                <div className="text-[10px] tracking-[0.25em] uppercase text-[#D6B574] font-medium mb-1">
                  {film.location}
                </div>
                <h3 className="font-serif text-xl sm:text-2xl text-white font-light tracking-wide group-hover:text-[#D6B574] transition-colors">
                  {film.title}
                </h3>
                <p className="text-xs text-white/60 font-sans mt-2 line-clamp-2 font-light">
                  {film.description}
                </p>
                
                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-white/50 group-hover:text-[#D6B574] transition-colors">
                  <span>WATCH FILM</span>
                  <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Video Modal */}
      <FilmModal
        film={activeFilmModal}
        onClose={() => setActiveFilmModal(null)}
        onBookSimilar={onSelectFilmForBooking}
      />
    </section>
  );
};
