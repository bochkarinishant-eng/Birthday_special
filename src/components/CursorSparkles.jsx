import React, { useEffect, useState, useRef } from 'react';

const SPARKLE_ICONS = ['✨', '🌸', '💖', '⭐', '🎀', '💫'];

export default function CursorSparkles() {
  const [sparkles, setSparkles] = useState([]);
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);
  const nextId = useRef(0);
  const lastTime = useRef(0);

  useEffect(() => {
    // Only enable trailing sparkles on devices with fine pointer (mouse)
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) return;

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const now = Date.now();
      // Throttle sparkle creation to ~45ms for buttery smooth performance
      if (now - lastTime.current > 45) {
        lastTime.current = now;
        const icon = SPARKLE_ICONS[Math.floor(Math.random() * SPARKLE_ICONS.length)];
        const newSparkle = {
          id: nextId.current++,
          x: e.clientX + (Math.random() * 16 - 8),
          y: e.clientY + (Math.random() * 16 - 8),
          icon,
          size: Math.random() * 8 + 12,
          opacity: 1,
        };

        setSparkles((prev) => [...prev.slice(-14), newSparkle]);
      }
    };

    const handleTouchStart = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const icon = SPARKLE_ICONS[Math.floor(Math.random() * SPARKLE_ICONS.length)];
        const burst = Array.from({ length: 4 }).map((_, i) => ({
          id: nextId.current++,
          x: touch.clientX + (Math.random() * 40 - 20),
          y: touch.clientY + (Math.random() * 40 - 20),
          icon,
          size: Math.random() * 10 + 14,
          opacity: 1,
        }));
        setSparkles((prev) => [...prev.slice(-10), ...burst]);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchstart', handleTouchStart);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Animation timer to fade out sparkles
    const interval = setInterval(() => {
      setSparkles((prev) =>
        prev
          .map((s) => ({ ...s, opacity: s.opacity - 0.08, y: s.y + 0.8 }))
          .filter((s) => s.opacity > 0)
      );
    }, 32);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchstart', handleTouchStart);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearInterval(interval);
    };
  }, [isVisible]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden select-none">
      {/* Glow dot following mouse */}
      {isVisible && (
        <div
          className="fixed w-7 h-7 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blush-300/60 bg-blush-200/20 backdrop-blur-[1px] shadow-[0_0_15px_rgba(252,169,186,0.6)] transition-transform duration-75 ease-out hidden sm:block"
          style={{
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
          }}
        />
      )}

      {/* Trailing sparkles */}
      {sparkles.map((sparkle) => (
        <span
          key={sparkle.id}
          className="fixed -translate-x-1/2 -translate-y-1/2 transition-all duration-75"
          style={{
            left: `${sparkle.x}px`,
            top: `${sparkle.y}px`,
            fontSize: `${sparkle.size}px`,
            opacity: sparkle.opacity,
            transform: `translate(-50%, -50%) scale(${sparkle.opacity})`,
          }}
        >
          {sparkle.icon}
        </span>
      ))}
    </div>
  );
}
