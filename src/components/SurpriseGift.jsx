import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, Sparkles, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound, playPopSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function SurpriseGift() {
  const { secretGift } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenGift = () => {
    if (isOpen) return;
    setIsOpen(true);
    playPopSound();
    setTimeout(() => {
      playSparkleSound();
      fireHeartConfetti();
    }, 300);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto text-center">
      {/* Header */}
      <div className="max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-3">
          <Gift className="w-4 h-4 text-blush-500" />
          <span>A Secret Delivery</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {secretGift.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {secretGift.subheading}
        </p>
      </div>

      {/* Interactive 3D Gift Box Visual */}
      <div className="relative mx-auto w-64 sm:w-72 h-64 flex items-center justify-center cursor-pointer select-none">
        <motion.div
          onClick={handleOpenGift}
          whileHover={{ scale: isOpen ? 1 : 1.05 }}
          whileTap={{ scale: isOpen ? 1 : 0.95 }}
          className="relative w-48 h-48 sm:w-56 sm:h-56 flex flex-col items-center justify-center"
        >
          {/* Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blush-300 via-rose-300 to-champagne-300 rounded-3xl blur-xl opacity-60 animate-pulse-glow" />

          {/* Gift Lid */}
          <motion.div
            animate={
              isOpen
                ? { y: -80, rotate: -18, opacity: 0 }
                : { y: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute top-2 w-52 sm:w-60 h-14 rounded-2xl bg-gradient-to-r from-rose-400 via-blush-400 to-rosegold-400 border-2 border-champagne-200 shadow-xl z-20 flex items-center justify-center"
          >
            {/* Top Ribbon Bow */}
            <div className="absolute -top-6 text-3xl animate-bounce">🎀</div>
            {/* Ribbon strip */}
            <div className="w-8 h-full bg-champagne-200/90 shadow-sm" />
          </motion.div>

          {/* Gift Box Base */}
          <div className="w-44 sm:w-52 h-40 mt-8 rounded-2xl bg-gradient-to-b from-blush-300 via-rose-300 to-rosegold-400 border-2 border-champagne-200 shadow-2xl relative overflow-hidden flex justify-center">
            {/* Vertical ribbon */}
            <div className="w-8 h-full bg-champagne-200/90 shadow-inner" />
            {/* Horizontal ribbon */}
            <div className="absolute top-1/2 -translate-y-1/2 w-full h-8 bg-champagne-200/90 shadow-inner" />
          </div>
        </motion.div>
      </div>

      {/* Tap instruction if not yet opened */}
      {!isOpen && (
        <p className="text-xs sm:text-sm text-[#8F7C86] mt-4 font-medium animate-pulse">
          {secretGift.tapToOpen}
        </p>
      )}

      {/* Revealed Hidden Message */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 max-w-xl mx-auto p-8 sm:p-10 rounded-3xl bg-white/95 border border-champagne-300 shadow-2xl relative overflow-hidden"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blush-100 text-blush-600 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5 text-champagne-500" />
              <span>{secretGift.revealedTitle}</span>
            </div>

            <p className="font-serif text-2xl sm:text-3xl font-semibold text-[#4A3B43] leading-relaxed my-4">
              "{secretGift.message}"
            </p>

            {/* Real Gift Delivery Announcement */}
            {secretGift.giftDeliveryNote && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blush-50 via-cream-100 to-rose-50 border border-blush-200 text-center shadow-sm"
              >
                <div className="flex items-center justify-center gap-2 text-blush-600 font-serif font-bold text-base sm:text-lg mb-1">
                  <span>🎀</span>
                  <span>{secretGift.giftDeliveryTitle}</span>
                  <span>✨</span>
                </div>
                <p className="text-sm sm:text-base text-[#6E5B65] font-medium leading-relaxed">
                  {secretGift.giftDeliveryNote}
                </p>
              </motion.div>
            )}

            <span className="font-script text-2xl text-rosegold-500 font-bold block mt-4">
              {secretGift.signature}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
