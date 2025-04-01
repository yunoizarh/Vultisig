/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { primary: "#02122b" },
      backgroundImage: {
        customGradient: "linear-gradient(to bottom, #092759, #02122b)",
        bgImg: "url('src/assets/Polygon3.svg')",
        boxBg1: "url('src/assets/asfalt-light.png')",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
