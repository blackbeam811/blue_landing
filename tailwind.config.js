/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "plasma": "linear-gradient(97.18deg, #5C61FF 28.16%, #1B25F2 48.8%)",
        "power": "linear-gradient(92.44deg, rgba(255, 255, 255, 0.3) -12.74%, #FFFFFF 45.34%, rgba(255, 255, 255, 0.3) 115.22%)",
        "fire": "linear-gradient(180deg, rgba(26,35,239,.85) 0%, rgba(214,51,255,.85) 30%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 100%)"
      },
      borderColor: {
        "gra": "linear-gradient(180deg, rgba(26, 35, 239, 0.85) 0%, rgba(214, 51, 255, 0) 56.28%)",
        "par": "linear-gradient(180deg, rgba(255, 255, 255, 0.12) -11.44%, #666666 100%)"
      }
    },
  },
  plugins: [],
};


// border-image-source: linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)),
// linear-gradient(180deg, rgba(26, 35, 239, 0.85) 0%, rgba(214, 51, 255, 0) 56.28%);


