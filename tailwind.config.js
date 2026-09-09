/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0D0E13",
        panel: "#15171F",
        line: "#242631",
        pulse: "#FF3D68",
        signal: "#3BD1C9",
        paper: "#F5F4F1"
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"]
      },
      borderRadius: {
        clip: "10px"
      }
    }
  },
  plugins: []
};
