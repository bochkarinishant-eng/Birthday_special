import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound, playCelebrationSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function WelcomeScreen({ onOpenSurprise }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const { welcomeScreen } = birthdayConfig;

  const handleOpen = () => {
    if (isOpen) return;
    setIsOpen(true);
    playSparkleSound();

    // Trigger confetti burst
    setTimeout(() => {
      fireHeartConfetti({ x: 0.5, y: 0.5 });
      playCelebrationSound();
    }, 400);

    // Smooth exit to reveal main website
    setTimeout(() => {
      onOpenSurprise();
    }, 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FAF3F6] to-[#F5EAF4]"
    >
      {/* Dreamy Ambient Clouds & Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[34rem] h-[34rem] rounded-full bg-blush-200/35 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-lavender-200/30 blur-3xl pointer-events-none" />

      {/* Floating Sparkles & Butterflies in Opening Sky */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ y: [-15, 15, -15], x: [-10, 10, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-16 left-12 text-3xl"
        >
          🦋
        </motion.div>
        <motion.div
          animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-16 text-3xl"
        >
          🦋
        </motion.div>
        <div className="absolute top-28 right-24 text-champagne-400 text-xl animate-sparkle">✨</div>
        <div className="absolute bottom-32 left-20 text-blush-400 text-lg animate-sparkle" style={{ animationDelay: '1s' }}>🌸</div>
        <div className="absolute top-1/2 right-12 text-lavender-400 text-xl animate-sparkle" style={{ animationDelay: '1.5s' }}>💫</div>
      </div>

      <div className="relative z-10 w-full max-w-lg px-6 text-center">
        {/* Soft Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/80 border border-blush-200/60 shadow-sm text-blush-600 text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 text-champagne-500 animate-spin-slow" />
            <span>A Secret Surprise Awaits</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-[#4A3B43] tracking-tight mb-3">
            {welcomeScreen.greeting}
          </h1>

          <p className="text-base sm:text-lg text-[#6E5B65] max-w-sm mx-auto mb-8 font-light">
            {welcomeScreen.subtext}
          </p>
        </motion.div>

        {/* Animated Luxury Envelope */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative mx-auto w-72 sm:w-80 h-48 cursor-pointer select-none"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={handleOpen}
        >
          {/* Envelope Glow Halo */}
          <div className="absolute -inset-2 bg-gradient-to-r from-blush-200 via-champagne-200 to-lavender-200 rounded-2xl blur-md opacity-60 transition duration-500 group-hover:opacity-100" />

          {/* Envelope Body */}
          <div className="relative w-full h-full rounded-xl bg-white border border-champagne-200/80 shadow-xl overflow-hidden flex flex-col justify-between p-4">
            {/* Top flap */}
            <motion.div
              animate={isOpen ? { rotateX: 180, y: -40, opacity: 0 } : { rotateX: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute -top-1 left-0 right-0 h-24 origin-top z-20 flex justify-center"
            >
              <div className="w-0 h-0 border-l-[144px] sm:border-l-[160px] border-l-transparent border-r-[144px] sm:border-r-[160px] border-r-transparent border-t-[90px] border-t-cream-100 drop-shadow-md" />
            </motion.div>

            {/* Glowing Wax Seal */}
            <AnimatePresence>
              {!isOpen && (
                <motion.div
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-16 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center"
                >
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-rose-400 via-blush-500 to-rosegold-500 shadow-[0_0_20px_rgba(246,118,147,0.6)] flex items-center justify-center border-2 border-champagne-200">
                    <Heart className="w-7 h-7 text-white fill-white animate-pulse" />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Released Floating Butterflies & Hearts */}
            {isOpen && (
              <div className="absolute inset-0 pointer-events-none z-40">
                <motion.div
                  initial={{ y: 0, opacity: 1, scale: 0.5 }}
                  animate={{ y: -140, opacity: 0, scale: 1.4 }}
                  transition={{ duration: 1.2 }}
                  className="absolute left-1/4 top-1/2 text-2xl"
                >
                  🦋
                </motion.div>
                <motion.div
                  initial={{ y: 0, opacity: 1, scale: 0.5 }}
                  animate={{ y: -160, opacity: 0, scale: 1.4 }}
                  transition={{ duration: 1.4, delay: 0.1 }}
                  className="absolute right-1/4 top-1/2 text-2xl"
                >
                  💖
                </motion.div>
                <motion.div
                  initial={{ y: 0, opacity: 1, scale: 0.5 }}
                  animate={{ y: -130, opacity: 0, scale: 1.3 }}
                  transition={{ duration: 1.1, delay: 0.2 }}
                  className="absolute left-1/2 top-1/2 text-2xl"
                >
                  ✨
                </motion.div>
              </div>
            )}

            {/* Envelope Interior peek */}
            <div className="flex-1 flex items-center justify-center pt-8">
              <span className="font-script text-2xl text-rosegold-500 tracking-wide">
                {welcomeScreen.envelopeLabel}
              </span>
            </div>

            {/* Bottom folds */}
            <div className="border-t border-dashed border-blush-200 pt-2 flex justify-between items-center text-xs text-[#9C8592]">
              <span>Handcrafted with love</span>
              <span>100% Genuine 🎀</span>
            </div>
          </div>
        </motion.div>

        {/* Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-8"
        >
          <button
            onClick={handleOpen}
            disabled={isOpen}
            className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-gradient-to-r from-blush-400 via-rose-400 to-rosegold-400 text-white font-medium text-base shadow-[0_8px_25px_rgba(244,143,177,0.4)] hover:shadow-[0_12px_32px_rgba(244,143,177,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-80"
          >
            <span>{welcomeScreen.buttonText}</span>
            <Sparkles className="w-5 h-5 text-champagne-200 transition-transform group-hover:rotate-45" />
          </button>

          <p className="text-xs text-[#9C8592] mt-3 font-light">
            {welcomeScreen.hintText}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
}
