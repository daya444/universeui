/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "5px 5px 25px 1px rgba(14, 14, 14, 0.19)",
      },
    },
  },
  plugins: [],
};
