import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#12111A",
        surface: "#1C1B26",
        elevated: "#24222F",
        border: "#332F42",
        ink: "#F5F3F7",
        muted: "#938FA3",
        record: "#FF3B5C",
        volt: "#7C5CFC",
        go: "#33D69F",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
