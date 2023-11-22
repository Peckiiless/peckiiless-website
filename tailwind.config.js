/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
      md: "900px",
    },
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
          200: "#E5DCDC",
        },
        "secondary-navy": "#444F77",
        "secondary-orange": "#f79761",
        nav: "#19416C",
        "light-white": {
          DEFAULT: "rgba(59,60,152,0.03)",
          100: "rgba(59,60,152,0.02)",
        },
        grey: "#2B3341",
        button: "rgba(255, 255, 255, 0.20)",
        grey200: "rgba(23, 63, 107, 0.10)",
        grey100: "rgba(207, 213, 220, 0.9)",
      },
      backgroundImage: {
        healthcare: "url('/adam.png')",
        productInfo: "url('/product.png')",
        productInfoBanner: "url('/blowing.png')",
        productInfoPattern: "url('/pattern-lady2.png')",
        patternLady: "url('/pattern-lady.png')",
        productPackage: "url('/package1.png')",
        footer: "url('/footer.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
