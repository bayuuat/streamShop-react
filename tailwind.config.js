/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      '2xl': '1537px',
      // => @media (min-width: 1536px) { ... }
    }
  },
  plugins: [],
}

