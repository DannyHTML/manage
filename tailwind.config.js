/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(12, 88%, 59%)",
        secondary: "hsl(228, 39%, 23%)",
      },
    },
    fontFamily: {
      main: ["Be Vietnam Pro", "sans-serif"],
    },
  },
  plugins: [],
};
