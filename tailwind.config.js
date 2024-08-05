/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        varela: ['"Varela"', "sans-serif"],
        manrope: ['"Manrope"', "sans-serif"],
        // Add more custom font families as needed
      },
    },
  },
  plugins: [require("daisyui")],
};
