/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C1B47',
          light: '#3D2861',
          dark: '#1A0F2E',
        },
        accent: {
          DEFAULT: '#B83D6F',
          light: '#D44B84',
          dark: '#8C2E54',
        },
        navy: '#1F4373',
        teal: '#206676',
        purple: '#4A2B6B',
      },
    },
  },
  plugins: [],
};