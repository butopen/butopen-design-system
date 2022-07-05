module.exports = {
  content: ["./src/**/*.{scss}", "./index.html"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        bop: "var(--bo-primary-color)",
        bos: "var(--bo-secondary-color)",
      },
    },
  },
  plugins: [],
};
