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
        theme_orange: '#F60',
        light: "#959595",
        dark: '#262626',
        theme_blue: "#38579E",
        bg_light:"#F4F4F4",
        light_text: "#4D4D4D",
        page_bg:"#f0f0f0"
      }
    },
    
  },
  plugins: [],
}

