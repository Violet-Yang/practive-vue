/** @type {import('tailwindcss').Config} */

const rootSize = 16
const convertRemToPx = px => px / rootSize + 'rem'

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  // content: [],

  theme: {
    extend: {
      spacing: {
        5: convertRemToPx(5),
        10: convertRemToPx(10),
        30: convertRemToPx(30),
        36: convertRemToPx(36),
        40: convertRemToPx(40),
        45: convertRemToPx(45),
        50: convertRemToPx(50),
        55: convertRemToPx(55),
        60: convertRemToPx(60),
        100: convertRemToPx(100),
        150: convertRemToPx(150),
        200: convertRemToPx(200),
        250: convertRemToPx(250),
        400: convertRemToPx(400),
        500: convertRemToPx(500),
        600: convertRemToPx(600),
      },
    },
  },
  plugins: [],
}
