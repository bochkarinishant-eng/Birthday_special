import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Heart, Wind, RotateCcw, Key } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playCandleBlowSound, playPopSound } from '../utils/soundEffects';
import { fireGrandCelebration } from '../utils/confetti';

export default function BirthdayCake({ onFindCharm, foundCharms = [] }) {
  const { cake } = birthdayConfig;
  const [candlesLit, setCandlesLit] = useState([true, true, true]);
  const [hasMadeWish, setHasMadeWish] = useState(false);
  const charmId = "charm-5";
  const isCharmFound = foundCharms.includes(charmId);

  const allCandlesOut = candlesLit.every((lit) => !lit);

  const handleBlowCandle = (idx) => {
    if (!candlesLit[idx]) return;
    const updated = [...candlesLit];
    updated[idx] = false;
    setCandlesLit(updated);
    playPopSound();

    if (updated.every((lit) => !lit)) {
      triggerWishFulfilled();
    }
  };

  const handleBlowAll = () => {
    if (allCandlesOut) return;
    setCandlesLit([false, false, false]);
    triggerWishFulfilled();
  };

  const triggerWishFulfilled = () => {
    setHasMadeWish(true);
    playCandleBlowSound();
    fireGrandCelebration();
  };

  const handleRelight = () => {
    setCandlesLit([true, true, true]);
    setHasMadeWish(false);
    playPopSound();
  };

  return (
    <section id="cake" className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Secret Charm 5: Key to the Universe */}
      <div className="absolute top-12 left-6 sm:left-16 z-20">
        <button
          onClick={(e) => onFindCharm && onFindCharm(charmId, "Key to the Universe", e)}
          className={`p-1.5 rounded-full transition-all duration-300 ${
            isCharmFound
              ? 'opacity-40 text-champagne-400 cursor-default'
              : 'hover:scale-125 text-2xl animate-bounce cursor-pointer'
          }`}
          title={isCharmFound ? "Key to the Universe discovered! 🗝️" : "A glowing golden key..."}
        >
          🗝️
        </button>
      </div>

      {/* Header */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100/90 text-champagne-700 text-xs sm:text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4 text-champagne-500" />
          <span>Interactive Wish Time</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {cake.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {cake.subheading}
        </p>
      </div>

      {/* Visual Cake & Candles Container */}
      <div className="relative mx-auto w-72 sm:w-88 flex flex-col items-center">
        {/* 3 Candles */}
        <div className="flex justify-center gap-8 sm:gap-10 mb-[-8px] z-20">
          {candlesLit.map((isLit, idx) => (
            <div
              key={idx}
              onClick={() => handleBlowCandle(idx)}
              className="flex flex-col items-center cursor-pointer group"
              title="Click to blow out candle!"
            >
              {/* Flame */}
              <div className="h-8 flex items-end justify-center">
                <AnimatePresence>
                  {isLit ? (
                    <motion.div
                      exit={{ opacity: 0, scale: 0.2, y: -10 }}
                      className="w-4 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white candle-flame shadow-[0_0_15px_rgba(255,200,50,0.9)]"
                    />
                  ) : (
                    /* Smoke drift */
                    <motion.div
                      initial={{ opacity: 0.8, y: 0, scale: 0.8 }}
                      animate={{ opacity: 0, y: -25, scale: 1.5 }}
                      transition={{ duration: 1.2 }}
                      className="text-xs text-gray-400 font-mono"
                    >
                      💨
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Candle Body */}
              <div className="w-4 h-14 rounded-t-sm bg-gradient-to-b from-champagne-100 via-blush-200 to-blush-300 border-x border-champagne-300 shadow-sm relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent" />
              </div>
            </div>
          ))}
        </div>

        {/* Cake Tier 1 (Top) */}
        <div className="relative w-44 sm:w-52 h-20 rounded-2xl bg-gradient-to-b from-cream-50 via-blush-100 to-blush-200 border border-blush-200 shadow-lg z-10 flex items-center justify-around px-4">
          <span className="text-xl">🍓</span>
          <span className="text-lg">🌸</span>
          <span className="text-xl">🍓</span>
          <span className="text-lg">🌸</span>
          <span className="text-xl">🍓</span>
        </div>

        {/* Cake Tier 2 (Bottom) */}
        <div className="relative w-64 sm:w-76 h-28 -mt-2 rounded-2xl bg-gradient-to-b from-blush-100 via-cream-100 to-champagne-100 border border-champagne-200 shadow-2xl flex items-center justify-around px-6 overflow-hidden">
          {/* Decorative frosting drips */}
          <div className="absolute top-0 inset-x-0 h-4 bg-white/70 rounded-b-xl" />
          <span className="text-2xl mt-3">🎀</span>
          <span className="text-2xl mt-3">🌷</span>
          <span className="text-2xl mt-3">🎀</span>
          <span className="text-2xl mt-3">🌷</span>
          <span className="text-2xl mt-3">🎀</span>
        </div>

        {/* Cake Stand Plate */}
        <div className="w-76 sm:w-92 h-5 bg-gradient-to-r from-champagne-200 via-white to-champagne-200 rounded-full shadow-xl -mt-1 border border-champagne-300" />
      </div>

      {/* Interactive Controls & Wish Reveal */}
      <div className="mt-10">
        {!allCandlesOut ? (
          <div className="space-y-4">
            <button
              onClick={handleBlowAll}
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            >
              <Wind className="w-5 h-5" />
              <span>Blow Out All Candles 💨</span>
            </button>
            <p className="text-xs text-[#9C8592] font-light">
              {cake.candleInstructions}
            </p>
          </div>
        ) : (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              className="max-w-xl mx-auto p-6 sm:p-8 rounded-3xl bg-white/95 border border-blush-200 shadow-xl space-y-4"
            >
              <span className="text-3xl inline-block animate-bounce">🎉</span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3B43]">
                Wish Captured by the Universe! ✨
              </h3>
              <p className="text-sm sm:text-base text-rosegold-600 font-medium leading-relaxed">
                {cake.wishSuccessMessage}
              </p>
              <button
                onClick={handleRelight}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-champagne-100 hover:bg-champagne-200 text-champagne-800 text-xs sm:text-sm font-medium transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{cake.makeAnotherWishText}</span>
              </button>
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
}
