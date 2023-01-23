/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
  },
  daisyui: {
    themes: [
      {
        jarrowChiro: {
                
        "primary": "#6E0B75",
                
        "secondary": "#007EBD",
                
        "accent": "#F8860D",
                
        "neutral": "#1F2937",
                
        "base-100": "#FFFFFF",
                
        "info": "#009cdc",
                
        "success": "#36D399",
                
        "warning": "#FBBD23",
                
        "error": "#F87272",
                },
              },
            ],
          },
  plugins: [require("daisyui")],
}
