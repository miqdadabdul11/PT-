import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: "#4a1722",
          dark: "#351018",
          light: "#5e1d2b",
        },
        wine: {
          DEFAULT: "#7a2433",
          hover: "#8c293b",
          light: "#a33649",
        },
        stone: {
          DEFAULT: "#f3f0ec",
          muted: "#e8e3dc",
          light: "#faf8f5",
        },
        sand: {
          DEFAULT: "#d8cfc4",
          dark: "#beaf9e",
          light: "#e9e3da",
        },
        charcoal: {
          DEFAULT: "#1e1a1b",
          muted: "#453f41",
          light: "#6e6669",
        },
        brass: {
          DEFAULT: "#c99a3d",
          hover: "#b38731",
          light: "#dfb052",
        },
        dark: {
          bg: "#170b0e",
          surface: "#251216",
          surfaceBorder: "#3b1e24",
          text: "#efe8e2",
          textMuted: "#b3a6a1",
        },
      },
      fontFamily: {
        heading: ["var(--font-bricolage)", "sans-serif"],
        body: ["var(--font-jakarta)", "sans-serif"],
      },
      borderRadius: {
        'card-sm': '16px',
        'card': '24px',
        'card-lg': '28px',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(30, 26, 27, 0.05)',
        'elevated': '0 12px 32px -4px rgba(30, 26, 27, 0.08)',
        'brass-glow': '0 0 20px rgba(201, 154, 61, 0.3)',
      },
    },
  },
  plugins: [],
};
export default config;
