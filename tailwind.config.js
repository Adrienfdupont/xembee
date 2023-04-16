/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "cooper-hewitt-light": ["Cooper-Hewitt-Light", "sans-serif"],
      "cooper-hewitt-bold": ["Cooper-Hewitt-Bold", "sans-serif"],
      azonix: ["Azonix", "sans-serif"],
    },
    extend: {
      colors: {
        "menu-blue": "#1e3e87",
        "footer-blue": "#d6ebe2",
        "title-blue": "#72a5a7",
        "sky-blue": "#a8d2f2",
      },
      keyframes: {
        "menu-open": {
          "0%": {transform: "translateX(-100%)"},
          "100%": {transform: "translateX(0%)"},
        },
        "menu-closed": {
          "0%": {transform: "translateX(0%)"},
          "100%": {transform: "translateX(-100%)"},
        },
      },
      animation: {
        "menu-open": "menu-open 0.3s ease-in-out forwards",
        "menu-closed": "menu-closed 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
}

