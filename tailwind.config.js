/** @type {import('tailwindcss').Config} */

const rootSize = 16
const convertRemToPx = px => px / rootSize + 'rem'

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],

  theme: {
    extend: {
      spacing: {
        10: convertRemToPx(10),
        50: convertRemToPx(50),
        55: convertRemToPx(55),
        60: convertRemToPx(60),
        100: convertRemToPx(100),
        150: convertRemToPx(150),
        200: convertRemToPx(200),
        250: convertRemToPx(250),
      },
    },
  },
  plugins: [],
}
