/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f7',
          100: '#ffe8ed',
          200: '#ffd0da',
          300: '#fca9ba',
          400: '#f67693',
          500: '#ec456e',
          600: '#d62451',
        },
        lavender: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
        },
        champagne: {
          50: '#fdfbf7',
          100: '#f9f4ea',
          200: '#f2e6cf',
          300: '#e8d2a8',
          400: '#dcb87c',
          500: '#cfa258',
          600: '#b8863f',
        },
        cream: {
          50: '#fffdf9',
          100: '#fcf8f0',
          200: '#f8f1e3',
          300: '#f0e5cf',
        },
        peach: {
          50: '#fff7f2',
          100: '#ffede3',
          200: '#ffd9c7',
          300: '#ffbca1',
          400: '#f99573',
        },
        rosegold: {
          300: '#e5b3b8',
          400: '#d49199',
          500: '#b76e79',
          600: '#9b545f',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cormorant Garamond', 'Georgia', 'serif'],
        script: ['"Dancing Script"', '"Caveat"', '"Great Vibes"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-medium': 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.06)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        }
      }
    },
  },
  plugins: [],
}
