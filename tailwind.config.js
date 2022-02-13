module.exports = {
  content: ["./src/**/*.{scss}", "./index.html"],
  important: true,
  mode: "jit",
  theme: {
    extend: {
        colors: {
          "bop": "var(--bo-primary-color)",
          "bos": "var(--bo-secondary-color)"
        }
    },
  },
  plugins: [],
}
