import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },

      boxShadow: {
        'green-faded': '0 -4px 50px -3px rgba(34, 197, 94, 0.15), 0 -4px 50px -3px rgba(34, 197, 94, 0.15)', // Adjust color and opacity as needed
          'custom-bottom-right': '2px 2px 8px rgba(0, 0, 0, 0.5)',
          // 'sharp-right-bottom': '4px 4px 0px rgba(0, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
};
export default config;
