/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
      },
      fontFamily: {
        montserrat: "'Montserrat', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        //light theme
        calmblu: {
          primary: "#6384E9",

          secondary: "#cce7ff",

          accent: "#83c4d1",

          neutral: "#2D223F",

          "base-100": "#F3F2F7",

          info: "#2CB6D8",

          success: "#22D377",

          warning: "#C48208",

          error: "#EF4E6B",
        },
        // dark theme
        nightblu: {
          primary: "#1689af",

          secondary: "#71bcc6",

          accent: "#85cbe2",

          neutral: "#29253C",

          "base-100": "#1D2734",

          info: "#3668D3",

          success: "#45DE8A",

          warning: "#FBB904",

          error: "#E55D7A",
        },
      },
    ],
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "night",
  },
};
