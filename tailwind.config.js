/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      theme: {
        green: "#5C885C",
        darkGreen: "#064e3b",
        gray: "#6b7280",
        lightGray: "#d6d3d1",
        white: "#fffaf0",
      },
      spacing: {
        navItem: "0.425rem",
        0.3: "0.3rem",
      },
    },
    fontSize: {
      date: '0.8rem',
    },
    borderRadius: {
      buttonSm: '0.2rem',
    }
  },
  plugins: [],
};
