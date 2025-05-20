/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // Adjust depending on your file types
  ],
  theme: {
    extend: {
      screens:{
         'max-680': {'max': '680px'},
        
      }
    },
  },
  plugins: [],
}
