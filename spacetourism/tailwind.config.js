/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
