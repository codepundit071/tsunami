const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,tsx,jsx,ts}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      borderRadius: {
        '4xl': '2rem',
      },
      fontFamily: {
        po: ['var(--font-po)'],
        display: ['Lexend', ...defaultTheme.fontFamily.sans],
        sector: ['Sectar'],
      },
      maxWidth: {
        '2xl': '40rem',
        '8xl': '88rem',
      },
      animation: {
        bright: 'brightin 0.5s linear',
        glitch: 'glitch 500ms infinite',
        gtrans: 'glitch 250ms infinite',
        glitchReveal: 'glitchReveal 8s infinite',
        glitchReveal2: 'glitchReveal2 8s infinite',
      },
      colors: {
        'off-white': '#9E9E9E',
        primary: '#09090B',
        lic: '#08010E',
        secondary: '#222228',
      },
      letterSpacing: {
        button: '.2rem',
      },
      keyframes: {
        glitchReveal2: {
          '0%, 88%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        glitchReveal: {
          '0%, 33%': { opacity: 0 },
          '45%, 57%': { opacity: 1 },
          '58%, 100%': { opacity: 0 },
        },
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.9 },
        },
        glitch: {
          '0% 14%': { textShadow: 'none' },
          '15%': {
            textShadow: `0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '20%': {
            textShadow: `0.05em 0 0 rgba(255, 0, 0, 0.75),
              -0.05em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em 0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '30%': {
            textShadow: `-0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '49%': {
            textShadow: `-0.05em -0.025em 0 rgba(255, 0, 0, 0.75),
              0.025em 0.025em 0 rgba(0, 255, 0, 0.75),
              -0.05em -0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '50%': {
            textShadow: `0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '99%': {
            textShadow: `0.025em 0.05em 0 rgba(255, 0, 0, 0.75),
              0.05em 0 0 rgba(0, 255, 0, 0.75), 0 -0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
          '100%': {
            textShadow: `-0.025em 0 0 rgba(255, 0, 0, 0.75),
              -0.025em -0.025em 0 rgba(0, 255, 0, 0.75),
              -0.025em -0.05em 0 rgba(0, 0, 255, 0.75)`,
          },
        },
        brightin: {
          '0%': { opacity: 0, filter: `brightness(1) blur(20px)` },
          '10%': { opacity: 1, filter: `brightness(2) blur(10px)` },
          '100%': { opacity: 1, filter: `brightness(1) blur(0)` },
        },
      },
      backgroundImage: {
        'hero': "url('/background.png')",
        'hero-grad': "linear-gradient(300deg, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/background.png');",
        'pixel-art': "url('/pixel_art.png')"
      }
    },
  },
  plugins: [],
};
