import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        moveSideways: "moveSideways 2s ease-in-out infinite",
        windMove: "windMove 3s infinite",
        rotateBranch: "rotateBranch 3s infinite",
        shake: "shake 1s infinite;",
      },
      fontFamily: {
        sans: ["Fresca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
