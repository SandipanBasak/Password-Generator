/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors:{
      'biscuit':'#FFEAE3',
      'blue':'#121481',
      'pink':'FFB1B1',
      'lightpink':'#FFCBCB'
    },
    textColor:{
      'biscuit':'#FFEAE3',
      'blue':'#121481',
      'pink':'FFB1B1',
      'lightpink':'#FFCBCB'
    }
  },
  },
  plugins: [],
}

