/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        dm: ["DM Serif Display", "sans-serif"],
      },
      colors: {
        "black-100": "#2B2C35",
        primary: {
          DEFAULT: "#E7717D",
          900: "#9A1750",
          800: "#AC3B61",
          700: "#B2335E",
        },
        "secondary-orange": "#f79761",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#2B3341",
      },
      backgroundImage: {
        healthcare: "url('/adam.png')",
        productInfo: "url('/product.png')",
        productInfoBanner: "url('/blowing.png')",
        productPackage: "url('/package1.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
