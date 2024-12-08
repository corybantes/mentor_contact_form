import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",

        Primary: {
          green200: "hsl(var(--green-200))",
          green600: "hsl(var(--green-600))",
          red: "hsl(var(--red))",

          grey500: "hsl(var(--grey-500))",
          grey900: "hsl(var(--grey-900))",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
