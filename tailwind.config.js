/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Secoundry': '#f7f7f7',
      },
      spacing:{
        '100vh':'100vh',
        '100%': '100%',
        '50%':'50%',
        '66rem': '66rem',
        '64rem':'64rem',
        '16':'3.8rem',
        '26rem': '26rem',
        '28rem': '28rem',
        '27rem':'27rem',
        '47rem':'47rem',
        '30rem': '30rem',
        '60%': '60%',
        '33%': '33%',
        '70%':'70%'
      },
    },
  },
  plugins: [],
}