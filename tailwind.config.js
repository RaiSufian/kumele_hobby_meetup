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
      }
    },
    
  },
  plugins: [],
}

