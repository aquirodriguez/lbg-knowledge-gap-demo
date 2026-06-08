/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      boxShadow: {
        glass: "0 24px 70px rgba(42, 40, 33, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.78)",
        gold: "0 18px 64px rgba(220, 161, 45, 0.28), 0 0 38px rgba(246, 205, 105, 0.34)"
      }
    }
  },
  plugins: []
};
