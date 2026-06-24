import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        teal: {
          DEFAULT: "#008080",
          50: "#e6f4f4",
          100: "#cce9e9",
          600: "#006f6f",
          700: "#005b5b",
        },
        forest: {
          DEFAULT: "#0D492B",
          50: "#edf4ef",
          900: "#082f1c",
        },
        blush: {
          DEFAULT: "#FADBD8",
          50: "#fff8f7",
          100: "#fdf0ee",
        },
        gold: {
          DEFAULT: "#C38820",
          50: "#fbf5e9",
          600: "#a9731b",
          700: "#865b15",
        },
        ink: "#171916",
        paper: "#fffaf7",
        cream: "#f8f1e8",
      },
      fontFamily: {
        sans: ["var(--font-glacial)", "Arial", "sans-serif"],
        display: ["var(--font-tangerine)", "cursive"],
      },
      boxShadow: {
        soft: "0 20px 50px -28px rgba(13, 73, 43, 0.42)",
        card: "0 28px 80px -38px rgba(0, 0, 0, 0.35)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
