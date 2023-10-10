/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        main: "#0057b8",
        secondary: "#091c47",

        yellowca: "#EFD372",
        whitefa: "#FAFAFA",
        whitetwo: "#F9F8F8",
        whitethree: "#F1F8F4",
        whitefour: "#ECECEC",
        dark: "#525C60",
      },

      backgroundImage: {
        "hero-pattern": "url('/img/banner/hero.jpg')",
        "address-pattern": "url('/img/address/address-01.jpg')",
        "address-two-pattern": "url('/img/address/address-02.jpg')",
        "address-three-pattern": "url('/img/address/address-03.jpg')",
        "address-four-pattern": "url('/img/address/address-04.jpg')",
      },
    },

    fontFamily: {
      roboto: ["Roboto"],
      yellowtail: ["Yellowtail"],
      opensans: ["Open Sans"],
    },

    screens: {
      sm: "640px", // => @media (min-width: 640px) { ... }
      md: "768px", // => @media (min-width: 768px) { ... }
      lg: "1024px", // => @media (min-width: 1024px) { ... }
      xl: "1124px", // => @media (min-width: 1280px) { ... }
      "2xl": "1480px", // => @media (min-width: 1280px) { ... }
    },

    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
