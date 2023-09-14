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
        theme: '#FFC533',
        dark_theme: '#9F8137',
        theme_orange: '#F60',
        light: "#959595",
        dark: '#262626',
        theme_blue: "#004DFF",
        bg_light: "#F4F4F4",
        bg_light1: "#e3e3e3",
        bg_dark: "#4a454e",
        light_text: "#4D4D4D",
        light_text: "#808080",
        text_dark: "#2D2D2D",
        page_bg: "#f0f0f0",
        light_border: "#EEECEC",
        theme_white: "#F1F1F1",
        white_border: "#CFCFCF",
        theme_yellow: "#FFC533",
        theme_red: "#F00",
        theme_border: "#BCBCBC",
        theme_silver: "#151515",
        theme_dark: "#525252",
        light_bg: "#C4C4C4",
        theme_orange: "#CD7F32"
      }
    },

  },
  plugins: [],
}

