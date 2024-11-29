/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      ralewayFt: ['"Raleway", sans-serif'],
      robotoFt: ['"Roboto", serif'],
    },
    extend: {
      colors: {
        mainBg: "#F0F3E5",
        skyblue: "#9EFCF1",
        darkBlue: "#1E1E1E",
      },
    },
  },
  plugins: [],
};
