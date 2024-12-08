import localFont from "next/font/local";

export const karla = localFont({
  src: "./Karla-VariableFont_wght.ttf",
  variable: "--font-karla",
  weight: "100 900",
  display: "swap",
});

export const italicKarla = localFont({
  src: "./Karla-Italic-VariableFont_wght.ttf",
  variable: "--font-italic-karla",
  weight: "100 900",
  display: "swap",
});
