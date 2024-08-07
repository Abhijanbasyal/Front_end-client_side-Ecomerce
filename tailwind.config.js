/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#303030",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
};
