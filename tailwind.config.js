/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#2e1846',
          800: '#3d1f58',
          700: '#4c266a',
          600: '#5b2d7c',
          500: '#6a348e',
          400: '#793ba0',
          300: '#8842b2',
          200: '#9749c4',
          100: '#a650d6',
        },
        accent: {
          500: '#aa85fc',
          600: '#8954d0',
          700: '#6e42a8',
        },
        brand: {
          primary: '#aa85fc',
          secondary: '#8954d0',
          text: '#8954d0',
          background: '#2e1846',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};