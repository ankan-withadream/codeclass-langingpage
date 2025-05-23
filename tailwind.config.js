/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0f0018',
          800: '#1a0029',
          700: '#25003a',
          600: '#30004b',
          500: '#3b005c',
          400: '#46006d',
          300: '#51007e',
          200: '#5c008f',
          100: '#6700a0',
        },
        accent: {
          500: '#aa85fc',
          600: '#8954d0',
          700: '#6823a4',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};