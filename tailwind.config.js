/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

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

      colors: {
        'hive-status-100': '#F07474',
        'hive-status-200': '#9F7AEA',
        'hive-status-300': '#FFA553',
        'hive-status-400': '#FFB800',
        'hive-status-600': '#0AA882',
        'hive-status-700': '#0F6FC8',
        'hive-bluegray-700': '#4A5568',
        'hive-bluegray-800': '#2D3748',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      addComponents({
        '.body-2': {
          fontWeight: '400',
          fontSize: '13.5px',
          lineHeight: '14px',
        },
        '.h3': {
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '20px',
          letterSpacing: '-0.05em',
        },
      })
    }),
  ],
}
