/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#07070b',
        surface: '#0d0d14',
        accent: {
          DEFAULT: '#4f3df6',
          light: '#8b7bff',
          dark: '#1a1145',
        },
        cyber: '#00f0c0',
        pop: '#d4ff3a',
        hot: '#ff4fd8',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        chunky: ['"Unbounded"', '"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        accent: ['"Instrument Serif"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-slate': 'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'brand-gradient': 'linear-gradient(135deg, #05050a 0%, #1a1145 45%, #4f3df6 100%)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'marquee-reverse': 'marquee-reverse 32s linear infinite',
        blob: 'blob 18s ease-in-out infinite',
        'blob-slow': 'blob 26s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 14s linear infinite',
        wiggle: 'wiggle 3s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(4%, -6%) scale(1.08)' },
          '66%': { transform: 'translate(-3%, 4%) scale(0.95)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(4deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
      },
    },
  },
  plugins: [],
}
