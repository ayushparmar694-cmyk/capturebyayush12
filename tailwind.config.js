/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#ECCB8E',
          DEFAULT: '#D6B574',
          dark: '#A9833D',
        },
        obsidian: {
          900: '#080808',
          800: '#0D0D0F',
          700: '#141416',
          600: '#1A1A1E',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '"Plus Jakarta Sans"', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        'widest-xl': '0.35em',
        'widest-2xl': '0.45em',
      },
    },
  },
  plugins: [],
}
