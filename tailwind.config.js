/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      theme: {
        green: '#5C885C',
        gray: '#6b7280'
      },
      spacing: {
        navItem: '0.425rem'
      }
    },
  },
  plugins: [],
}

