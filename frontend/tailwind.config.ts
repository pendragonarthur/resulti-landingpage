import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        lato: ["var(--font-lato)", "sans-serif"],
        exo2: ["var(--font-exo2)", "sans-serif"],
      },
      colors: {
        "resoluti-primary": "#0D2B4F",
        "resoluti-secondary": "#1E5A9A",
        "resoluti-accent": "#00A878",
        "resoluti-light": "#F0F4F8",
        "resoluti-text-dark": "#1A1A1A",
        "resoluti-text-light": "#555555",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
