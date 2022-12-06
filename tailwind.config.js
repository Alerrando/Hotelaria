/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sombreado': 'rgba(0, 0, 0, 0.3)'
      }
    },
  },
  plugins: [],
}