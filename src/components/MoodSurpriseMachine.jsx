import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, HeartHandshake, Smile, RefreshCw } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playPopSound, playSparkleSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function MoodSurpriseMachine() {
  const { moodSurprise } = birthdayConfig;
  const [selectedMoodId, setSelectedMoodId] = useState(moodSurprise.moods[0].id);

  const activeMood = moodSurprise.moods.find((m) => m.id === selectedMoodId) || moodSurprise.moods[0];

  const handleSelectMood = (id) => {
    setSelectedMoodId(id);
    playPopSound();
    fireHeartConfetti();
  };

  return (
    <section className="relative py-16 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-white/90 shadow-xl">
        {/* Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-4">
          <Smile className="w-4 h-4 text-blush-500" />
          <span>Interactive Mood Dispenser</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {moodSurprise.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65] max-w-lg mx-auto mb-8 font-light">
          {moodSurprise.subheading}
        </p>

        {/* 4 Mood Selector Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-8">
          {moodSurprise.moods.map((mood) => {
            const isSelected = mood.id === selectedMoodId;
            return (
              <button
                key={mood.id}
                onClick={() => handleSelectMood(mood.id)}
                className={`px-5 py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 transform active:scale-95 ${
                  isSelected
                    ? 'bg-gradient-to-r from-blush-400 to-rose-400 text-white shadow-md scale-105'
                    : 'bg-white/80 border border-blush-200/80 text-[#6E5B65] hover:bg-blush-50 hover:text-blush-600'
                }`}
              >
                {mood.label}
              </button>
            );
          })}
        </div>

        {/* Mood Result Card */}
        <div className="max-w-xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeMood.id}
              initial={{ opacity: 0, y: 15, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-3xl bg-white/90 border border-blush-200 shadow-md text-center"
            >
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A3B43] mb-3">
                {activeMood.title}
              </h3>

              <p className="text-sm sm:text-base text-[#6E5B65] leading-relaxed mb-4">
                {activeMood.message}
              </p>

              <div className="inline-block px-4 py-2 rounded-2xl bg-cream-100 border border-champagne-200 text-xs sm:text-sm font-medium text-rosegold-600">
                {activeMood.surpriseGifText}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
