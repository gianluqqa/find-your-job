/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        specialgothic: ['"Special Gothic Condensed One"', 'Arial', 'Helvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
