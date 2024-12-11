/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        lrBackground: '#2e0660',
        btnPink: '#d400ff'
      }
    },
  },
  plugins: [],
}