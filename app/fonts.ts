import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Outfit, Young_Serif } from "next/font/google";

export const youngSerif: NextFontWithVariable = Young_Serif({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--young-serif",
});

export const outfit: NextFontWithVariable = Outfit({
  weight: ["400", "600", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--outfit",
});
