/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkBG: "#02075c",
        lightBG: "#1F1F1F",
        cardColor: "EEE4FF",
      },
    },
  },
  plugins: [daisyui],
};
