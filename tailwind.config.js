/** @type {import('tailwindcss').Config} */

function setColors(color) {
  return {
    50: `rgb(var(--${color}-50))`,
    100: `rgb(var(--${color}-100))`,
    200: `rgb(var(--${color}-200))`,
    300: `rgb(var(--${color}-300))`,
    400: `rgb(var(--${color}-400))`,
    500: `rgb(var(--${color}-500))`,
    600: `rgb(var(--${color}-600))`,
    700: `rgb(var(--${color}-700))`,
    800: `rgb(var(--${color}-800))`,
    900: `rgb(var(--${color}-900))`,
    950: `rgb(var(--${color}-950))`,
  };
}

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        "xs-phone": "320px",
        "sm-phone": "360px",
        "base-phone": "390px",
        "lg-phone": "440px",
        "xl-phone": "480px",
      },
      colors: {
        primary: setColors("primary"),
        secondary: setColors("secondary"),
        ebony: setColors("ebony"),
        flower: setColors("flower"),
      },
    },
    fontFamily: {
      plexSansSerif: ["IBM Plex Serif", "sans-serif"],
      plexSans: ["IBM Plex Sans", "sans-serif"],
    },
  },
};
