/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: '#FFFAF2',
        orange: {
          DEFAULT: '#F8A340',
          light: '#FFC38C',
        },
        green: {
          DEFAULT: '#7A9B6C',
          light: '#A1BE94',
        },
        red: {
          DEFAULT: '#D76258',
          light: '#FFBCB6',
        },
        blue: {
          DEFAULT: '#9C9CE5',
          light: '#C2C2F5',
        },
      },
    },
  },
  plugins: [],
}

