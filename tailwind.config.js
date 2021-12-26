const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["sans-serif"],
      serif: ["Noto Serif TC", "serif"],
      shojumaru: ["Shojumaru", "cursive", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      red: "#a60219",
      gold: "#e7ab53",
    },
    extend: {},
  },
  variants: {
    extend: {
      borderWidth: ["hover", "active"],
    },
  },
  plugins: [],
};
