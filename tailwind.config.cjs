module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        sc: "hsl(172, 67%, 45%)",
        vdc: "hsl(183, 100%, 15%)",
        dgc1: "hsl(186, 14%, 43%)",
        dgc2: "hsl(184, 14%, 56%)",
        lgc1: "hsl(185, 41%, 84%)",
        lgc2: "hsl(189, 41%, 97%)",
      },
      fontFamily: {
        base: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
