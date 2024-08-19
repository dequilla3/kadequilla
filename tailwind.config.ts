import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        // Override default min-width breakpoints or add new ones
        sm: "480px", // Custom small breakpoint
        md: "768px", // Custom medium breakpoint
        lg: "1024px", // Custom large breakpoint
        xl: "1440px", // Custom extra-large breakpoint
        "1xl": "1980", // Custom extra-large breakpoint
      },
    },
  },
  plugins: [],
};
export default config;
