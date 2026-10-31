import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { playSparkleSound } from '../utils/soundEffects';
import { fireHeartConfetti } from '../utils/confetti';

export default function InteractiveBackground({ foundCharms = [], onFindCharm }) {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 20;
      const y = (e.clientY / window.innerHeight - 0.5) * 20;
      setMouseOffset({ x, y });
    };
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  const handleCharmClick = (id, name, e) => {
    e.stopPropagation();
    if (foundCharms.includes(id)) return;
    playSparkleSound();
    const rect = e.currentTarget.getBoundingClientRect();
    fireHeartConfetti({
      x: (rect.left + rect.width / 2) / window.innerWidth,
      y: (rect.top + rect.height / 2) / window.innerHeight,
    });
    if (onFindCharm) {
      onFindCharm(id, name);
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Dreamy radial ambient lighting */}
      <div 
        className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-blush-200/40 blur-3xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mouseOffset.x * 1.2}px, ${mouseOffset.y * 1.2}px)` }}
      />
      <div 
        className="absolute top-1/3 -right-32 w-[30rem] h-[30rem] rounded-full bg-lavender-200/35 blur-3xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${-mouseOffset.x}px, ${-mouseOffset.y}px)` }}
      />
      <div 
        className="absolute bottom-10 left-1/4 w-[28rem] h-[28rem] rounded-full bg-champagne-200/30 blur-3xl transition-transform duration-1000 ease-out"
        style={{ transform: `translate(${mouseOffset.x * 0.8}px, ${mouseOffset.y * 0.8}px)` }}
      />

      {/* Floating Butterflies */}
      <motion.div
        animate={{
          x: [0, 80, -40, 60, 0],
          y: [0, -120, -200, -80, 0],
          rotate: [0, 15, -10, 8, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-[8%] text-2xl opacity-75 filter drop-shadow"
      >
        <span className="inline-block animate-pulse">🦋</span>
      </motion.div>

      <motion.div
        animate={{
          x: [0, -90, 30, -60, 0],
          y: [0, 140, 220, 70, 0],
          rotate: [0, -12, 14, -8, 0],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        className="absolute top-2/3 right-[10%] text-xl opacity-70 filter drop-shadow"
      >
        <span className="inline-block animate-pulse">🦋</span>
      </motion.div>

      {/* Subtle Floating Flower Petals */}
      {[
        { top: '15%', left: '20%', duration: 18, delay: 0 },
        { top: '35%', left: '85%', duration: 24, delay: 2 },
        { top: '65%', left: '15%', duration: 20, delay: 5 },
        { top: '80%', left: '75%', duration: 22, delay: 3 },
      ].map((p, idx) => (
        <motion.div
          key={idx}
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 45, 0],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
          className="absolute text-base pointer-events-none select-none"
          style={{ top: p.top, left: p.left }}
        >
          🌸
        </motion.div>
      ))}

      {/* Twinkling Golden Stars */}
      {[
        { top: '10%', left: '50%', delay: 0.5 },
        { top: '25%', left: '92%', delay: 1.2 },
        { top: '45%', left: '5%', delay: 2.1 },
        { top: '75%', left: '40%', delay: 0.8 },
        { top: '90%', left: '88%', delay: 1.8 },
      ].map((star, idx) => (
        <div
          key={idx}
          className="absolute text-champagne-400 animate-sparkle"
          style={{
            top: star.top,
            left: star.left,
            animationDelay: `${star.delay}s`,
            fontSize: '14px',
          }}
        >
          ✨
        </div>
      ))}
    </div>
  );
}
