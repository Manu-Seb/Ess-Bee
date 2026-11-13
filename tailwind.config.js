/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#28251f',
        paper: '#fbfaf7',
        gold: { 100: '#f3ead4', 300: '#d9c18d', 500: '#b89652', 700: '#92723a' },
        emerald: { 50: '#edf5f1', 100: '#d9e9e1', 700: '#14543f', 800: '#0d4433' },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      boxShadow: { soft: '0 24px 70px rgba(54, 44, 24, .10)' },
    },
  },
  plugins: [],
}
