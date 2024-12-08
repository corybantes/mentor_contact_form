import type { Metadata } from "next";
import { karla, italicKarla } from "../../public/fonts/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Contact Form",
  description: "Contact Form",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${karla.className} ${italicKarla.variable} antialiased bg-Primary-green200`}
      >
        {children}
      </body>
    </html>
  );
}
