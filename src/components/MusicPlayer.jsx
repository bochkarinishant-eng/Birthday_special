import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Music, Volume2, VolumeX, Play, Pause, Disc } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { toggleAmbientDreamscape, isAmbientActive } from '../utils/soundEffects';

export default function MusicPlayer({ autoStartOnOpen = false }) {
  const { audio } = birthdayConfig;
  const [isPlaying, setIsPlaying] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef(null);
  const [usingSynthesizer, setUsingSynthesizer] = useState(true);

  // Attempt to check if custom audio file exists
  useEffect(() => {
    if (audio.bgMusicUrl) {
      const testAudio = new Audio();
      testAudio.src = audio.bgMusicUrl;
      testAudio.addEventListener('canplaythrough', () => {
        setUsingSynthesizer(false);
      });
      testAudio.addEventListener('error', () => {
        // Fall back smoothly to Web Audio synthesizer
        setUsingSynthesizer(true);
      });
    }
  }, [audio.bgMusicUrl]);

  const togglePlay = () => {
    if (usingSynthesizer) {
      const active = toggleAmbientDreamscape(0.18);
      setIsPlaying(active);
    } else if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          // If browser policy blocks, fallback to Web Audio synthesizer
          const active = toggleAmbientDreamscape(0.18);
          setIsPlaying(active);
          setUsingSynthesizer(true);
        });
      }
    }
  };

  return (
    <>
      {!usingSynthesizer && (
        <audio
          ref={audioRef}
          src={audio.bgMusicUrl}
          loop
          preload="none"
        />
      )}

      {/* Floating Music Widget */}
      <div className="fixed bottom-6 right-6 z-40 select-none">
        <div className="relative flex items-center">
          {/* Expanded player pill */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, x: 20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.9 }}
                className="mr-3 glass-panel rounded-full py-2 px-4 shadow-xl flex items-center gap-3 border border-champagne-300/80"
              >
                <div className="text-left">
                  <span className="block text-xs font-semibold text-[#4A3B43] leading-tight">
                    {audio.trackTitle}
                  </span>
                  <span className="block text-[10px] text-rosegold-500 font-medium">
                    {usingSynthesizer ? "Ambient Piano Synthesizer 🎹" : audio.trackArtist}
                  </span>
                </div>

                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-blush-100 hover:bg-blush-200 text-blush-600 transition-colors"
                  title={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Floating Circle Button */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              if (!isExpanded) {
                setIsExpanded(true);
              }
              togglePlay();
            }}
            onContextMenu={(e) => {
              e.preventDefault();
              setIsExpanded(!isExpanded);
            }}
            className={`w-13 h-13 sm:w-14 sm:h-14 rounded-full shadow-2xl flex items-center justify-center border-2 transition-all duration-300 ${
              isPlaying
                ? 'bg-gradient-to-tr from-blush-400 to-rose-400 border-champagne-200 text-white shadow-[0_0_20px_rgba(244,143,177,0.7)]'
                : 'bg-white/90 border-blush-200 text-[#6E5B65] hover:border-blush-300'
            }`}
            title={isPlaying ? "Music Playing (Click to Pause)" : "Play Soothing Background Music"}
          >
            {isPlaying ? (
              <Disc className="w-6 h-6 animate-spin-slow text-champagne-100" />
            ) : (
              <Music className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>
    </>
  );
}
