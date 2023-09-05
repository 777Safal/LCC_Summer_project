/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        robotSlab:['Roboto Slab'],
        roboto:["Roboto"],
      },
      colors:{
        instagram:'#E4405F'
      }
    },
  },
  plugins: [],
}

