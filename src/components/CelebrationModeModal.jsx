import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, Heart, PartyPopper } from 'lucide-react';
import { fireAtCoordinate, fireGrandCelebration } from '../utils/confetti';
import { playCelebrationSound, playSparkleSound } from '../utils/soundEffects';

export default function CelebrationModeModal({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      fireGrandCelebration();
      playCelebrationSound();

      // Gentle recurring fireworks every 3s
      const interval = setInterval(() => {
        fireAtCoordinate(0.2 + Math.random() * 0.6, 0.2 + Math.random() * 0.4);
      }, 2500);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleScreenClick = (e) => {
    // Interactive fireworks at exact click position
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    fireAtCoordinate(x, y);
    playSparkleSound();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={handleScreenClick}
        className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-[#2B1B2D]/95 via-[#4A2840]/95 to-[#1E1122]/98 backdrop-blur-md flex flex-col items-center justify-center p-6 select-none cursor-crosshair text-white text-center"
      >
        {/* Close / Exit Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="absolute top-6 right-6 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-all z-50 flex items-center gap-2 cursor-pointer shadow-lg"
          title="Exit celebration mode"
        >
          <span className="text-xs font-medium">Exit Mode</span>
          <X className="w-5 h-5" />
        </button>

        {/* Tip for interaction */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-champagne-200">
          ✨ Tap or click anywhere on the screen to launch fireworks! ✨
        </div>

        {/* Floating Butterflies & Sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ y: [-20, 20, -20], x: [-15, 15, -15] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/4 left-10 text-4xl"
          >
            🦋
          </motion.div>
          <motion.div
            animate={{ y: [20, -20, 20], x: [15, -15, 15] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-1/4 right-12 text-4xl"
          >
            🦋
          </motion.div>
          <div className="absolute top-1/3 right-1/4 text-3xl animate-bounce">🎀</div>
          <div className="absolute bottom-1/3 left-1/4 text-3xl animate-bounce" style={{ animationDelay: '0.8s' }}>🌸</div>
        </div>

        {/* Central Celebration Content */}
        <motion.div
          initial={{ scale: 0.8, y: 30 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative z-10 max-w-2xl px-4 pointer-events-none"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blush-500/30 border border-blush-300/40 text-champagne-300 font-medium text-sm mb-6 backdrop-blur-sm">
            <PartyPopper className="w-5 h-5 text-champagne-400 animate-spin-slow" />
            <span>Grand Birthday Universe Celebration</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-champagne-200 via-blush-200 to-rose-300 drop-shadow-[0_0_35px_rgba(252,169,186,0.6)]">
            HAPPY BIRTHDAY, AMU! 🎂✨
          </h1>

          <p className="text-lg sm:text-2xl text-cream-100 font-light max-w-xl mx-auto leading-relaxed mb-8">
            May this year be your most magical, radiant, and joyous chapter yet! 🌷
          </p>

          <div className="flex justify-center items-center gap-4 text-4xl animate-pulse">
            <span>💖</span>
            <span>✨</span>
            <span>🎂</span>
            <span>✨</span>
            <span>💖</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
