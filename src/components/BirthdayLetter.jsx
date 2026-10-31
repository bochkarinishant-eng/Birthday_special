import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Heart, Sparkles, Feather } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound, playPopSound } from '../utils/soundEffects';

export default function BirthdayLetter() {
  const { letter } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);
  const [displayedParagraphs, setDisplayedParagraphs] = useState(0);

  const handleOpenLetter = () => {
    if (isOpen) return;
    setIsOpen(true);
    playSparkleSound();
  };

  // Progressive reveal effect for letter paragraphs
  useEffect(() => {
    if (!isOpen) return;
    if (displayedParagraphs < letter.paragraphs.length) {
      const timer = setTimeout(() => {
        setDisplayedParagraphs((prev) => prev + 1);
      }, 280);
      return () => clearTimeout(timer);
    }
  }, [isOpen, displayedParagraphs, letter.paragraphs.length]);

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-3">
          <Feather className="w-4 h-4 text-rosegold-500" />
          <span>From The Heart</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {letter.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {letter.subheading}
        </p>
      </div>

      {/* Wax Seal Envelope Container */}
      {!isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onClick={handleOpenLetter}
          className="relative max-w-md mx-auto aspect-[4/3] rounded-3xl bg-gradient-to-br from-cream-100 via-white to-blush-50 p-6 sm:p-8 border border-champagne-300/80 shadow-2xl cursor-pointer group flex flex-col items-center justify-center text-center overflow-hidden"
        >
          {/* Subtle envelope lines */}
          <div className="absolute inset-0 border-8 border-white/60 pointer-events-none rounded-3xl" />
          <div className="absolute top-0 left-0 right-0 h-1/2 border-b border-champagne-200/60" />

          {/* Glowing Wax Seal in Center */}
          <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 via-blush-500 to-rosegold-500 flex items-center justify-center shadow-[0_0_25px_rgba(246,118,147,0.7)] group-hover:scale-110 group-hover:shadow-[0_0_35px_rgba(246,118,147,0.9)] transition-all duration-300 border-2 border-champagne-200">
            <Heart className="w-9 h-9 text-white fill-white animate-pulse" />
          </div>

          <span className="relative z-10 font-serif text-lg font-bold text-[#4A3B43] mt-5">
            {letter.waxSealText}
          </span>

          <span className="relative z-10 text-xs text-[#8F7C86] mt-1">
            {letter.openPrompt}
          </span>

          <button className="relative z-10 mt-4 px-6 py-2.5 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-xs sm:text-sm shadow-md group-hover:shadow-lg transition-all">
            {letter.readButton}
          </button>
        </motion.div>
      ) : (
        /* The Unfolded Letter */
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative paper-texture rounded-3xl p-8 sm:p-14 border border-champagne-300 shadow-2xl overflow-hidden"
        >
          {/* Delicate corner ribbons / stamps */}
          <div className="absolute top-6 right-6 text-2xl">🎀</div>
          <div className="absolute top-6 left-6 text-xs sm:text-sm font-semibold text-rosegold-400 uppercase tracking-widest font-mono">
            November 3, 2026
          </div>

          {/* Salutation */}
          <div className="mt-8 mb-6">
            <h3 className="font-script text-3xl sm:text-4xl text-blush-600 font-bold">
              {letter.salutation}
            </h3>
          </div>

          {/* Paragraphs with gentle typewriter fade-in */}
          <div className="space-y-4 text-base sm:text-lg text-[#4A3B43] leading-relaxed font-serif">
            {letter.paragraphs.slice(0, displayedParagraphs).map((para, idx) => {
              const isBoldHeader = para.startsWith('**') && para.endsWith('**');
              const text = isBoldHeader ? para.slice(2, -2) : para;

              return (
                <motion.p
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className={
                    isBoldHeader
                      ? 'font-bold text-xl sm:text-2xl text-blush-600 pt-3 pb-1 tracking-tight'
                      : ''
                  }
                >
                  {text}
                </motion.p>
              );
            })}
          </div>

          {/* Handwritten Sign-off */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: displayedParagraphs >= letter.paragraphs.length ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="mt-12 pt-6 border-t border-blush-100 flex flex-col items-end text-right"
          >
            <span className="font-script text-2xl text-[#6E5B65]">
              {letter.signOff}
            </span>
            <span className="font-script text-3xl text-blush-600 font-bold mt-1">
              {letter.author}
            </span>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
