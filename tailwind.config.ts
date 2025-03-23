import type { Config } from "tailwindcss";

const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      None: "100%",
      xs: { min: "200px", max: "500px" },
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1440px",
    },
    extend: {
      colors: {
        SiteColor: "#1563df",
        Title: "#161e2d",
        Desc: "#5c6368",
      },
      filters: {
        filter:
          "brightness(100%)_contrast(100%)_saturate(0%)_blur(0px)_hue-rotate(0deg)",
      },
      boxShadow: {
        aboutShadow: "0px 5px 25px rgba(0,0,0,0.10)",
        solutionsShadow: "0px 30px 60px 0px rgba(0, 0, 0, 0.1019607843)",
      },
    },
  },
  plugins: [],
});
export default config;
