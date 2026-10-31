/**
 * Sound synthesis and audio manager using Web Audio API.
 * Provides soothing melodic ambient background music and magical sound effects:
 * - Sparkle chimes
 * - Candle blow puff & triumphant chime
 * - Envelope opening swoosh
 * - Gift box magic pop
 * - Gentle ambient piano/lullaby loop
 */

let audioCtx = null;
let ambientOscillators = [];
let ambientGainNode = null;
let isAmbientPlaying = false;
let ambientIntervalId = null;

function getAudioContext() {
  if (typeof window === 'undefined') return null;
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

/**
 * Play a delicate magical sparkle chime sound
 */
export function playSparkleSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51, 1567.98]; // C5, E5, G5, C6, E6, G6
  const now = ctx.currentTime;

  notes.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + idx * 0.05);

    gain.gain.setValueAtTime(0, now + idx * 0.05);
    gain.gain.linearRampToValueAtTime(0.08, now + idx * 0.05 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + idx * 0.05);
    osc.stop(now + idx * 0.05 + 0.65);
  });
}

/**
 * Play a gentle celebratory birthday fanfare / harp chime
 */
export function playCelebrationSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Pentatonic warm major arpeggio
  const chords = [
    { freq: 261.63, delay: 0.0 }, // C4
    { freq: 329.63, delay: 0.08 }, // E4
    { freq: 392.00, delay: 0.16 }, // G4
    { freq: 523.25, delay: 0.24 }, // C5
    { freq: 659.25, delay: 0.32 }, // E5
    { freq: 783.99, delay: 0.40 }, // G5
    { freq: 1046.50, delay: 0.50 }, // C6
  ];

  const now = ctx.currentTime;
  chords.forEach(({ freq, delay }) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, now + delay);

    gain.gain.setValueAtTime(0, now + delay);
    gain.gain.linearRampToValueAtTime(0.12, now + delay + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.2);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + delay);
    osc.stop(now + delay + 1.25);
  });
}

/**
 * Play a soft candle blow puff followed by magical release
 */
export function playCandleBlowSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Gentle breath noise
  const bufferSize = ctx.sampleRate * 0.4;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.15));
  }

  const noise = ctx.createBufferSource();
  noise.buffer = buffer;

  const filter = ctx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.setValueAtTime(800, now);
  filter.frequency.linearRampToValueAtTime(200, now + 0.35);

  const gain = ctx.createGain();
  gain.gain.setValueAtTime(0.15, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);

  noise.connect(filter);
  filter.connect(gain);
  gain.connect(ctx.destination);

  noise.start(now);

  // Followed with celebration chime
  setTimeout(() => {
    playCelebrationSound();
  }, 200);
}

/**
 * Play a soft cute click/pop for interactions
 */
export function playPopSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = 'sine';
  osc.frequency.setValueAtTime(587.33, now); // D5
  osc.frequency.exponentialRampToValueAtTime(880, now + 0.08); // A5

  gain.gain.setValueAtTime(0.08, now);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.start(now);
  osc.stop(now + 0.1);
}

/**
 * Soothing ambient piano-like dreamscape generator
 * Generates an endlessly evolving, dreamy chord progression in C/G major & A minor:
 * Gentle, peaceful, luxury hotel & spa atmosphere.
 */
export function startAmbientDreamscape(volume = 0.18) {
  const ctx = getAudioContext();
  if (!ctx || isAmbientPlaying) return;

  isAmbientPlaying = true;
  ambientGainNode = ctx.createGain();
  ambientGainNode.gain.setValueAtTime(volume, ctx.currentTime);
  ambientGainNode.connect(ctx.destination);

  // Warm chord progressions: Cmaj9, Am9, Fmaj7, Gsus4
  const progressions = [
    [261.63, 329.63, 392.00, 493.88, 587.33], // C, E, G, B, D
    [220.00, 261.63, 329.63, 392.00, 493.88], // A, C, E, G, B
    [174.61, 261.63, 329.63, 349.23, 440.00], // F, C, E, F, A
    [196.00, 261.63, 293.66, 392.00, 440.00], // G, C, D, G, A
  ];

  let chordIndex = 0;

  function playNextChord() {
    if (!isAmbientPlaying || !ctx) return;

    const chord = progressions[chordIndex % progressions.length];
    chordIndex++;

    const now = ctx.currentTime;

    // Play subtle bass note
    const bassOsc = ctx.createOscillator();
    const bassGain = ctx.createGain();
    bassOsc.type = 'sine';
    bassOsc.frequency.setValueAtTime(chord[0] / 2, now);
    bassGain.gain.setValueAtTime(0, now);
    bassGain.gain.linearRampToValueAtTime(0.05, now + 0.8);
    bassGain.gain.exponentialRampToValueAtTime(0.0001, now + 5.5);
    bassOsc.connect(bassGain);
    bassGain.connect(ambientGainNode);
    bassOsc.start(now);
    bassOsc.stop(now + 6.0);

    // Arpeggiate harmonic notes gently
    chord.forEach((freq, idx) => {
      const delay = idx * 0.35 + (Math.random() * 0.1);
      const noteOsc = ctx.createOscillator();
      const noteGain = ctx.createGain();

      noteOsc.type = 'triangle';
      noteOsc.frequency.setValueAtTime(freq, now + delay);

      noteGain.gain.setValueAtTime(0, now + delay);
      noteGain.gain.linearRampToValueAtTime(0.045, now + delay + 0.4);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 3.8);

      noteOsc.connect(noteGain);
      noteGain.connect(ambientGainNode);

      noteOsc.start(now + delay);
      noteOsc.stop(now + delay + 4.0);
    });
  }

  playNextChord();
  ambientIntervalId = setInterval(playNextChord, 4500);
}

export function stopAmbientDreamscape() {
  isAmbientPlaying = false;
  if (ambientIntervalId) {
    clearInterval(ambientIntervalId);
    ambientIntervalId = null;
  }
  if (ambientGainNode && audioCtx) {
    ambientGainNode.gain.linearRampToValueAtTime(0.0001, audioCtx.currentTime + 0.8);
    setTimeout(() => {
      ambientGainNode = null;
    }, 1000);
  }
}

export function toggleAmbientDreamscape(volume = 0.18) {
  if (isAmbientPlaying) {
    stopAmbientDreamscape();
    return false;
  } else {
    startAmbientDreamscape(volume);
    return true;
  }
}

export function isAmbientActive() {
  return isAmbientPlaying;
}
