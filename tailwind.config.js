/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        darkgray: '#2d373c',
        primary: {
          dark: '#d73425',
          DEFAULT: '#ff4838',
          light: '#f8857f',
        },
      },
    },
  },
  plugins: [],
}

