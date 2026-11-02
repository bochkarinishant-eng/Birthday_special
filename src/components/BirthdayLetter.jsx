import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Feather, Sparkles } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound } from '../utils/soundEffects';

export default function BirthdayLetter() {
  const { letter } = birthdayConfig;
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenLetter = () => {
    if (isOpen) return;
    setIsOpen(true);
    playSparkleSound();
  };

  return (
    <section id="letter" className="relative py-24 px-4 sm:px-6 max-w-4xl mx-auto">
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
          {/* Envelope lines */}
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
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative paper-texture rounded-3xl p-6 sm:p-12 md:p-16 border border-champagne-300 shadow-2xl overflow-hidden text-left"
        >
          {/* Delicate corner ribbons / stamps */}
          <div className="absolute top-6 right-6 text-2xl">🎀</div>
          <div className="absolute top-6 left-6 text-xs sm:text-sm font-semibold text-rosegold-400 uppercase tracking-widest font-mono">
            {letter.date}
          </div>

          {/* Salutation */}
          <div className="mt-8 mb-6">
            <h3 className="font-script text-3xl sm:text-4xl text-blush-600 font-bold">
              {letter.salutation}
            </h3>
          </div>

          {/* Letter Content Sections */}
          <div className="space-y-8 text-[#4A3B43] font-serif">
            {letter.sections.map((sec) => (
              <div key={sec.id} className="space-y-4">
                {/* Section Heading */}
                <h4 className="font-serif text-xl sm:text-2xl font-bold text-[#8B2643] border-b border-blush-100 pb-2.5 pt-2 flex items-center gap-2">
                  <span>{sec.heading}</span>
                </h4>

                {/* Main Paragraphs */}
                {sec.paragraphs && sec.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed text-[#4A3B43]/90">
                    {p}
                  </p>
                ))}

                {/* Special Quote Highlight (Section 2) */}
                {sec.specialQuote && (
                  <div className="my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-blush-50 via-cream-50 to-pink-50/70 border-l-4 border-blush-400 shadow-sm">
                    <p className="text-base sm:text-lg font-semibold text-[#8B2643] italic leading-relaxed">
                      "{sec.specialQuote}"
                    </p>
                  </div>
                )}

                {/* Post Quote Paragraphs */}
                {sec.postQuoteParagraphs && sec.postQuoteParagraphs.map((p, idx) => (
                  <p key={idx} className="text-base sm:text-lg leading-relaxed text-[#4A3B43]/90 font-medium">
                    {p}
                  </p>
                ))}

                {/* Birthday Wish Highlight (Section 3) */}
                {sec.birthdayWish && (
                  <div className="my-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blush-100/90 via-rose-100/70 to-champagne-100/70 border border-blush-200 text-center shadow-sm">
                    <p className="font-serif text-lg sm:text-xl font-bold text-[#8B2643] tracking-wide">
                      {sec.birthdayWish}
                    </p>
                  </div>
                )}

                {/* Standout Hero Promise - BIGGEST TEXT IN THE ENTIRE LETTER (Section 4) */}
                {sec.heroPromise && (
                  <div className="my-10 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-rose-50 via-blush-100/80 to-champagne-100/70 border-2 border-blush-300 shadow-[0_12px_36px_rgba(244,143,177,0.3)] text-center relative overflow-hidden">
                    <div className="text-2xl sm:text-3xl mb-3 animate-pulse">✨ 💖 ✨</div>
                    <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-black text-[#8B2643] leading-tight sm:leading-tight tracking-tight uppercase drop-shadow-sm">
                      {sec.heroPromise}
                    </h2>
                    <div className="w-28 h-1 bg-gradient-to-r from-transparent via-blush-400 to-transparent mx-auto mt-5" />
                  </div>
                )}

                {/* Final Promise Paragraph */}
                {sec.finalParagraph && (
                  <div className="p-5 sm:p-6 rounded-2xl bg-white/90 border border-blush-200/90 shadow-sm text-center max-w-2xl mx-auto my-6">
                    <p className="font-serif text-base sm:text-lg font-bold text-[#8B2643] leading-relaxed">
                      {sec.finalParagraph}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Handwritten Sign-off */}
          <div className="mt-12 pt-8 border-t border-blush-200/80 flex flex-col items-end text-right">
            <span className="font-script text-2xl text-[#6E5B65]">
              {letter.signOff}
            </span>
            <span className="font-script text-3xl text-blush-600 font-bold mt-1">
              {letter.author}
            </span>
          </div>
        </motion.div>
      )}
    </section>
  );
}
