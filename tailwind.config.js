/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'], // Default sans font
        serif: ['Merriweather', 'serif'], // Default serif font
        cursive: ['DynaPuff', 'cursive'], // Cursive font for headings
        playfair: ['Playfair Display', 'serif'], // Specific font family for specific use
      },
    },
  },
  plugins: [
    daisyui,
  ],
}