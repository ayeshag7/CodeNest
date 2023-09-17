/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      width: {
        'editW': '520px',
        'in-w': '680px'
      },
      colors: {
        'notePink': '#ff6b6b',
        'lightNotePink': '#FFE3E3',
        'lighterPink': '#FFF0F0',
        'lightGrey': '#F1F5F9'
      }
    },
  },
  plugins: [],
}

