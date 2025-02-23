import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#1A1A1A",
        primary: "#41B883",
        card: "#2D2D2D",
        accent: "#61DAFB",
        softgray: "#8B8B8B",
      },
    },
  },
  plugins: [],
} satisfies Config;
