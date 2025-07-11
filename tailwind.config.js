/** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
      serif: ['"Playfair Display"', 'serif'],
    },
   animation: {
    scaleUp: 'scaleUp 3s ease-in-out forwards',
  },
  keyframes: {
    scaleUp: {
      '0%': { transform: 'scale(1.2)' },
      '100%': { transform: 'scale(1)' },
    },
  },
      
    },
  },
  plugins: [],
};