import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#6366F1",
          light: "#818CF8",
          dark: "#4F46E5",
        },
        fire: {
          DEFAULT: "#F97316",
          light: "#FB923C",
          dark: "#EA580C",
        },
        water: {
          DEFAULT: "#3B82F6",
          light: "#60A5FA",
          dark: "#2563EB",
        },
        nature: {
          DEFAULT: "#22C55E",
          light: "#4ADE80",
          dark: "#16A34A",
        },
        shadow: {
          DEFAULT: "#8B5CF6",
          light: "#A78BFA",
          dark: "#7C3AED",
        },
        light: {
          DEFAULT: "#FBBF24",
          light: "#FCD34D",
          dark: "#F59E0B",
        },
        neutral: {
          DEFAULT: "#9CA3AF",
          light: "#D1D5DB",
          dark: "#6B7280",
        },
        surface: {
          DEFAULT: "#1F2937",
          light: "#374151",
          dark: "#111827",
        },
        rarity: {
          common: "#9CA3AF",
          uncommon: "#2DD4BF",
          rare: "#3B82F6",
          epic: "#A855F7",
          legendary: "#F59E0B",
        },
      },
    },
  },
  plugins: [],
};
export default config;
