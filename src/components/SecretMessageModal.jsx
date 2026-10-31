import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Heart, Crown, Key } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { fireHeartConfetti } from '../utils/confetti';
import { playSparkleSound } from '../utils/soundEffects';

export default function SecretMessageModal({
  isOpen,
  onClose,
  foundCharms = [],
  lastFoundName = '',
}) {
  const { hiddenTreasures } = birthdayConfig;
  const isAllCollected = foundCharms.length >= hiddenTreasures.totalToFind;

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="relative max-w-lg w-full rounded-3xl bg-white p-8 sm:p-10 border border-champagne-300 shadow-2xl text-center overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full hover:bg-blush-50 text-[#8F7C86] hover:text-blush-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100 text-champagne-800 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5 text-champagne-600" />
            <span>{hiddenTreasures.secretMessage.badge}</span>
          </div>

          {lastFoundName && (
            <div className="mb-4">
              <span className="text-xs font-semibold text-rosegold-500 uppercase tracking-widest">
                Just Discovered:
              </span>
              <p className="font-serif text-lg font-bold text-blush-600">
                ✨ {lastFoundName} ✨
              </p>
            </div>
          )}

          {/* Secret Message Title */}
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A3B43] mb-4">
            {hiddenTreasures.secretMessage.title}
          </h3>

          {/* Secret Message Body */}
          <div className="p-5 rounded-2xl bg-cream-50/80 border border-champagne-200/60 mb-6 text-left sm:text-center">
            <p className="text-sm sm:text-base text-[#6E5B65] leading-relaxed whitespace-pre-line font-medium">
              {hiddenTreasures.secretMessage.content}
            </p>
          </div>

          {/* Treasure Tracker */}
          <div className="pt-4 border-t border-blush-100">
            <div className="flex justify-between items-center text-xs font-semibold text-[#8F7C86] mb-2">
              <span>Universe Charms Discovered</span>
              <span className="text-blush-600 font-bold">
                {foundCharms.length} / {hiddenTreasures.totalToFind}
              </span>
            </div>

            {/* Progress bar */}
            <div className="w-full h-2 rounded-full bg-blush-100 overflow-hidden mb-4">
              <div
                className="h-full bg-gradient-to-r from-blush-400 to-rose-400 transition-all duration-500 rounded-full"
                style={{
                  width: `${(foundCharms.length / hiddenTreasures.totalToFind) * 100}%`,
                }}
              />
            </div>

            {isAllCollected ? (
              <div className="p-3 rounded-xl bg-champagne-100/80 border border-champagne-300 text-champagne-800 text-xs font-medium">
                {hiddenTreasures.secretMessage.unlockAllText}
              </div>
            ) : (
              <p className="text-xs text-[#9C8592] italic">
                Tip: Explore the sections to find remaining glowing stars, butterflies & ribbons!
              </p>
            )}
          </div>

          <button
            onClick={onClose}
            className="mt-6 px-8 py-2.5 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-all"
          >
            Keep This Secret Safe 💖
          </button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
