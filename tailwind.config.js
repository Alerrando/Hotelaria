/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'sombreado': 'rgba(0, 0, 0, 0.3)'
      },
      gridTemplateRows: {
        sidebar: "10% 70% 15%",
      },
      gridTemplateColumns: {
        "projetos": "repeat(auto-fit, minmax(300px, 1fr));",
      },
    },
  },
  plugins: [],
}