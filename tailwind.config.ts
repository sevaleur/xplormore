import type { Config } from "tailwindcss";
import fluid, { extract } from "fluid-tailwind";
import { heroui } from "@heroui/react";

export default {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
      "./node_modules/@heroui/theme/dist/**/*.{js, ts, jsx, tsx}",
    ],
    extract,
  },
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        black: {
          DEFAULT: "#020001",
        },
        white: {
          DEFAULT: "#eff5f5",
        },
        gray: {
          DEFAULT: "#a4b9be",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [fluid, heroui()],
} satisfies Config;
