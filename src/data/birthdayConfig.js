/**
 * =========================================================================
 * 🎀 A LITTLE UNIVERSE CALLED AMU — CENTRAL PERSONALIZATION CONFIGURATION
 * =========================================================================
 * 
 * Edit this single file to customize any aspect of Amu's birthday website!
 * - Photos: Place your photos in `public/photos/` and update paths below.
 * - Text: Edit any message, compliment, letter, or memory note.
 * - Countdown: Set Amu's exact birthday date.
 * - Audio: Change background music path or toggle sound effects.
 */

export const birthdayConfig = {
  // ─── RECIPIENT INFORMATION ──────────────────────────────────────────────
  recipient: {
    name: "Amu",
    nickname: "Amu",
    fullName: "Amu",
    title: "A LITTLE UNIVERSE CALLED AMU 🎀",
    tagline: "Because someone as special as you deserves a universe of her own.",
  },

  // ─── 1. LIVE COUNTDOWN & CELEBRATION DATE ───────────────────────────────
  countdown: {
    // Exact birthday and time of birth: 3 Nov 2026, 10:35 PM
    targetDate: "2026-11-03T22:35:00+05:30",
    birthTimeDisplay: "November 3, 2026 at 10:35 PM",
    forceCelebrationMode: false, // Set to true to always show celebration mode
    upcomingTitle: "Counting Down to Amu's Special Moment ✨",
    todayTitle: "IT'S OFFICIALLY AMU'S BIRTHDAY! 🎂🥳",
    subtextUpcoming: "Counting down to November 3 at 10:35 PM — the exact moment the universe was blessed with Amu.",
    subtextToday: "The universe is throwing a party today and you're the star of the show!",
  },

  // ─── 2. WELCOME SCREEN ──────────────────────────────────────────────────
  welcomeScreen: {
    greeting: "Hey Amu! 🎀",
    subtext: "Someone has prepared a little surprise for you...",
    envelopeLabel: "Special Delivery For You",
    buttonText: "Open Your Little Surprise 💌",
    hintText: "Click the envelope to enter your universe",
  },

  // ─── 3. MAIN HERO SECTION ───────────────────────────────────────────────
  hero: {
    badge: "✨ Today is All About You ✨",
    heading: "HAPPY BIRTHDAY, AMU!",
    subheading: "Today, the universe celebrates someone who makes this world a little more beautiful.",
    exploreBtn: "Explore Your Universe ✨",
    /**
     * Put Amu's primary solo portrait in `public/photos/amu-hero.jpg`.
     * If the file is not yet in public/photos, it gracefully uses the high-res fallback aesthetic placeholder.
     */
    featuredPhoto: {
      src: "/photos/amu-hero.jpg",
      fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80",
      alt: "Amu - The Star of This Universe",
      caption: "The birthday girl herself, shining bright ✨",
    },
  },

  // ─── 4. PHOTO GALLERY ───────────────────────────────────────────────────
  gallery: {
    heading: "A World Full of Beautiful Things, And Then There's You.",
    subheading: "Some people don't need filters to make the world brighter.",
    description: "Every frame captured in this universe is dedicated to celebrating you — your smile, your energy, and the light you bring wherever you go.",
    /**
     * INSTRUCTIONS FOR AMU'S REAL PHOTOGRAPHS:
     * 1. Save your photos inside `public/photos/` (e.g. `amu-1.jpg`, `amu-2.jpg`, etc.)
     * 2. Replace or update the `src` paths below.
     * 3. Customize the captions and dates/tags to make them personal!
     */
    photos: [
      {
        id: 1,
        title: "Pure Radiance",
        src: "/photos/amu-1.jpg",
        fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=900&q=80",
        caption: "The kind of smile that genuinely lights up an entire room.",
        tag: "Favorite Smile",
        rotation: "-2deg",
      },
      {
        id: 2,
        title: "Effortlessly Iconic",
        src: "/photos/amu-2.jpg",
        fallback: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
        caption: "Cool, confident, and unapologetically herself.",
        tag: "Main Character",
        rotation: "1.5deg",
      },
      {
        id: 3,
        title: "Golden Hour Glow",
        src: "/photos/amu-3.jpg",
        fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
        caption: "Proof that sunshine has a favorite human.",
        tag: "Golden Hour",
        rotation: "-1deg",
      },
      {
        id: 4,
        title: "Candid Magic",
        src: "/photos/amu-4.jpg",
        fallback: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=900&q=80",
        caption: "Caught mid-laugh — the purest version of joy.",
        tag: "Pure Joy",
        rotation: "2.5deg",
      },
      {
        id: 5,
        title: "Unstoppable Energy",
        src: "/photos/amu-5.jpg",
        fallback: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80",
        caption: "Strong, graceful, and always moving forward.",
        tag: "Elegance",
        rotation: "-1.8deg",
      },
      {
        id: 6,
        title: "Simply Irreplaceable",
        src: "/photos/amu-6.jpg",
        fallback: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?auto=format&fit=crop&w=900&q=80",
        caption: "Because out of eight billion people, there is only one Amu.",
        tag: "One of a Kind",
        rotation: "1.2deg",
      },
    ],
  },

  // ─── 5. 100 REASONS WHY AMU IS SPECIAL ──────────────────────────────────
  reasonsSection: {
    heading: "100 Little Reasons Why You're So Special",
    subheading: "Click below to reveal each reminder of how wonderful you truly are 💕",
    buttonText: "Tell Me Another Reason 💕",
    prevButtonText: "Previous Reason",
    shuffleButtonText: "Surprise Reason 🎲",
    reasons: [
      "Your smile has its own magic.",
      "You make ordinary moments feel special.",
      "You deserve all the happiness in the world.",
      "Your presence makes things brighter.",
      "You are stronger than you sometimes realize.",
      "Your personality is genuinely one of a kind.",
      "You deserve to be appreciated every single day.",
      "You make people around you feel special.",
      "You should never underestimate your worth.",
      "Because simply being YOU is already enough.",
      "Your laughter is contagiously heartwarming.",
      "You have an unmistakable aura of kindness.",
      "You handle challenges with surprising grace.",
      "You listen with genuine empathy and patience.",
      "Your sense of humor can brighten the dullest day.",
      "You are authentically yourself, no pretenses.",
      "You care deeply about the people in your corner.",
      "Your taste in little joys is impeccably sweet.",
      "You inspire people without even trying.",
      "You have a heart that deserves to be protected.",
      "Your eyes light up when you talk about things you love.",
      "You give the best, warmest positive energy.",
      "You never give up on the things that matter to you.",
      "You possess a quiet resilience that is truly admirable.",
      "You make being a good friend look effortless.",
      "Your spontaneous jokes always land at just the right time.",
      "You make anyone talking to you feel heard and valued.",
      "You are proof that pure-hearted people still exist.",
      "Your aesthetic sense makes everything around you look prettier.",
      "You celebrate others' victories with genuine excitement.",
      "You have a sweet balance of softness and sheer determination.",
      "You can turn a boring conversation into an unforgettable laugh.",
      "You have a gentle way of comforting people when they're down.",
      "You never boast, even though you have every reason to be proud.",
      "Your enthusiasm for small happy moments is contagious.",
      "You are delightfully dramatic in the funniest, cutest way.",
      "You stand up for what you believe in with conviction.",
      "Your voice carries a soothing, comforting warmth.",
      "You make every memory ten times more vivid and memorable.",
      "You don't need a crown to be treated like royalty.",
      "You have this unique charm that nobody else could replicate.",
      "You give honest, thoughtful advice when it matters most.",
      "You remember the little details that most people forget.",
      "You bring calm whenever everything around feels chaotic.",
      "You are hilarious without even trying to be funny.",
      "Your style and poise are effortlessly elegant.",
      "You are generous with your kindness and love.",
      "You never hold back your brightest smile when happy.",
      "You make difficult days feel infinitely more manageable.",
      "You have an undeniable spark in your eyes.",
      "You are independent and fiercely capable.",
      "You make every photograph look 100 times better.",
      "You don't follow trends — you set your own vibe.",
      "Your loyalty to genuine friendships runs deep.",
      "You can make someone's whole week better with one text.",
      "You have an unmatched emotional maturity.",
      "You appreciate the little things that others overlook.",
      "You are unapologetically passionate about your interests.",
      "You have a laugh that sounds like celebration itself.",
      "You are someone a friend can trust with their entire heart.",
      "You make this chaotic world feel a little softer.",
      "You give the warmest, most reassuring vibes.",
      "Your silliness is an absolute national treasure.",
      "You are quick to forgive and slow to judge.",
      "You turn simple tea or coffee hangouts into core memories.",
      "You have an intuitive understanding of people's feelings.",
      "You never let self-doubt stop you for too long.",
      "Your presence alone turns a gloomy day into sunshine.",
      "You make being around you feel like home.",
      "You are both fiercely ambitious and deeply grounded.",
      "Your cute expressions when you're surprised are priceless.",
      "You remind people that goodness is still alive and well.",
      "You don't compare yourself to others — you walk your own lane.",
      "You have an infectious zest for life and joy.",
      "You look out for others even when you're busy yourself.",
      "Your kindness isn't an act; it's who you are at your core.",
      "You have an adorable way of getting excited over little surprises.",
      "You bring out the absolute best in those around you.",
      "You are smarter and sharper than you give yourself credit for.",
      "You turn simple words into heartfelt comfort.",
      "You are a blessing to anyone fortunate enough to know you.",
      "You bring color into lives that used to be monochrome.",
      "You have this magnetic positivity that attracts good souls.",
      "You are patient with others when they need it most.",
      "You know how to turn tears of sadness into tears of laughter.",
      "You always leave people feeling happier than when you arrived.",
      "Your dreams are big, bold, and entirely within your reach.",
      "You don't need permission from anyone to shine.",
      "You possess a timeless elegance that never fades.",
      "You make friendship feel like the safest shelter.",
      "You are radiant from the inside out.",
      "You have an unstoppable spark that lights every room.",
      "You are the sister/best friend anyone would wish upon a star for.",
      "You deserve every blessing, every flower, and every victory.",
      "You are proof that angels walk among us without wings.",
      "You make life feel like a heartwarming story.",
      "You are worthy of everything wonderful this universe holds.",
      "Your future is so bright it could blind the stars.",
      "You will always have people who believe in you completely.",
      "Because, Amu, the universe is infinitely richer with you in it."
    ],
  },

  // ─── 6. OUR LITTLE MEMORY OF YOU (APPRECIATION) ─────────────────────────
  appreciation: {
    heading: "Little Things That Make You, YOU.",
    subheading: "A little scrapbook of the quirks, the heart, and the magic that make you completely irreplaceable.",
    cards: [
      {
        id: "smile",
        icon: "Sparkles",
        tag: "That Signature Glow",
        title: "Your Beautiful Smile",
        description: "That bright, effortless smile that instantly melts stress away and makes everyone around feel like everything is going to be just fine.",
        color: "from-pink-100 to-rose-100",
        badge: "Pure Sunshine ☀️",
      },
      {
        id: "personality",
        icon: "Heart",
        tag: "Unmatched Vibe",
        title: "Your One-of-a-Kind Personality",
        description: "A rare blend of warmth, wit, quiet strength, and endless charm. You never have to try to fit in because your vibe is already iconic.",
        color: "from-purple-100 to-pink-100",
        badge: "Iconic Energy ✨",
      },
      {
        id: "confidence",
        icon: "Crown",
        tag: "Inner Power",
        title: "Your Quiet Confidence",
        description: "You don't need to be loud to make a statement. The way you carry yourself with poise, dignity, and self-respect is inspiring.",
        color: "from-amber-100 to-rose-100",
        badge: "Grace & Poise 👑",
      },
      {
        id: "kindness",
        icon: "Flower2",
        tag: "Golden Heart",
        title: "Your Endless Kindness",
        description: "How deeply you care, the soft way you check in on people, and how your empathy always shines through even in small gestures.",
        color: "from-rose-100 to-peach-100",
        badge: "Pure Heart 🌸",
      },
      {
        id: "habits",
        icon: "Coffee",
        tag: "Adorably You",
        title: "Your Quirky Little Habits",
        description: "The little faces you make, the funny reactions when something surprises you, and all those specific cute habits that are 100% Amu.",
        color: "from-peach-100 to-lavender-100",
        badge: "100% Authentic 🎀",
      },
      {
        id: "crazy",
        icon: "SmilePlus",
        tag: "Zero Filter Fun",
        title: "Your Crazy & Funny Side",
        description: "When the calm facade drops and your unhinged, hilarious energy comes out — making everyone laugh until their stomachs hurt!",
        color: "from-yellow-100 to-pink-100",
        badge: "Comedy Queen 🤪",
      },
      {
        id: "dreams",
        icon: "Compass",
        tag: "Real Best Friend Advice",
        title: "Focus on Your Future & Goals",
        description: "I honestly don't like that you stay in the past instead of focusing on what's ahead. Please focus on your life goals and your studies so that you can secure your future and become truly independent.",
        color: "from-indigo-100 to-purple-100",
        badge: "Be Independent ✨",
      },
    ],
  },

  // ─── 7. A LETTER FROM THE HEART ─────────────────────────────────────────
  letter: {
    heading: "Something I Wanted You to Know...",
    subheading: "A heartfelt message written especially for you on your special day.",
    waxSealText: "FOR AMU",
    openPrompt: "Click to break the wax seal & open your letter",
    readButton: "Read Your Letter 💌",
    salutation: "Dear Amu,",
    date: "November 3, 2026",
    sections: [
      {
        id: "intro",
        heading: "Before You Read This... 💌",
        paragraphs: [
          "First of all, read this carefully till the end. I know I'm writing a lot of things, and you might even think I'm talking bullshit, but there's a reason behind all this. There is something I genuinely want to convey to you, and I hope you will at least read everything once before judging it."
        ]
      },
      {
        id: "understand",
        heading: "Something I Wish You Would Understand... 🌸",
        paragraphs: [
          "There is one thing I really want to tell you, and I hope someday you understand what I am trying to say.",
          "I don't know how to define love perfectly, but I know one thing: love should never make you forget your own worth. Loving someone doesn't mean hurting yourself for them. It doesn't mean putting their happiness above your existence or punishing yourself when things don't happen the way you imagined.",
          "You can care for someone, give them importance, make compromises and genuinely wish the best for them. But somewhere in all of this, please don't lose yourself.",
          "And honestly, there is something that hurts me too. When I see you hurting yourself for someone else, I don't know how to explain what goes through my mind. Maybe you don't realise it, but you matter to me. Your happiness matters, your peace matters, and even the little things that affect you matter to me.",
          "I know I cannot make decisions for you. I cannot decide whom you should love, what you should feel or how you should live your life. Those are your choices, and I respect them. But seeing you treat yourself as though your feelings and your life matter less than someone else's makes me wish you could see yourself the way I see you.",
          "I don't expect anything from you. I don't want you to change yourself for me, and I don't want you to feel that you owe me anything. I just wish you would start giving yourself the same care that you so willingly give to others.",
          "You know, sometimes we become so busy trying to be important to someone that we forget that we are already important to other people.",
          "And I hope you never forget that you are important to me too. Maybe I don't express it every time, maybe I don't always find the right words, and maybe you don't even notice how much I care. But that doesn't make it any less real.",
          "Please don't hurt yourself to prove your feelings to someone. You deserve happiness that doesn't come at the cost of your own well-being. Your life and your safety are important, regardless of whether someone chooses to stay in your life or not."
        ],
        specialQuote: "And if there is one thing I wish for you beyond all your birthday wishes, it is this: May you never have to hurt yourself to feel loved, never have to lose yourself to keep someone, and never question your worth because someone couldn't recognise it.",
        postQuoteParagraphs: [
          "Take care of yourself. Not just for the people who care about you, but for yourself.",
          "You matter. More than you probably realise."
        ]
      },
      {
        id: "last-thing",
        heading: "One Last Thing... 💭",
        paragraphs: [
          "I know you might not understand all these things right now. I always call you a small kid, don't I? Maybe that's how I've always treated you, and maybe you won't understand why I'm telling you all this. And that's completely okay. I'm not forcing you to understand everything or even expecting you to agree with me. I just wanted to share what I genuinely feel and what I wish you would realise someday.",
          "Now, enough of my lectures! 😂 Don't let this long message take your focus away from your studies. Do well, keep studying, work towards your dreams and never lose sight of the things that matter for your future. I want to see you doing well in life, achieving the things you dream about and, most importantly, being happy with yourself.",
          "Sorry for writing such a long message on your birthday. Maybe I had a lot more to say than I could fit into a few words."
        ],
        birthdayWish: "Happy Birthday! Keep smiling, keep growing and please take care of yourself. ❤️"
      },
      {
        id: "never-forget",
        heading: "And Never Forget This... ✨",
        heroPromise: "WHATEVER HAPPENS, WHATEVER YOU GO THROUGH, I'M ALWAYS HERE FOR YOU.",
        finalParagraph: "You don't have to face every difficult moment alone. Even when things don't go as you wish, even when life gets difficult, remember that you have someone who genuinely cares about you and will stand beside you. I'M WITH YOU. ❤️"
      }
    ],
    signOff: "Always here for you,",
    author: "— Your Best Friend ❤️",
  },

  // ─── 8. THE BIRTHDAY CAKE EXPERIENCE ────────────────────────────────────
  cake: {
    heading: "Amu, It's Wish Time! 🎂",
    subheading: "Close your eyes, think of your sweetest wish for this year, and tap the candles to blow them out!",
    candlesCount: 3,
    candleInstructions: "Tap the candles to blow them out! 🕯️",
    wishSuccessMessage: "May all your little and big wishes come true. You deserve every bit of happiness! 💗",
    makeAnotherWishText: "Relight the candles & make another wish ✨",
  },

  // ─── 9. THE SECRET GIFT BOX ─────────────────────────────────────────────
  secretGift: {
    heading: "Wait, Amu... There's Something Else! 🎁",
    subheading: "You didn't think that was all, did you? Tap the gift box to unlock what's inside...",
    tapToOpen: "Tap to untie ribbon & open gift 🎀",
    revealedTitle: "A Secret Surprise For You ✨",
    message: "If there is one thing I want you to remember, it's this: You are important, you are appreciated, and you deserve beautiful things.",
    giftDeliveryTitle: "A Special Delivery On Its Way 🎁",
    giftDeliveryNote: "Your actual birthday gift is on its way! You will receive your gift as soon as possible, so keep that beautiful smile ready! 🎀📦✨",
    signature: "Always in your corner 🌷",
  },

  // ─── 10. THE BIRTHDAY WISH GENERATOR (NEW #18.4) ─────────────────────────
  wishGenerator: {
    heading: "Let's See What the Universe Wishes for You ✨",
    subheading: "The stars have aligned to send you personal fortune and blessings for your year ahead.",
    buttonText: "Consult The Stars 🌟",
    wishes: [
      "A year full of unexpected, overwhelming happiness.",
      "Dreams turning into beautiful, effortless realities.",
      "Endless reasons to smile until your cheeks hurt.",
      "Exciting new adventures worth remembering forever.",
      "All the love, peace, and quiet victory you deserve.",
      "Surprise coffee treats and zero bad hair days.",
      "People who appreciate you exactly for who you are.",
      "Triumph in every single goal you quietly set for yourself.",
      "Peace of mind, gentle mornings, and cozy evenings.",
      "Spontaneous laugh attacks that make your stomach ache.",
      "Golden hour lighting wherever you take a photo.",
      "The universe clearing paths for your biggest ambitions.",
      "Unshakable confidence on days you feel uncertain.",
      "Heartwarming friendships that feel like warm blankets.",
      "A wallet as overflowing as your kind heart!"
    ]
  },

  // ─── 11. THE MOOD SURPRISE MACHINE (NEW #18.5) ──────────────────────────
  moodSurprise: {
    heading: "How Are You Feeling Today, Amu?",
    subheading: "Pick your current mood to receive your instant personalized universe prescription!",
    moods: [
      {
        id: "happy",
        label: "Happy 🌸",
        title: "Match Your Radiant Energy!",
        message: "Your happiness is literally contagious. The universe orders you to keep that glow alive and do a little celebratory dance right now!",
        surpriseGifText: "Dance level: 100/100 💃✨",
        accent: "from-pink-400 to-rose-400"
      },
      {
        id: "bored",
        label: "Bored 🥺",
        title: "Emergency Anti-Boredom Protocol!",
        message: "Did you know: Out of 8 billion people, you were scientifically calculated to be 98.7% cooler than everyone else? Also, go eat a delicious snack immediately!",
        surpriseGifText: "Boredom cancelled by presidential decree 🥑🧁",
        accent: "from-purple-400 to-indigo-400"
      },
      {
        id: "smile",
        label: "Need a Smile 😂",
        title: "One Free Smile Dispensed!",
        message: "Friendly reminder: Even when you make that funny squinty face when you're confused or trying to remember where you kept your things, you are still adorable.",
        surpriseGifText: "If you didn't smile, try reading this again while holding your tongue 😜",
        accent: "from-amber-400 to-orange-400"
      },
      {
        id: "love",
        label: "Need Some Love 💗",
        title: "A Huge Virtual Hug Incoming!",
        message: "Sending you the biggest, warmest, tightest bear hug! You are cherished, deeply appreciated, and you have people who love you unconditionally.",
        surpriseGifText: "Wrapped in 1,000,000 warm blankets of love 🤗💖",
        accent: "from-rose-400 to-pink-500"
      }
    ]
  },

  // ─── 12. GUESTBOOK / WISH WALL (NEW #18.7) ──────────────────────────────
  guestbook: {
    heading: "Leave a Little Piece of Happiness Here",
    subheading: "A warm space for friends and loved ones to write birthday notes and sweet wishes for Amu.",
    placeholderName: "Your Name / Nickname",
    placeholderMessage: "Write a sweet birthday wish for Amu...",
    buttonText: "Post Birthday Wish 🌸",
    initialWishes: [
      {
        id: 1,
        name: "Your Best Friend ❤️",
        message: "To the star of this universe — may your day be as spectacular, radiant, and unforgettable as you are!",
        date: "Today",
        avatar: "🎀"
      },
      {
        id: 2,
        name: "Secret Admirer of Your Vibe ✨",
        message: "Happy Birthday Amu! Keep brightening every room you step into!",
        date: "Today",
        avatar: "🌷"
      },
      {
        id: 3,
        name: "Friend Forever 🌟",
        message: "Wishing you infinite happiness, good health, and sweet treats today!",
        date: "Today",
        avatar: "🧁"
      }
    ]
  },

  // ─── 13. HIDDEN TREASURES & SECRET MESSAGE (NEW #18.9 & #10) ───────────
  hiddenTreasures: {
    totalToFind: 5,
    items: [
      { id: "charm-1", name: "Star of Radiance", section: "hero", hint: "Floating near the hero's crown" },
      { id: "charm-2", name: "Butterfly of Joy", section: "gallery", hint: "Perched near the photos" },
      { id: "charm-3", name: "Ribbon of Warmth", section: "reasons", hint: "Tucked inside the reasons deck" },
      { id: "charm-4", name: "Flower of Grace", section: "appreciation", hint: "Blooming in memories" },
      { id: "charm-5", name: "Key to the Universe", section: "cake", hint: "Near the glowing candles" },
    ],
    secretMessage: {
      badge: "Secret Discovery 🗝️",
      title: "Psst... A little secret just for you.",
      content: "Even on days when you don't feel your best, remember that you are someone worth celebrating.\n\nNever forget that. ❤️",
      unlockAllText: "✨ All 5 Universe Charms Discovered! You are officially the greatest explorer in this galaxy! ✨"
    }
  },

  // ─── 14. FINAL CELEBRATION ──────────────────────────────────────────────
  finalCelebration: {
    badge: "The Grand Finale 🎆",
    headline: "AMU, YOU DESERVE THE WHOLE UNIVERSE! 🌷",
    subheading: "May this year be filled with beautiful surprises, new adventures, endless laughter, and dreams coming true.",
    bigBanner: "HAPPY BIRTHDAY, AMU! ❤️",
    closingWords: "Stay magical. Stay wonderful. Stay YOU.",
    footerNote: "Made with lots of love, just for you.",
    sharePrompt: "Amu, I made something for you. Open it when you're free. ❤️",
    replayText: "Relive The Magic From The Beginning ✨",
  },

  // ─── 15. AUDIO & SOUND SETTINGS ─────────────────────────────────────────
  audio: {
    enabled: true,
    bgMusicUrl: "/music/birthday-ambient.mp3",
    trackTitle: "A Soft Melody For Amu",
    trackArtist: "Instrumental Dreams 🎹",
    enableChimes: true,
  }
};
