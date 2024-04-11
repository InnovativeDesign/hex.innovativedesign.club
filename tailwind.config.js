/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./fonts/**/*.{js,ts,jsx,tsx,mdx, otf, ttf, woff, woff2}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        druk: ['Druk', 'san-serif'],
        vivaldi: ['Vivaldi', 'san-serif'],
      },
    },
  },
  plugins: [],
};
