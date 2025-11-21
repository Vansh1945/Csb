/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        boutique: {
          primary: "#6C4A4A",      // Warm Brown Rose – premium look
          secondary: "#F7EDE2",    // Soft Cream – elegant background
          accent: "#D0A5A5",       // Muted Pink – fashion feel
          textdark: "#2B2B2B",     // Dark Text
          highlight: "#9E5B5B",    // Buttons / Highlights
        }
      },
    },
  },
  plugins: [],
}
