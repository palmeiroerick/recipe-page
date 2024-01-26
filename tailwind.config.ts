import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      md: "1440px",
    },
    colors: {
      nutmeg: "hsl(14, 45%, 36%)",
      darkRaspberry: "hsl(332, 51%, 32%)",
      white: "hsl(0, 0%, 100%)",
      roseWhite: "hsl(330, 100%, 98%)",
      eggshell: "hsl(30, 54%, 90%)",
      lightGrey: "hsl(30, 18%, 87%)",
      wengeBrown: "hsl(30, 10%, 34%)",
      darkCharcoal: "hsl(24, 5%, 18%)",
    },
    fontFamily: {
      youngSerif: "var(--young-serif)",
      outfit: "var(--outfit)",
    },
    fontWeight: {
      normal: "400",
      semibold: "600",
      bold: "700",
    },
  },
};

export default config;
