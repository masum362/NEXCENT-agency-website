/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    , "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        branchPrimary: "#4CAF4F",
        branchSecondary: "#263238",
        neutralGray: "#717171",
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
