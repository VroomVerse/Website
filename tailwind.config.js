/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#000",
        darkgray: {
          "100": "#a1a1a1",
          "200": "#989696",
        },
        gray: "#2b2b2b",
        mediumseagreen: "#32c86e",
        gainsboro: {
          "100": "#e0e0e0",
          "200": "#d9d9d9",
        },
        aqua: "#12ebf9",
        dimgray: "#636363",
      },
      fontFamily: {
        inter: "Inter",
        "jockey-one": "'Jockey One'",
        "ibm-plex-serif": "'IBM Plex Serif'",
        macondo: "Macondo",
      },
      borderRadius: {
        "3xs": "10px",
      },
    },
    fontSize: {
      "11xl": "1.88rem",
      xl: "1.25rem",
      "6xl": "1.56rem",
      "16xl": "2.19rem",
      "4xl": "1.44rem",
      "5xl": "1.5rem",
      "9xl": "1.75rem",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
