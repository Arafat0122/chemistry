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
        roboto: ['Roboto', 'sans-serif'], // Default sans font
        merriweather: ['Merriweather', 'serif'], // Default serif font
        cursive: ['DynaPuff', 'cursive'], // Cursive font for headings
        playfair: ['Playfair Display', 'serif'], // Specific font family for specific use
        audiowide: ['Audiowide', 'serif'], // Specific font family for specific use
      },
    },
  },
  plugins: [
    daisyui,
  ],
}