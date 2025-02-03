module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
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
        sans: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        cool: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [],
};
