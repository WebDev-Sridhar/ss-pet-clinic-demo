/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0F4C5C',
          dark: '#0A3742',
          light: '#17697E',
        },
        coral: {
          DEFAULT: '#FF6B6B',
          dark: '#E85555',
          light: '#FF8A8A',
        },
        cream: {
          DEFAULT: '#FFF8F0',
          dark: '#F5EDE3',
          light: '#FFFCF8',
        },
      },
    },
  },
  plugins: [],
}
