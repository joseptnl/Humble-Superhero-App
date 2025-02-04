/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5B6EE1",
        secondary: "#FF6F91",
        background: "#F9FAFB",
        card: "#FFFFFF",
        accent: "#FBBF24",
        text: "#2D3748",
        muted: "#CBD5E0",
      },
      fontFamily: {
        sans: ['Inter"', "sans-serif"],
      },
      boxShadow: {
        cool: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
