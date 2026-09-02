/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          navy:    '#0a0f24',   // Deep navy from logo
          magenta: '#92278F',   // Rich magenta from logo
          emerald: '#00A651',   // Emerald green accent from logo
        }
      },
      fontFamily: {
        sans:    ['Inter', 'sans-serif'],
        heading: ['Sora', 'sans-serif'],
      },
      animation: {
        'marquee':      'marquee 28s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'float-slow':   'float-slow 8s ease-in-out infinite',
        'pulse-slow':   'pulse-slow 4s ease-in-out infinite',
        'spin-slow':    'spin-slow 20s linear infinite',
        'shimmer':      'shimmer 3s linear infinite',
        'draw':         'draw 3s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%':      { transform: 'translateY(-16px) rotate(1deg)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'pulse-slow': {
          '0%, 100%': { opacity: '0.6' },
          '50%':      { opacity: '1' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to:   { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        draw: {
          from: { strokeDashoffset: '1000' },
          to:   { strokeDashoffset: '0' },
        },
      },
      boxShadow: {
        'brand-sm':  '0 4px 16px rgba(43, 57, 144, 0.10)',
        'brand-md':  '0 8px 32px rgba(43, 57, 144, 0.14)',
        'brand-lg':  '0 16px 48px rgba(43, 57, 144, 0.18)',
        'magenta-sm': '0 4px 16px rgba(146, 39, 143, 0.12)',
        'magenta-md': '0 8px 32px rgba(146, 39, 143, 0.16)',
      },
      borderRadius: {
        '2.5xl': '1.25rem',
        '3xl':   '1.5rem',
        '4xl':   '2rem',
        '5xl':   '2.5rem',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      backdropBlur: {
        '3xl': '64px',
      },
    },
  },
  plugins: [],
}
