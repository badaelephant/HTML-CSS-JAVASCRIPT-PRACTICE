module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        "300px": "300px",
        "500px": "500px",
        "650px": "650px",
      },
      height: {
        "300px": "300px",
        "500px": "500px",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  variants: {
    extend: { rotate: ["last", "first"] },
  },
  plugins: [],
};
