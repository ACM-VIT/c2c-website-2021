module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screen: { "2xl": "1244px" },
      screens: {
        xs: "480px",
      },
      backgroundColor: {
        websiteBackground: "#121212",
        c2cBgGreen: "#48BA86",
      },
      colors: {
        graylight: "#F2F2F2",
        c2cTextgreen: "#48BA86",
        graydark: "#BDBDBD",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
