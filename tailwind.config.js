/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#1d3124',
        bgMain:'#4A5A4F',
        textMain: '#F2F2F2',
        textContainer: '#D3D3D3',
      },
      fontFamily: {
        'Josefin': ['Josefin Sans', 'sans-serif'],
        'Playfair': ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
