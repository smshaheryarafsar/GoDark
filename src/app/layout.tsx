import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import FavIcon from "./favicon.ico";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GoDark - Landing Page",
  description: "Theme drafted by GoDark",
};

const ClashDisplayVariable = localFont({
  src: "./fonts/ClashDisplay-Variable.woff",
  variable: "--font-clash-display-variable",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={FavIcon.src} type="image/png" sizes="32x32" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ClashDisplayVariable.variable} `}
      >
        {children}
      </body>
    </html>
  );
}
