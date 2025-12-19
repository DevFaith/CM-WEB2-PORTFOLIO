/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed", // purple-600
        accent: "#ec4899",  // pink-500
      },
      animation: {
        cloud1: "cloud1 50s linear infinite",
        cloud2: "cloud2 80s linear infinite",
        cloud3: "cloud3 110s linear infinite",
        cloud4: "cloud4 70s linear infinite reverse",
      },
      keyframes: {
        cloud1: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100vw)" } },
        cloud2: { "0%": { transform: "translateX(100vw)" }, "100%": { transform: "translateX(-100%)" } },
        cloud3: { "0%": { transform: "translateX(-100%)" }, "100%": { transform: "translateX(100vw)" } },
        cloud4: { "0%": { transform: "translateY(-100%)" }, "100%": { transform: "translateY(100vh)" } },
      },
    },
  },
  plugins: [],
}