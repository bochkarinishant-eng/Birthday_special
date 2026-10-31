import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Wand2, Stars } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function WishGenerator() {
  const { wishGenerator } = birthdayConfig;
  const [currentWish, setCurrentWish] = useState(wishGenerator.wishes[0]);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleGenerateWish = () => {
    if (isSpinning) return;
    setIsSpinning(true);
    playSparkleSound();
    fireHeartConfetti();

    // Select random wish
    let rand = Math.floor(Math.random() * wishGenerator.wishes.length);
    while (wishGenerator.wishes[rand] === currentWish && wishGenerator.wishes.length > 1) {
      rand = Math.floor(Math.random() * wishGenerator.wishes.length);
    }

    setTimeout(() => {
      setCurrentWish(wishGenerator.wishes[rand]);
      setIsSpinning(false);
    }, 400);
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/90 shadow-xl">
        {/* Ambient star dust */}
        <div className="absolute top-0 right-10 text-champagne-300 text-3xl animate-sparkle">✨</div>
        <div className="absolute bottom-8 left-10 text-blush-300 text-2xl animate-sparkle" style={{ animationDelay: '1.2s' }}>🌟</div>

        {/* Section Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100/90 text-champagne-800 text-xs sm:text-sm font-medium mb-4">
          <Stars className="w-4 h-4 text-champagne-600 animate-spin-slow" />
          <span>Cosmic Fortune</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {wishGenerator.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65] max-w-lg mx-auto mb-8 font-light">
          {wishGenerator.subheading}
        </p>

        {/* Generated Wish Box */}
        <div className="min-h-[140px] flex items-center justify-center max-w-2xl mx-auto mb-8 px-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentWish}
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-cream-100/90 via-blush-50/90 to-lavender-50/90 border border-blush-200/80 shadow-md w-full"
            >
              <span className="block font-serif text-2xl sm:text-3xl font-semibold text-[#4A3B43] leading-snug">
                "{currentWish}"
              </span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Magic Button */}
        <button
          onClick={handleGenerateWish}
          disabled={isSpinning}
          className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-champagne-400 via-rose-400 to-blush-400 text-white font-medium text-base shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-75"
        >
          <Wand2 className={`w-5 h-5 text-champagne-200 ${isSpinning ? 'animate-spin' : ''}`} />
          <span>{wishGenerator.buttonText}</span>
        </button>
      </div>
    </section>
  );
}
