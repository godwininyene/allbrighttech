/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#0000FF',
        'primary-dark':'#355E3B',
        'my-grey':'rgb(40, 44, 49)',
        'my-grey-light':'rgb(122, 122, 122)'
      }
    },
  },
  plugins: [],
}