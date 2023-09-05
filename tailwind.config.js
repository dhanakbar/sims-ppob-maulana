/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      "primary-color": "#F42518",
      "secondary-color": "#FFF5F3",
      "neutral-color": "#383A3A",
      "white-color": "#f5f5f5",
      "gray-color": "#D9D9D9",
      "light-gray-color": "#f7f7f7",
      "green-color": "#35CE82",
      "red-color": "#FF5672",
    },
  },
  plugins: [require("flowbite/plugin")],
};
