/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fredoka': ['Fredoka', 'sans-serif'],
        'plus': ['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        theme : '#F4C755',
        dark_theme: '#9F8137',
        theme_orange: '#F60'
      }
    },
    
  },
  plugins: [],
}

