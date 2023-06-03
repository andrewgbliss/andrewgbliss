import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#00FFAD',
        secondary: '#121A2E',
      },
    },
  },
  plugins: [],
} satisfies Config;
