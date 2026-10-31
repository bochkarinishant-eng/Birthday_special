import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarHeart, PartyPopper } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { fireGrandCelebration } from '../utils/confetti';

export default function LiveCountdown({ onStartCelebrationMode }) {
  const { countdown } = birthdayConfig;
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isBirthdayToday, setIsBirthdayToday] = useState(false);

  useEffect(() => {
    function calculateTime() {
      const target = new Date(countdown.targetDate).getTime();
      const now = new Date().getTime();
      const diff = target - now;

      if (countdown.forceCelebrationMode || diff <= 0) {
        setIsBirthdayToday(true);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setIsBirthdayToday(false);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / 1000 / 60) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [countdown.targetDate, countdown.forceCelebrationMode]);

  return (
    <section className="relative z-10 py-6 px-4 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-6 sm:p-8 text-center relative overflow-hidden"
      >
        {/* Subtle decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-blush-400 to-transparent" />

        {isBirthdayToday ? (
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100 text-blush-600 font-medium text-sm">
              <PartyPopper className="w-4 h-4 text-champagne-500 animate-bounce" />
              <span>Today is the Day!</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-4xl font-bold text-[#4A3B43] shimmer-text">
              {countdown.todayTitle}
            </h3>

            <p className="text-[#6E5B65] max-w-md mx-auto text-sm sm:text-base">
              {countdown.subtextToday}
            </p>

            <button
              onClick={() => {
                fireGrandCelebration();
                if (onStartCelebrationMode) onStartCelebrationMode();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 text-champagne-200" />
              <span>Trigger Fullscreen Celebration 🎉</span>
            </button>
          </div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-champagne-100/80 text-champagne-700 text-xs sm:text-sm font-medium mb-2">
              <CalendarHeart className="w-4 h-4 text-blush-500" />
              <span>{countdown.upcomingTitle}</span>
            </div>

            {countdown.birthTimeDisplay && (
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-blush-50 border border-blush-100 text-blush-600 text-[11px] sm:text-xs font-semibold mb-3 ml-2">
                <span>🎂</span>
                <span>{countdown.birthTimeDisplay}</span>
              </div>
            )}

            <p className="text-xs sm:text-sm text-[#7D6B75] mb-5">
              {countdown.subtextUpcoming}
            </p>

            <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-md mx-auto">
              {[
                { label: 'Days', value: timeLeft.days },
                { label: 'Hours', value: timeLeft.hours },
                { label: 'Minutes', value: timeLeft.minutes },
                { label: 'Seconds', value: timeLeft.seconds },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white/80 border border-blush-100 shadow-sm p-3 sm:p-4 text-center"
                >
                  <span className="block font-serif text-2xl sm:text-3xl font-bold text-blush-500">
                    {String(item.value).padStart(2, '0')}
                  </span>
                  <span className="block text-[11px] sm:text-xs font-medium text-[#8F7C86] uppercase tracking-wider mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
