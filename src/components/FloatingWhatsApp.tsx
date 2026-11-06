import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { BRAND_CONFIG } from '../data/brandConfig';

export const FloatingWhatsApp: React.FC = () => {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 select-none">
      {/* Floating Tooltip Bubble */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center space-x-2 px-3.5 py-2 rounded-full bg-[#141416]/95 border border-[#D6B574]/40 shadow-2xl backdrop-blur-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span className="text-[11px] font-sans tracking-wide text-white/90">
            Chat with Ayush · <span className="text-[#D6B574] font-medium">Quick Reply</span>
          </span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="p-0.5 text-white/40 hover:text-white ml-1"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )}

      {/* Floating WhatsApp Action Button */}
      <a
        href={BRAND_CONFIG.whatsappDirectLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Ayush on WhatsApp"
        className="relative group w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] flex items-center justify-center text-white shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform duration-300 transform hover:scale-110 active:scale-95 focus:outline-none"
      >
        {/* Soft gold/green pulsing aura */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-current relative z-10" />
      </a>
    </div>
  );
};
