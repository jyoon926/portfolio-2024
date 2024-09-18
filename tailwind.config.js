/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'rgba(var(--background), 1)',
        foreground: 'rgba(var(--foreground), 1)',
        light: 'rgba(var(--foreground), 0.1)',
      },
      borderColor: {
        DEFAULT: 'rgba(var(--foreground), 0.2)',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [],
};
