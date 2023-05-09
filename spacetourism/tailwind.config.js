/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primaryColor: "#0B0D17",
        secondaryColor: " #D0D6F9",
      },
      backgroundImage: {
        "sm-bg": "url('./src/assets/home/background-home-mobile.jpg')",
        "md-bg": "url('./src/assets/home/background-home-tablet.jpg')",
        "lg-bg": "url('./src/assets/home/background-home-desktop.jpg')",
      },
      screens: {
        sm: "375px",
        // => @media ( min-width : 375px)
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
