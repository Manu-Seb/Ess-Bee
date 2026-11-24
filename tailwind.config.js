/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        body: 'rgb(var(--body-rgb) / <alpha-value>)',
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        'paper-warm': 'var(--card-white)',
        alternate: 'var(--alternate)',
        'gold-hover': 'var(--gold-hover)',
        warm: 'var(--border-warm)',
        gold: 'rgb(var(--gold-rgb) / <alpha-value>)',
        'gold-dark': 'var(--gold-dark)',
        cardamom: 'rgb(var(--cardamom-rgb) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      borderRadius: { card: '12px', panel: '20px' },
      boxShadow: { soft: 'var(--shadow-soft)', lift: 'var(--shadow-lift)', primary: 'var(--shadow-primary)', nav: 'var(--shadow-nav)' },
    },
  },
  plugins: [],
}
