/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 10s linear infinite", // Custom slide animation
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" }, // Start from the right
          "100%": { transform: "translateX(-100%)" }, // Move to the left
        },
      },
    },
  },
  plugins: [],
};
