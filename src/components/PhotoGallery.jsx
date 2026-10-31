import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { birthdayConfig } from '../data/birthdayConfig';
import { playPopSound, playSparkleSound } from '../utils/soundEffects';

export default function PhotoGallery({ onFindCharm, foundCharms = [] }) {
  const { gallery } = birthdayConfig;
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);
  const charmId = "charm-2";
  const isCharmFound = foundCharms.includes(charmId);

  const openLightbox = (idx) => {
    playPopSound();
    setSelectedPhotoIndex(idx);
  };

  const closeLightbox = () => {
    setSelectedPhotoIndex(null);
  };

  const nextPhoto = (e) => {
    e.stopPropagation();
    playPopSound();
    setSelectedPhotoIndex((prev) => (prev + 1) % gallery.photos.length);
  };

  const prevPhoto = (e) => {
    e.stopPropagation();
    playPopSound();
    setSelectedPhotoIndex((prev) => (prev - 1 + gallery.photos.length) % gallery.photos.length);
  };

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        {/* Secret Charm 2: Butterfly of Joy */}
        <div className="absolute -top-6 right-4 sm:right-12 z-20">
          <button
            onClick={(e) => onFindCharm && onFindCharm(charmId, "Butterfly of Joy", e)}
            className={`p-1.5 rounded-full transition-all duration-300 ${
              isCharmFound
                ? 'opacity-40 text-blush-300 cursor-default'
                : 'hover:scale-125 text-2xl animate-pulse cursor-pointer'
            }`}
            title={isCharmFound ? "Butterfly of Joy discovered! 🦋" : "A glowing secret butterfly..."}
          >
            🦋
          </button>
        </div>

        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-champagne-100/90 text-champagne-700 text-xs sm:text-sm font-medium mb-3">
          <Camera className="w-4 h-4 text-blush-500" />
          <span>The Main Attraction</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#4A3B43] tracking-tight mb-4">
          {gallery.heading}
        </h2>

        <p className="text-base sm:text-lg text-[#6E5B65] font-light italic font-serif">
          "{gallery.subheading}"
        </p>

        <p className="text-xs sm:text-sm text-[#8F7C86] mt-3 max-w-xl mx-auto">
          {gallery.description}
        </p>
      </div>

      {/* Editorial Polaroid Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {gallery.photos.map((photo, idx) => (
          <PolaroidCard
            key={photo.id}
            photo={photo}
            index={idx}
            onOpen={() => openLightbox(idx)}
          />
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevPhoto}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-50"
            >
              <ChevronLeft className="w-7 h-7" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors z-50"
            >
              <ChevronRight className="w-7 h-7" />
            </button>

            {/* Expanded Photo Card */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full bg-white rounded-2xl p-4 sm:p-6 shadow-2xl flex flex-col items-center"
            >
              <div className="w-full max-h-[68vh] overflow-hidden rounded-xl bg-cream-50 flex items-center justify-center">
                <img
                  src={gallery.photos[selectedPhotoIndex].src}
                  alt={gallery.photos[selectedPhotoIndex].title}
                  onError={(e) => {
                    e.currentTarget.src = gallery.photos[selectedPhotoIndex].fallback;
                  }}
                  className="max-h-[65vh] w-auto object-contain rounded-lg"
                />
              </div>

              <div className="w-full text-center mt-4">
                <span className="inline-block px-3 py-1 rounded-full bg-blush-100 text-blush-600 text-xs font-semibold uppercase tracking-wider mb-2">
                  {gallery.photos[selectedPhotoIndex].tag}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#4A3B43]">
                  {gallery.photos[selectedPhotoIndex].title}
                </h3>
                <p className="font-script text-xl text-rosegold-500 mt-1">
                  "{gallery.photos[selectedPhotoIndex].caption}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function PolaroidCard({ photo, index, onOpen }) {
  const [currentSrc, setCurrentSrc] = useState(photo.src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ rotate: photo.rotation || '0deg' }}
      className="group relative cursor-pointer"
      onClick={onOpen}
    >
      {/* Decorative Washi Tape on top corner */}
      <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 bg-champagne-200/80 rounded-sm shadow-sm rotate-1 backdrop-blur-xs z-10 border-t border-b border-champagne-300/40" />

      {/* Polaroid Container */}
      <div className="polaroid-frame rounded-xl p-4 pb-6 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-2xl">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-cream-100">
          <img
            src={currentSrc}
            alt={photo.title}
            onError={() => setCurrentSrc(photo.fallback)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-blush-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="p-3 rounded-full bg-white/90 text-blush-600 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
              <Maximize2 className="w-5 h-5" />
            </span>
          </div>

          {/* Badge Tag */}
          <div className="absolute bottom-2.5 left-2.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-blush-100 text-[11px] font-semibold text-blush-600 shadow-sm">
            {photo.tag}
          </div>
        </div>

        {/* Polaroid Handwritten Caption */}
        <div className="mt-4 text-center px-2">
          <h4 className="font-serif text-lg font-bold text-[#4A3B43]">
            {photo.title}
          </h4>
          <p className="font-script text-lg text-rosegold-500 mt-0.5 line-clamp-1">
            "{photo.caption}"
          </p>
        </div>
      </div>
    </motion.div>
  );
}
