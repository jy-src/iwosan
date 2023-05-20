/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "vmc-100": "#100DB1",
        "vmc-200": "#343434",
        "vmc-300": "#F80D38",
        "vmc-400": "#FECA57",
        "vmc-500": "#763CEF",
        "vmc-600": "#2798F7",
        "vmc-700": "#E7E7E7",
        "vmc-800": "#F7F7F7",
        "tw-dark-100": "#050517",
        "tw-dark-200": "#0C0C35",
      },
    },
  },
  plugins: [],
};
