import confetti from 'canvas-confetti';

/**
 * Custom pastel & champagne gold color palette for Amu's universe
 */
const AMU_PALETTE = ['#FCA9BA', '#F67693', '#E8D2A8', '#CF929E', '#E1BEE7', '#FFF0F5', '#FFD1DC', '#D4AF37'];

/**
 * Standard celebratory confetti blast
 */
export function fireHeartConfetti(origin = { x: 0.5, y: 0.6 }) {
  try {
    confetti({
      particleCount: 75,
      spread: 70,
      origin,
      colors: AMU_PALETTE,
      shapes: ['circle', 'square'],
      ticks: 200,
      gravity: 0.8,
      scalar: 1.1,
    });
  } catch (e) {
    console.error('Confetti error:', e);
  }
}

/**
 * Massive grand celebration burst (for cake blow and celebration mode)
 */
export function fireGrandCelebration() {
  try {
    const end = Date.now() + 2.5 * 1000;
    const colors = AMU_PALETTE;

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (e) {
    console.error('Confetti error:', e);
  }
}

/**
 * Burst fireworks from a specific screen coordinate (x, y normalized 0-1)
 */
export function fireAtCoordinate(x, y) {
  try {
    confetti({
      particleCount: 45,
      spread: 80,
      startVelocity: 30,
      origin: { x, y },
      colors: AMU_PALETTE,
      ticks: 150,
      scalar: 1.0,
    });
  } catch (e) {
    console.error('Coordinate confetti error:', e);
  }
}
