/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js"],
  plugins: [
    require("tw-elements/plugin.cjs"),
    require("@tailwindcss/line-clamp"),
  ],
  darkMode: "class",
};
