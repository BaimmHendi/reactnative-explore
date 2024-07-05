/* @type {import('tailwindcss').Config}*/
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pjsbold:["PlusJakartaSans-Bold", "sans-serif"],
        pjsbolditalic:["PlusJakartaSans-BoldItalic", "sans-serif"]
      }
    },
  },
  plugins: [],
}

