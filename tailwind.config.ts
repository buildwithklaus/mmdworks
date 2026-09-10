import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eaf2fa",
          100: "#cfe1f2",
          300: "#6ea6d4",
          500: "#0A4D8C",
          600: "#083f72",
          700: "#063258",
          900: "#031a2e",
        },
        secondary: {
          50: "#e9f9ee",
          100: "#c6f0d3",
          300: "#5fd18a",
          500: "#1FA84A",
          600: "#188a3c",
          700: "#116b2e",
        },
        charcoal: {
          DEFAULT: "#1C1F26",
          light: "#2E323C",
        },
        gray: {
          50: "#F8F9FA",
          100: "#F1F3F5",
          200: "#E5E8EB",
          400: "#9AA3AC",
        },
      },
      fontFamily: {
        heading: ["var(--font-poppins)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        card: "0 8px 30px rgba(10, 77, 140, 0.08)",
        "card-hover": "0 16px 40px rgba(10, 77, 140, 0.15)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 0.7s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;