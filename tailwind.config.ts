import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary:"#1b1a1f",
        secondary:"#38373d",
        text:"#f3fff5",
        divider:"#444348"
      },
    },
  },
  plugins: [],
};
export default config;
