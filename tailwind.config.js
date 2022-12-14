/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1200px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1200px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "banner-pattern": "url('/images/micaelabanner.png')",
      },
      colors: {
        rose: "#ba6e70",
        amber: "#efeae4",
        orange: "#B99E82",
        bege: "#dcc3c3",
      },
    },
  },
  plugins: [],
};
