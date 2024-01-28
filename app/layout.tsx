import "@/styles/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { outfit, youngSerif } from "./fonts";

export const metadata: Metadata = {
  title: "Recipe Page",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  return (
    <html lang="en" className={`${youngSerif.variable} ${outfit.variable}`}>
      <body className="flex flex-col items-center bg-eggshell">{children}</body>
    </html>
  );
};

export default RootLayout;
