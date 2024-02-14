/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "AmaticSC": ["AmaticSC"],
        "IndieFlower": ["IndieFlower"],
        "Kanya": ["Kanya"],
        "PermanentMarker": ["PermanentMarker"]
      },
      boxShadow: {
        "widget": "0px 0px 10px 1px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        "error": "#CB444A",
        "warning": "#F5C344",
        "success": "#53A551",
        "info": "#6E757C",
        "backgroundDark": "#171717",
        "widgetDark": "#1A1A1A",
        "widgetShadowDark": "#0000004B",
        "widgetBorder": "#2d2d2d",
        "textDark": "#dedede",
        "subtextDark": "#aaaaaa",
        "debugColor": "#0E294B"
      }
    },
  },
  plugins: [],
};
