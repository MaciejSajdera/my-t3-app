/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("tailwindcss"),
    require("@tailwindcss/typography"),
    require("autoprefixer"),
    require("daisyui"),
  ],
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        proxima: ["Proxima", "regular"],
      },
    },
  },
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
    themes: [
      "cupcake",
      {
        myDark: {
          primary: "#c4b5fd",
          secondary: "#7dd3fc",
          accent: "#fb7185",
          neutral: "#d1d5db",
          "base-100": "#374151",
          info: "#cffafe",
          success: "#a7f3d0",
          warning: "#fde68a",
          error: "#fb7185",
        },
      },
    ],
  },
};
