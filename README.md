# 🎀 A LITTLE UNIVERSE CALLED AMU
> *"Because someone as special as you deserves a universe of her own."*

A personalized interactive birthday experience celebrating Amu — designed with luxury feminine aesthetics, pastel fairytale atmosphere, Pinterest-inspired scrapbook storytelling, and smooth animations.

---

## ✨ Features & Interactive Experiences

1. **Cinematic Opening Screen 💌**
   - Dreamy pastel sky with glowing stars, floating butterflies, and petals.
   - Luxury animated envelope with ribbon and glowing wax seal.
   - Realistic opening animation releasing butterflies, hearts, and sparkles into the main universe.

2. **Live Birthday Countdown & Celebration Mode 🎂**
   - Live Days : Hours : Minutes : Seconds countdown timer.
   - Automatically switches to an active celebration banner on her birthday.

3. **Hero Section — Today is All About You 👑**
   - Prominently showcases Amu's solo portrait as the centerpiece inside a glowing rose-gold ring.
   - Preserves her natural facial appearance with elegant luxury frames.
   - Quick navigation buttons to explore the universe or jump straight to her letter.

4. **Amu's Photo Gallery (The Star of This Universe) 📸**
   - Editorial Polaroid cards with washi tape accents, soft shadows, and custom rotations.
   - Click-to-expand lightbox with high-resolution view, captions, and keyboard/touch navigation.
   - Drop-in photo replacement in `public/photos/` with zero code changes required.

5. **100 Little Reasons Why You're So Special 💕**
   - Interactive card deck with 100 completely unique, sincere, playful, and heartwarming compliments.
   - Flip animations, previous/next controls, and surprise random shuffle.
   - Milestone confetti bursts at #10, #25, #50, #75, and #100!

6. **Our Little Memory of You (Scrapbook) 🌸**
   - Interactive memory cards celebrating her smile, iconic personality, poise, kindness, quirky habits, funny side, and big dreams.

7. **Cosmic Birthday Wish Generator 🌟**
   - "Let's See What the Universe Wishes for You ✨"
   - Generates personalized blessings, fortunes, and fun wishes with star animations and confetti.

8. **Interactive Mood Surprise Dispenser 😊**
   - "How Are You Feeling Today, Amu?"
   - 4 mood buttons (Happy 🌸, Bored 🥺, Need a Smile 😂, Need Some Love 💗) with tailored messages and laughs.

9. **A Letter From The Heart 📜**
   - Elegant wax seal envelope that breaks open on tap.
   - Typewriter paragraph-by-paragraph reveal effect with handwritten signature.
   - 100% editable from `src/data/birthdayConfig.js`.

10. **The Birthday Cake Experience (Wish Time!) 🕯️**
    - Multi-tiered pastel cake with 3 flickering candles, strawberries, and ribbon trims.
    - Tap individual candles or click "Blow Out All Candles 💨" with realistic smoke and puff sounds.
    - Triggers confetti explosion, fanfare sound, and heartfelt birthday wish reveal.

11. **The Secret 3D Gift Box 🎁**
    - 3D gift box with ribbon that unties and lid that pops open to reveal:
      *"If there is one thing I want you to remember, it's this: You are important, you are appreciated, and you deserve beautiful things."*

12. **Live Birthday Guestbook ✍️**
    - "Leave a Little Piece of Happiness Here"
    - Instant real-time wish wall with avatar picker, spam validation, character limits, and persistent storage.

13. **Fullscreen Celebration Mode with Interactive Fireworks 🎆**
    - Fullscreen takeover with continuous confetti and atmospheric lighting.
    - **Interactive Fireworks:** Click or tap anywhere on the screen to shoot custom fireworks from that exact spot!

14. **Universe Treasure Hunt & Secret Easter Egg 🗝️**
    - 5 glowing charms (Star, Butterfly, Ribbon, Flower, Key) subtly hidden throughout the universe.
    - Unlocks a special secret modal with Amu's secret reminder:
      *"Even on days when you don't feel your best, remember that you are someone worth celebrating. Never forget that. ❤️"*

15. **Background Music Player 🎵**
    - Floating player with play/pause and track information.
    - Built-in relaxing Web Audio ambient piano/harp synthesizer so it plays soothing music out of the box without needing external mp3 files.
    - Support for custom MP3 track in `public/music/birthday-ambient.mp3`.

16. **Desktop Cursor Magic & Mobile Touch Trails ✨**
    - Delicate floating stars and hearts follow the mouse cursor on desktop and burst on touch on mobile.

---

## 🚀 Quick Start (Running Locally)

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser!

### 3. Build for Production
```bash
npm run build
```

---

## 📸 How to Add Amu's Real Photographs

1. Copy your photographs into the `public/photos/` folder:
   - `amu-hero.jpg` — Her best solo portrait for the Hero section
   - `amu-1.jpg` — Gallery photo 1
   - `amu-2.jpg` — Gallery photo 2
   - `amu-3.jpg` — Gallery photo 3
   - `amu-4.jpg` — Gallery photo 4
   - `amu-5.jpg` — Gallery photo 5
   - `amu-6.jpg` — Gallery photo 6

2. Customize captions in `src/data/birthdayConfig.js` under `gallery.photos`.

*Note: High-resolution aesthetic fallbacks are pre-configured so the website looks gorgeous even before adding local photos.*

---

## ⚙️ Central Personalization (`src/data/birthdayConfig.js`)

All messages, names, photos, letter paragraphs, 100 reasons, and audio settings are centralized in:
```
src/data/birthdayConfig.js
```
Simply edit this file to personalize any message for Amu!

---

## ☁️ Deploying to Vercel (Free & Instant)

### Option A: Via GitHub (Recommended)
1. Initialize git and commit your code:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Amu's Birthday Universe"
   ```
2. Create a new repository on [GitHub](https://github.com/new).
3. Push your repository:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/a-little-universe-called-amu.git
   git branch -M main
   git push -u origin main
   ```
4. Log into [Vercel](https://vercel.com).
5. Click **Add New Project** and select your GitHub repository.
6. The settings will be auto-detected (`Vite` framework, `dist` output directory).
7. Click **Deploy**! Your site will be live on a custom `.vercel.app` domain in ~30 seconds.

### Option B: Via Vercel CLI
```bash
npm i -g vercel
vercel
```

---

## 💌 Surprise Sharing Experience

When you are ready to surprise Amu, send her the deployed link along with this message:

> *"Amu, I made something for you. Open it when you're free. ❤️"*

The website will guide her through the magical opening envelope, revealing her own personalized universe!
