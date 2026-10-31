import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, RotateCcw, Copy, Check, PartyPopper } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { fireGrandCelebration } from '../utils/confetti';
import { playCelebrationSound } from '../utils/soundEffects';

export default function FinalCelebration({ onReplay, onStartCelebrationMode }) {
  const { finalCelebration } = birthdayConfig;
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    const text = birthdayConfig.finalCelebration.sharePrompt;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section className="relative py-28 px-4 sm:px-6 overflow-hidden text-center bg-gradient-to-b from-transparent via-[#FAF0F5] to-[#F5E6F0]">
      {/* Decorative Fireworks & Butterfly Accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-12 left-10 text-3xl animate-bounce">🌷</div>
        <div className="absolute top-20 right-14 text-4xl animate-bounce" style={{ animationDelay: '0.6s' }}>🦋</div>
        <div className="absolute bottom-16 left-16 text-3xl animate-bounce" style={{ animationDelay: '1.2s' }}>🌸</div>
        <div className="absolute bottom-24 right-20 text-3xl animate-bounce" style={{ animationDelay: '0.9s' }}>✨</div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/80 border border-blush-200/80 shadow-sm text-blush-600 text-sm font-medium mb-6"
        >
          <Sparkles className="w-4 h-4 text-champagne-500 animate-spin-slow" />
          <span>{finalCelebration.badge}</span>
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-[#4A3B43] mb-6"
        >
          {finalCelebration.headline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#6E5B65] max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          {finalCelebration.subheading}
        </motion.p>

        {/* Grand Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="p-8 sm:p-12 rounded-3xl glass-panel border border-champagne-300 shadow-2xl relative overflow-hidden mb-12 max-w-xl mx-auto"
        >
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-blush-200/50 rounded-full blur-2xl" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-champagne-200/50 rounded-full blur-2xl" />

          <h3 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#4A3B43] shimmer-text mb-4">
            {finalCelebration.bigBanner}
          </h3>

          <p className="font-script text-2xl sm:text-3xl text-rosegold-500 font-semibold mb-6">
            "{finalCelebration.closingWords}"
          </p>

          <div className="flex justify-center items-center gap-3">
            <button
              onClick={() => {
                fireGrandCelebration();
                playCelebrationSound();
                if (onStartCelebrationMode) onStartCelebrationMode();
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-sm shadow-md hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <PartyPopper className="w-4 h-4 text-champagne-200" />
              <span>Celebrate Again! 🎉</span>
            </button>
          </div>
        </motion.div>

        {/* Animated Heart & Footer Note */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <motion.div
            animate={{ scale: [1, 1.25, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-12 rounded-full bg-blush-100 flex items-center justify-center shadow-md"
          >
            <Heart className="w-6 h-6 text-blush-500 fill-blush-500" />
          </motion.div>

          <p className="font-script text-2xl sm:text-3xl text-[#6E5B65]">
            {finalCelebration.footerNote}
          </p>
        </div>

        {/* Surprise Sharing Copy Assistant (for the sender) */}
        <div className="mt-14 max-w-md mx-auto p-4 rounded-2xl bg-white/70 border border-blush-200/60 shadow-sm flex items-center justify-between gap-3 text-left">
          <div className="overflow-hidden">
            <span className="block text-[11px] font-semibold text-rosegold-400 uppercase tracking-wider">
              Surprise Invite Message
            </span>
            <p className="text-xs text-[#6E5B65] truncate font-serif italic">
              "{finalCelebration.sharePrompt}"
            </p>
          </div>
          <button
            onClick={handleCopyLink}
            className="px-3.5 py-1.5 rounded-full bg-blush-100 hover:bg-blush-200 text-blush-600 text-xs font-medium flex items-center gap-1.5 transition-colors shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>

        {/* Replay Button */}
        {onReplay && (
          <div className="mt-8">
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 text-xs sm:text-sm text-[#8F7C86] hover:text-blush-600 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>{finalCelebration.replayText}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
