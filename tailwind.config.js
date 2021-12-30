module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        wave: "wave 1s infinite",
      },
      keyframes: {
        wave: {
          "75%": {
          },
          "100%": {
            transform: "scale(2)",
            opacity: 0,
          },
        },
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
};
