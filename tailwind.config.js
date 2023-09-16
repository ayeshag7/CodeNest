/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'in-w': '680px'
      },
      colors: {
        'notePink': '#ff6b6b',
        'lightGrey': '#F1F5F9'
      }
    },
  },
  plugins: [],
}

