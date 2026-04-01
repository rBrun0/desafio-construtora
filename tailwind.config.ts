import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: "#323538",
        mostard: "#BC9C57",
      },
      keyframes: {
        spinUp: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(70%)" },
        },
        spinDown: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(-75%)" },
        },
        marqueeLeft: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeRight: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        spinUp: "spinUp 950s linear infinite",
        spinDown: "spinDown 950s linear infinite",
        marqueeLeft: "marqueeLeft 30s linear infinite",
        marqueeRight: "marqueeRight 30s linear infinite",
      },
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
