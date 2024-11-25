/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-text':'linear-gradient(to right, #00f, #8a2be2, #ff69b4)', 
      },
      textColor: {
        'gradient': 'transparent',
      },
      fontFamily:{
        Lora:["Lora","sans-serif"],
      },

    },
  },
  plugins: [],
}