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
        primary: "#1BA5A5",
        navy: "#0B2A4A",
        lightGray: "#F8FAFC",
      },
      fontSize: {
        'h1': ['56px', { lineHeight: '1.1', fontWeight: '700' }],
        'h2': ['40px', { lineHeight: '1.2', fontWeight: '600' }],
        'body': ['18px', { lineHeight: '1.6' }],
      },
    },
  },
  plugins: [],
};
export default config;
