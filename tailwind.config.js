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
        black: "#373a3c",
        darkenGray: '#999',
        tag: '#aaa',
      },
      spacing: {
        navItem: "0.425rem",
        tag: "0.6rem",
        0.3: "0.3rem",
        0.2: "0.2rem",
      },
    },
    fontSize: {
      date: '0.8rem',
    },
    borderRadius: {
      buttonSm: '0.2rem',
      tag: "10rem",
    }
  },
  plugins: [],
};
