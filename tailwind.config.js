/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blackss: "hsl(0deg 0% 0%)",
        redss: "hsl(356deg 86% 50%)",
        greenss: "hsl(115deg 86% 33%)",
        bluess: "hsla(228, 86%, 33%, 1)",
        orangess: "hsla(36, 95%, 47%, 1)",
        yellowss: "hsla(59, 98%, 67%, 1)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
