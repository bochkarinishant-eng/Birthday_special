import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

// Components
import WelcomeScreen from './components/WelcomeScreen';
import CursorSparkles from './components/CursorSparkles';
import InteractiveBackground from './components/InteractiveBackground';
import LiveCountdown from './components/LiveCountdown';
import HeroSection from './components/HeroSection';
import PhotoGallery from './components/PhotoGallery';
import ReasonsSection from './components/ReasonsSection';
import AppreciationSection from './components/AppreciationSection';
import WishGenerator from './components/WishGenerator';
import MoodSurpriseMachine from './components/MoodSurpriseMachine';
import BirthdayLetter from './components/BirthdayLetter';
import BirthdayCake from './components/BirthdayCake';
import SurpriseGift from './components/SurpriseGift';
import LiveGuestbook from './components/LiveGuestbook';
import FinalCelebration from './components/FinalCelebration';
import MusicPlayer from './components/MusicPlayer';
import CelebrationModeModal from './components/CelebrationModeModal';
import SecretMessageModal from './components/SecretMessageModal';

// Sound & Config
import { birthdayConfig } from './data/birthdayConfig';
import { startAmbientDreamscape } from './utils/soundEffects';

export default function App() {
  const [hasEnteredUniverse, setHasEnteredUniverse] = useState(false);
  const [isCelebrationModeOpen, setIsCelebrationModeOpen] = useState(false);
  const [isSecretModalOpen, setIsSecretModalOpen] = useState(false);
  const [foundCharms, setFoundCharms] = useState([]);
  const [lastFoundCharmName, setLastFoundCharmName] = useState('');

  const handleOpenUniverse = () => {
    setHasEnteredUniverse(true);
    // Optionally start peaceful ambient dreamscape melody on user interaction
    try {
      startAmbientDreamscape(0.15);
    } catch (e) {
      console.log('Audio autoplay prevented:', e);
    }
  };

  const handleFindCharm = (charmId, name) => {
    if (!foundCharms.includes(charmId)) {
      setFoundCharms((prev) => [...prev, charmId]);
    }
    setLastFoundCharmName(name);
    setIsSecretModalOpen(true);
  };

  const handleReplay = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setHasEnteredUniverse(false);
  };

  return (
    <div className="relative min-h-screen text-[#4A3B43] selection:bg-blush-200 selection:text-blush-600 font-sans">
      {/* Interactive Cursor Magic */}
      <CursorSparkles />

      {/* Living Universe Dynamic Background */}
      <InteractiveBackground
        foundCharms={foundCharms}
        onFindCharm={handleFindCharm}
      />

      {/* Opening Cinematic Welcome Screen */}
      <AnimatePresence>
        {!hasEnteredUniverse && (
          <WelcomeScreen onOpenSurprise={handleOpenUniverse} />
        )}
      </AnimatePresence>

      {/* Main Website Experience */}
      {hasEnteredUniverse && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.0 }}
          className="relative z-10 space-y-12 sm:space-y-16 pb-20"
        >
          {/* 1. Live Countdown Banner */}
          <LiveCountdown
            onStartCelebrationMode={() => setIsCelebrationModeOpen(true)}
          />

          {/* 2. Main Hero Section with Solo Portrait */}
          <HeroSection
            onStartCelebrationMode={() => setIsCelebrationModeOpen(true)}
            onFindCharm={handleFindCharm}
            foundCharms={foundCharms}
          />

          {/* 3. Amu's Photo Gallery */}
          <PhotoGallery
            onFindCharm={handleFindCharm}
            foundCharms={foundCharms}
          />

          {/* 4. 100 Little Reasons Why You're Special */}
          <ReasonsSection
            onFindCharm={handleFindCharm}
            foundCharms={foundCharms}
          />

          {/* 5. Scrapbook: Little Things That Make You, YOU */}
          <AppreciationSection
            onFindCharm={handleFindCharm}
            foundCharms={foundCharms}
          />

          {/* 6. Cosmic Birthday Wish Generator */}
          <WishGenerator />

          {/* 7. Interactive Mood Surprise Dispenser */}
          <MoodSurpriseMachine />

          {/* 8. Letter from the Heart (Wax Seal & Typewriter) */}
          <BirthdayLetter />

          {/* 9. The Birthday Cake Experience (Blowable Candles) */}
          <BirthdayCake
            onFindCharm={handleFindCharm}
            foundCharms={foundCharms}
          />

          {/* 10. The Secret Gift Box */}
          <SurpriseGift />

          {/* 11. Live Guestbook */}
          <LiveGuestbook />

          {/* 12. Final Celebration & Grand Finale */}
          <FinalCelebration
            onReplay={handleReplay}
            onStartCelebrationMode={() => setIsCelebrationModeOpen(true)}
          />
        </motion.main>
      )}

      {/* Floating Music Player */}
      <MusicPlayer autoStartOnOpen={hasEnteredUniverse} />

      {/* Fullscreen Interactive Fireworks Celebration Mode */}
      <CelebrationModeModal
        isOpen={isCelebrationModeOpen}
        onClose={() => setIsCelebrationModeOpen(false)}
      />

      {/* Secret Message & Treasure Hunt Modal */}
      <SecretMessageModal
        isOpen={isSecretModalOpen}
        onClose={() => setIsSecretModalOpen(false)}
        foundCharms={foundCharms}
        lastFoundName={lastFoundCharmName}
      />
    </div>
  );
}
