/** @type {import('tailwindcss').Config} */

export default {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundSize: {
        'auto-100': 'auto 100%',
        'auto-150': 'auto 150%',
        'auto-170': 'auto 170%',
        'auto-190': 'auto 190%',
      },
      backgroundPosition: {
        'top-right': '130% 20%',
      },
      fontFamily: {
        helvCond: ['helvetica-neue-lt-pro-cond', "sans-serif"],
        termina: ['termina', "sans-serif"],
        zeitung: ['"zeitung"', 'sans-serif'],
        barlow: ['Barlow', 'sans-serif'],
        novecento: ['"novecento-sans-wide"', 'sans-serif'], 
        sfUltralight: ['SF Pro Display Ultralight', 'sans-serif'],
        sfCompactUltralight: ['SF Compact Display Ultralight', 'sans-serif'],
        sfLight: ['SF Compact Display Light', 'sans-serif'],
        sfThin: ['SF Compact Display Thin', 'sans-serif'],
        sfRegular: ['SF Compact Display Regular', 'sans-serif'],
        sfMedium: ['SF Compact Display Medium', 'sans-serif'],
        sfSemiBold: ['SF Compact Display SemiBold', 'sans-serif'],
        sfBold: ['SF Compact Display Bold', 'sans-serif'],
        sfBlack: ['SF Compact Display Black', 'sans-serif'],
        sfHeavy: ['SF Compact Display Heavy', 'sans-serif'],
      },
    },
  },
  plugins: [],
}