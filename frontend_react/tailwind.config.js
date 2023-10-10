/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
          'loginHolder':'#262626',
          'loginField':'#2f2f2f'
        },
    },
  },
  plugins: [],
}

