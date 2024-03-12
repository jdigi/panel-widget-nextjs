import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blue_50: "#0073DD",
      neutral_80: "#CCCCCC",
      primary_20: "#4D0001",
      primary_30: "#600C20",
      primary_40: "#A61518",
      primary_60: "#ED0000",
    },
    fontSize: {
      "title-lg": "3rem",
      "title-sm": "1.875rem",
      "heading-md": "1.5rem",
      "heading-sm": "1.25rem",
      "body-md": "1.125rem",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
