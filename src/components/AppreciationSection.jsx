import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Heart, Crown, Flower2, Coffee, SmilePlus, Compass } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playPopSound } from '../utils/soundEffects';

const ICON_MAP = {
  Sparkles,
  Heart,
  Crown,
  Flower2,
  Coffee,
  SmilePlus,
  Compass,
};

export default function AppreciationSection({ onFindCharm, foundCharms = [] }) {
  const { appreciation } = birthdayConfig;
  const [activeCard, setActiveCard] = useState(null);
  const charmId = "charm-4";
  const isCharmFound = foundCharms.includes(charmId);

  return (
    <section id="appreciation" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        {/* Secret Charm 4: Flower of Grace */}
        <div className="absolute -top-4 left-4 sm:left-12 z-20">
          <button
            onClick={(e) => onFindCharm && onFindCharm(charmId, "Flower of Grace", e)}
            className={`p-1.5 rounded-full transition-all duration-300 ${
              isCharmFound
                ? 'opacity-40 text-rose-300 cursor-default'
                : 'hover:scale-125 text-2xl animate-pulse cursor-pointer'
            }`}
            title={isCharmFound ? "Flower of Grace discovered! 🌸" : "A delicate blooming flower..."}
          >
            🌸
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-lavender-100/90 text-lavender-700 text-xs sm:text-sm font-medium mb-3">
          <Sparkles className="w-4 h-4 text-champagne-500" />
          <span>A Scrapbook of You</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {appreciation.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {appreciation.subheading}
        </p>
      </div>

      {/* Scrapbook Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {appreciation.cards.map((card, idx) => {
          const IconComponent = ICON_MAP[card.icon] || Sparkles;
          const isSelected = activeCard === card.id;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => {
                playPopSound();
                setActiveCard(isSelected ? null : card.id);
              }}
              className="glass-panel glass-card-hover rounded-3xl p-6 sm:p-7 relative cursor-pointer border border-white/80 group overflow-hidden"
            >
              {/* Corner Badge */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-gradient-to-tr from-blush-100 to-cream-100 border border-blush-200/60 shadow-sm text-blush-500 group-hover:scale-110 transition-transform">
                  <IconComponent className="w-5 h-5" />
                </div>

                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white/90 border border-blush-100 text-blush-600 shadow-sm">
                  {card.badge}
                </span>
              </div>

              {/* Tag / category */}
              <span className="block text-xs font-semibold uppercase tracking-wider text-rosegold-400 mb-1">
                {card.tag}
              </span>

              {/* Title */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3B43] mb-3">
                {card.title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#6E5B65] leading-relaxed">
                {card.description}
              </p>

              {/* Subtle bottom accent line */}
              <div className="mt-5 pt-3 border-t border-blush-100/50 flex items-center justify-between text-xs text-[#9C8592]">
                <span className="font-script text-base text-rosegold-500">Uniquely Amu</span>
                <span className="text-blush-400 opacity-80 group-hover:opacity-100 transition-opacity">
                  {isSelected ? "✨ Click to collapse" : "💕 Click to celebrate"}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
