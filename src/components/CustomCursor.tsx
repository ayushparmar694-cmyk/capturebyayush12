import React, { useEffect, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine hover (desktop vs touch)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (target) {
        const interactive = target.closest('button, a, input, select, textarea, [role="button"], .interactive-hover');
        setIsPointer(!!interactive);
        const cardHover = target.closest('.film-card, .service-card');
        setIsHovered(!!cardHover);
      }
    };

    const onMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  // Smooth trailing spring effect
  useEffect(() => {
    let animationFrameId: number;
    const lerp = (start: number, end: number, factor: number) => start + (end - start) * factor;

    const updateTrailing = () => {
      setTrailingPos((prev) => ({
        x: lerp(prev.x, position.x, 0.18),
        y: lerp(prev.y, position.y, 0.18),
      }));
      animationFrameId = requestAnimationFrame(updateTrailing);
    };

    animationFrameId = requestAnimationFrame(updateTrailing);
    return () => cancelAnimationFrame(animationFrameId);
  }, [position]);

  if (!isVisible) return null;

  return (
    <>
      {/* Central Gold Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 transition-opacity duration-300"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        <div
          className={`w-2 h-2 rounded-full bg-[#D6B574] shadow-[0_0_10px_#D6B574] transition-transform duration-150 ${
            isPointer ? 'scale-150 bg-[#ECCB8E]' : 'scale-100'
          }`}
        />
      </div>

      {/* Trailing Outer Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-all ease-out"
        style={{
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0)`,
        }}
      >
        <div
          className={`rounded-full border border-[#D6B574]/40 transition-all duration-300 flex items-center justify-center ${
            isHovered
              ? 'w-16 h-16 bg-[#D6B574]/10 border-[#D6B574] backdrop-blur-[1px]'
              : isPointer
              ? 'w-10 h-10 border-[#D6B574]/80 bg-[#D6B574]/5'
              : 'w-7 h-7 border-[#D6B574]/30'
          }`}
        >
          {isHovered && (
            <span className="text-[9px] font-sans tracking-[0.2em] text-[#D6B574] uppercase font-semibold">
              PLAY
            </span>
          )}
        </div>
      </div>
    </>
  );
};
