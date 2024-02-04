/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#ffffff",
        main: "#274C5B",
        whitefa: "#FAFAFA",
        whitetwo: "#F9F8F8",
        whitethree: "#F1F8F4",
        whitefour: "#ECECEC",
        secondary: "#7EB693",
        yellowca: "#EFD372",
        dark: "#525C60",
      },

      backgroundImage: {
        "hero-pattern": "url('/img/banner/hero.png')",
        "news-letter": "url('/img/banner/newsletter.jpg')",
        "offer-one": "url('/img/banner/offer-1.png')",
        "offer-two": "url('/img/banner/offer-2.png')",
        "banner-about": "url('/img/banner/banner-about.png')",
        "banner-blog": "url('/img/banner/banner-blog.png')",
        "banner-contact": "url('/img/banner/banner-contact.jpg')",
        "banner-service": "url('/img/banner/banner-service.png')",
        "banner-shop": "url('/img/banner/banner-shop.png')",
        "banner-protfolio": "url('/img/banner/banner-protfolio.png')",
        "banner-team": "url('/img/banner/banner-team.jpg')",
        "banner-shop-single": "url('/img/banner/banner-shop-single.jpg')",
        "banner-service-single": "url('/img/banner/banner-service-single.jpg')",

        "project-together": "url('/img/bg-1.jpg')",
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
  plugins: [],
};
