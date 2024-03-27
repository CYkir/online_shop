/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'luckiest': ['Luckiest Guy', 'cursive', 'serif'],
        'mochiy' : ['Mochiy Pop One', 'cursive', 'serif'],
        'moul': ['Moul', 'cursive', 'serif' ],
        'source' : ['Source Sans 3', 'sans-serif']
      },
    },
  },
  plugins: [],
}

