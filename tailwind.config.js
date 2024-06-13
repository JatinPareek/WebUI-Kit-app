/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        silver: "#c4c4c4",
        dimgray: "#626976",
        gray: "#0a1a36",
        royalblue: {
          "100": "#3882ff",
          "200": "#135ce7",
        },
        slategray: {
          "100": "#7a828f",
          "200": "#636f87",
          "300": "rgba(122, 130, 143, 0.09)",
        },
        gainsboro: {
          "100": "#e6e6e6",
          "200": "rgba(230, 230, 230, 0.09)",
        },
        black: "#000",
        whitesmoke: "#eaeaea",
        darkgray: "#a8a8a8",
        cornflowerblue: "#6799f9",
      },
      spacing: {},
      fontFamily: {
        "be-vietnam-pro": "'Be Vietnam Pro'",
        poppins: "Poppins",
      },
      borderRadius: {
        "8xs-3": "4.3px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      lg: "18px",
      "33xl": "52px",
      "12xl": "31px",
      "23xl": "42px",
      lgi: "19px",
      "4xl": "23px",
      "11xl": "30px",
      xl: "20px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      lg: {
        max: "1200px",
      },
      mq1150: {
        raw: "screen and (max-width: 1150px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq900: {
        raw: "screen and (max-width: 900px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq600: {
        raw: "screen and (max-width: 600px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
