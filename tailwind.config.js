/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: "#0B1D3A",
        royalred: "#7C2522",
        royalgold: "#D4AF37",
      },
      fontFamily: {
        title: ["Cinzel", "serif"], // for headings
        body: ["EB Garamond", "serif"], // for paragraphs
      },
    },
  },
  plugins: [],
};
