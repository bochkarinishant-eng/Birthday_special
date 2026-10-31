import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Star } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playSparkleSound } from '../utils/soundEffects';

export default function HeroSection({ onStartCelebrationMode, onFindCharm, foundCharms = [] }) {
  const { hero } = birthdayConfig;
  const [imgSrc, setImgSrc] = useState(hero.featuredPhoto.src);
  const charmId = "charm-1";
  const isCharmFound = foundCharms.includes(charmId);

  const scrollToSection = (id) => {
    playSparkleSound();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Secret Charm 1: Star of Radiance */}
      <div className="absolute top-12 right-8 sm:right-24 z-20">
        <button
          onClick={(e) => onFindCharm && onFindCharm(charmId, "Star of Radiance", e)}
          className={`p-2 rounded-full transition-all duration-300 ${
            isCharmFound
              ? 'opacity-40 text-champagne-400 cursor-default'
              : 'text-champagne-500 hover:scale-125 hover:text-blush-500 animate-bounce cursor-pointer'
          }`}
          title={isCharmFound ? "Star of Radiance discovered! ✨" : "A glowing secret star... click it!"}
        >
          <Star className={`w-6 h-6 ${!isCharmFound ? 'fill-champagne-300 animate-spin-slow' : ''}`} />
        </button>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Floating badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-blush-200/80 shadow-sm text-blush-500 font-medium text-sm mb-6 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 text-champagne-500" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Grand Headline */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#4A3B43] mb-4"
        >
          <span className="shimmer-text">{hero.heading}</span>
        </motion.h1>

        {/* Poetic Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base sm:text-xl text-[#6E5B65] max-w-2xl mx-auto font-light leading-relaxed mb-8"
        >
          {hero.subheading}
        </motion.p>

        {/* Centrepiece Portrait of Amu */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 mb-10"
        >
          {/* Glowing Rose Gold / Champagne Rings */}
          <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-blush-300 via-champagne-300 to-lavender-300 opacity-70 blur-md animate-pulse-glow" />
          <div className="absolute -inset-1 rounded-full border-2 border-dashed border-champagne-300/80 animate-spin-slow" />

          {/* Photo Frame Container */}
          <div className="relative w-full h-full rounded-full overflow-hidden p-2 bg-white/90 shadow-2xl backdrop-blur-sm">
            <img
              src={imgSrc}
              alt={hero.featuredPhoto.alt}
              onError={() => {
                if (imgSrc !== hero.featuredPhoto.fallback) {
                  setImgSrc(hero.featuredPhoto.fallback);
                }
              }}
              className="w-full h-full object-cover rounded-full transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Floating decorative tags & ribbons around frame */}
          <motion.div
            animate={{ y: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-white/95 border border-blush-200 shadow-md text-xs sm:text-sm font-medium text-blush-600 flex items-center gap-1.5 whitespace-nowrap"
          >
            <span>👑</span>
            <span>{hero.featuredPhoto.caption}</span>
          </motion.div>

          <div className="absolute -top-2 -right-2 text-2xl animate-bounce">🎀</div>
          <div className="absolute bottom-6 -left-3 text-2xl">🌸</div>
        </motion.div>

        {/* Action Button - Step-by-step guided journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex items-center justify-center"
        >
          <button
            onClick={() => scrollToSection('gallery')}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blush-400 via-rose-400 to-rosegold-400 text-white font-medium text-base shadow-[0_8px_25px_rgba(244,143,177,0.4)] hover:shadow-[0_12px_32px_rgba(244,143,177,0.6)] transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center gap-2.5"
          >
            <span>{hero.exploreBtn}</span>
            <Sparkles className="w-4 h-4 text-champagne-200" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
