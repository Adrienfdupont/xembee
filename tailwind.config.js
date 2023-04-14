/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      "cooper-hewitt": ["Cooper-Hewitt", "sans-serif"],
      "cooper-hewitt-light": ["Cooper-Hewitt-Light", "sans-serif"],
      "cooper-hewitt-bold": ["Cooper-Hewitt-Bold", "sans-serif"],
      azonix: ["Azonix", "sans-serif"],
    },
    extend: {
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

