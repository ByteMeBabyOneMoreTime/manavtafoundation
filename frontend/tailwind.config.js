/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slide: "slide 10s linear infinite", // Custom slide animation
        "plant-grow-1": "plant-grow-1 5s ease-in-out infinite",
        "plant-grow-2": "plant-grow-2 6s ease-in-out infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(100%)" }, // Start from the right
          "100%": { transform: "translateX(-100%)" }, // Move to the left
        },
        "plant-grow-1": {
          "0%, 100%": { transform: "scale(0.9) rotate(-5deg)" },
          "50%": { transform: "scale(1.1) rotate(5deg)" },
        },
        "plant-grow-2": {
          "0%, 100%": { transform: "scale(0.8) rotate(5deg)" },
          "50%": { transform: "scale(1.2) rotate(-5deg)" },
        },
      },
    },
  },
  plugins: [],
};
