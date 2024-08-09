/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#2590F2',
        'secondary': '#ffffff',
        'tertiary': '#FE712A',
        'quaternary': '#292A3C',
      },
    },
    fontFamily: {
      'DS': ['Dancing Script', 'sans-serif'],
    },
  },
  plugins: [],
}