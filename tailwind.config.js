/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {  // custom light theme
          "primary": "#09764c",
          "secondary": "#f5f5f5",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff",
          "info": "#2094f3",
          "success": "#009485",
          "warning": "#ff9900",
          "error": "#ff5724",
          "--rounded-box": "1rem", // border radius
        },
        dark: {  // custom dark theme
          "primary": "#22c55e",
          "secondary": "#1f2937",
          "accent": "#67e8f9",
          "neutral": "#191d24",
          "base-100": "#111827",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
          "--rounded-box": "1rem",
        },
      },
    ],
    darkTheme: "dark", // default dark theme
  },
};
