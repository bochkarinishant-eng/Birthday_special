import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareHeart, Send, Trash2, ShieldCheck, Heart } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playPopSound, playSparkleSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

const STORAGE_KEY = 'amu_universe_guestbook_wishes';
const AVATARS = ['🎀', '🌸', '✨', '🧁', '🌷', '🦋', '⭐', '💖'];

export default function LiveGuestbook() {
  const { guestbook } = birthdayConfig;
  const [wishes, setWishes] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState(AVATARS[0]);
  const [error, setError] = useState('');

  // Load from LocalStorage or default initial wishes
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setWishes(JSON.parse(stored));
      } else {
        setWishes(guestbook.initialWishes);
      }
    } catch (e) {
      setWishes(guestbook.initialWishes);
    }
  }, [guestbook.initialWishes]);

  // Persist to LocalStorage
  const saveWishes = (newWishes) => {
    setWishes(newWishes);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newWishes));
    } catch (e) {
      console.error(e);
    }
  };

  const handlePostWish = (e) => {
    e.preventDefault();
    setError('');

    const cleanName = name.trim();
    const cleanMessage = message.trim();

    if (!cleanName) {
      setError('Please provide a name or nickname 💕');
      return;
    }
    if (!cleanMessage) {
      setError('Please write a short sweet birthday wish! 🌸');
      return;
    }
    if (cleanMessage.length < 3) {
      setError('Wish is a bit too short!');
      return;
    }

    const newWish = {
      id: Date.now(),
      name: cleanName,
      message: cleanMessage,
      avatar: selectedAvatar,
      date: 'Just now',
    };

    saveWishes([newWish, ...wishes]);
    setName('');
    setMessage('');
    playSparkleSound();
    fireHeartConfetti();
  };

  const handleDeleteWish = (id) => {
    playPopSound();
    saveWishes(wishes.filter((w) => w.id !== id));
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blush-100/90 text-blush-600 text-xs sm:text-sm font-medium mb-3">
          <MessageSquareHeart className="w-4 h-4 text-blush-500" />
          <span>Interactive Guestbook</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-3">
          {guestbook.heading}
        </h2>

        <p className="text-sm sm:text-base text-[#6E5B65]">
          {guestbook.subheading}
        </p>
      </div>

      {/* Write a Wish Form Card */}
      <div className="glass-panel rounded-3xl p-6 sm:p-8 mb-12 border border-white/90 shadow-xl max-w-2xl mx-auto">
        <form onSubmit={handlePostWish} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="sm:col-span-2">
              <label className="block text-xs font-semibold text-[#6E5B65] uppercase tracking-wider mb-1.5">
                Your Name / Nickname
              </label>
              <input
                type="text"
                value={name}
                maxLength={40}
                onChange={(e) => setName(e.target.value)}
                placeholder={guestbook.placeholderName}
                className="w-full px-4 py-2.5 rounded-2xl bg-white/90 border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#6E5B65] uppercase tracking-wider mb-1.5">
                Pick Avatar
              </label>
              <div className="flex items-center justify-between bg-white/90 border border-blush-200 rounded-2xl px-2 py-1.5">
                {AVATARS.slice(0, 4).map((av) => (
                  <button
                    key={av}
                    type="button"
                    onClick={() => setSelectedAvatar(av)}
                    className={`p-1 text-lg rounded-xl transition-transform ${
                      selectedAvatar === av ? 'scale-125 bg-blush-100 shadow-sm' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    {av}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-xs font-semibold text-[#6E5B65] uppercase tracking-wider">
                Your Birthday Wish
              </label>
              <span className="text-[11px] text-[#9C8592]">{message.length}/200</span>
            </div>
            <textarea
              value={message}
              maxLength={200}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={guestbook.placeholderMessage}
              rows={3}
              className="w-full px-4 py-2.5 rounded-2xl bg-white/90 border border-blush-200 focus:outline-none focus:ring-2 focus:ring-blush-400 text-sm resize-none"
            />
          </div>

          {error && (
            <p className="text-xs text-rose-500 font-medium text-left">{error}</p>
          )}

          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-[#9C8592] flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-champagne-600" />
              <span>Real-time instant post</span>
            </span>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blush-400 to-rose-400 text-white font-medium text-sm shadow-md hover:shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{guestbook.buttonText}</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>
      </div>

      {/* Wish Cards Wall */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
        <AnimatePresence>
          {wishes.map((w) => (
            <motion.div
              key={w.id}
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="p-5 rounded-2xl bg-white/90 border border-blush-100 shadow-sm relative group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl p-1 rounded-full bg-blush-50">{w.avatar}</span>
                    <span className="font-serif font-bold text-[#4A3B43] text-sm sm:text-base">
                      {w.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#9C8592]">{w.date}</span>
                </div>
                <p className="text-sm text-[#6E5B65] leading-relaxed">
                  "{w.message}"
                </p>
              </div>

              {/* Delete / Moderate Button on hover */}
              <div className="mt-3 pt-2 border-t border-blush-50 flex justify-end">
                <button
                  onClick={() => handleDeleteWish(w.id)}
                  className="opacity-0 group-hover:opacity-60 hover:opacity-100 p-1 text-[#9C8592] hover:text-rose-500 transition-opacity"
                  title="Remove wish"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
