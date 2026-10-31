import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Shuffle, ChevronLeft, ChevronRight, Bookmark } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playPopSound, playSparkleSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function ReasonsSection({ onFindCharm, foundCharms = [] }) {
  const { reasonsSection } = birthdayConfig;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const total = reasonsSection.reasons.length;
  const charmId = "charm-3";
  const isCharmFound = foundCharms.includes(charmId);

  const triggerMilestone = (idx) => {
    const num = idx + 1;
    if (num % 10 === 0 || num === 50 || num === 100) {
      fireHeartConfetti();
      playSparkleSound();
    } else {
      playPopSound();
    }
  };

  const handleNext = () => {
    setDirection(1);
    const nextIdx = (currentIndex + 1) % total;
    setCurrentIndex(nextIdx);
    triggerMilestone(nextIdx);
  };

  const handlePrev = () => {
    setDirection(-1);
    const prevIdx = (currentIndex - 1 + total) % total;
    setCurrentIndex(prevIdx);
    playPopSound();
  };

  const handleShuffle = () => {
    let rand = Math.floor(Math.random() * total);
    while (rand === currentIndex) {
      rand = Math.floor(Math.random() * total);
    }
    setDirection(1);
    setCurrentIndex(rand);
    triggerMilestone(rand);
  };

  return (
    <section id="reasons" className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-xl mx-auto mb-12 relative">
        {/* Secret Charm 3: Ribbon of Warmth */}
        <div className="absolute -top-4 right-2 sm:right-6 z-20">
          <button
            onClick={(e) => onFindCharm && onFindCharm(charmId, "Ribbon of Warmth", e)}
            className={`p-1.5 rounded-full transition-all duration-300 ${
              isCharmFound
                ? 'opacity-40 text-blush-300 cursor-default'
                : 'hover:scale-125 text-2xl animate-bounce cursor-pointer'
            }`}
            title={isCharmFound ? "Ribbon of Warmth discovered! 🎀" : "A delicate secret ribbon..."}
          >
            🎀
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-3">
          <Heart className="w-4 h-4 fill-blush-400 text-blush-400" />
          <span>A Hundred Love Letters</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {reasonsSection.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {reasonsSection.subheading}
        </p>
      </div>

      {/* Main Interactive Flip / Deck Card */}
      <div className="relative mx-auto max-w-xl min-h-[280px] sm:min-h-[300px] flex items-center justify-center">
        {/* Ambient glow behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-blush-200/50 via-champagne-200/50 to-lavender-200/50 rounded-3xl blur-xl" />

        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction * 50, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -direction * 50, scale: 0.96 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="relative w-full glass-panel rounded-3xl p-8 sm:p-10 border border-white/90 shadow-2xl flex flex-col justify-between"
          >
            {/* Card Header Indicator */}
            <div className="flex items-center justify-between border-b border-blush-100/80 pb-4 mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-rosegold-500 uppercase tracking-widest">
                <Bookmark className="w-3.5 h-3.5" />
                Reason #{currentIndex + 1}
              </span>
              <span className="text-xs font-medium px-3 py-1 rounded-full bg-blush-100/80 text-blush-600">
                {currentIndex + 1} / {total}
              </span>
            </div>

            {/* Reason Text */}
            <div className="py-4 text-center">
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#4A3B43] leading-relaxed">
                "{reasonsSection.reasons[currentIndex]}"
              </p>
            </div>

            {/* Card Footer */}
            <div className="pt-6 border-t border-blush-100/60 flex items-center justify-between text-xs text-[#9C8592]">
              <span className="font-script text-base text-blush-400">Always genuine</span>
              <span className="text-champagne-500 font-medium">✨ Keep discovering</span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Control Buttons */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        <button
          onClick={handlePrev}
          className="p-3.5 rounded-full bg-white/90 border border-blush-200 text-[#6E5B65] hover:text-blush-600 hover:border-blush-300 shadow-sm transition-all hover:scale-105 active:scale-95"
          title="Previous reason"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="px-7 py-3.5 rounded-full bg-gradient-to-r from-blush-400 via-rose-400 to-rosegold-400 text-white font-medium text-sm sm:text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center gap-2"
        >
          <span>{reasonsSection.buttonText}</span>
          <Heart className="w-4 h-4 fill-white" />
        </button>

        <button
          onClick={handleShuffle}
          className="p-3.5 rounded-full bg-champagne-100/90 border border-champagne-200 text-champagne-700 hover:bg-champagne-200 shadow-sm transition-all hover:scale-105 active:scale-95"
          title={reasonsSection.shuffleButtonText}
        >
          <Shuffle className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
