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
        pink: "#F2A7C3",
        "pink-deep": "#C97AA0",
        "pink-light": "#FDF0F6",
        "pink-mid": "#FAD4E8",
        gold: "#C9A84C",
        "gold-dark": "#A07830",
        "gold-light": "#FBF5E6",
        "warm-white": "#FEFCFB",
        cream: "#FDF8F5",
        char: "#1A1A1A",
        mid: "#444444",
        muted: "#888888",
        border: "#F0D8E8",
        navy: "#073B6A",
        orchid: "#96088E",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1100px",
      },
      animation: {
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
