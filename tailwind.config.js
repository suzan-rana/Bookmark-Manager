/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans]
      },
      screens: {
        sm: '480px',
        md: '780px',
        lg: '976px',
        big: '1000px',
        xl: '1440px',
  
      },
      colors: {
        "bookmark-purple": "#5267DF",
        "bookmark-red": "#FA5959",
        "bookmark-blue": "#242A45",
        "bookmark-grey": "#9194A2",
        "bookmark-white": "#f7f7f7",
      },
    },
  },
  plugins: [],
}