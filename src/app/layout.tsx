import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import SplashCursor from "@/components/shared/SplashCursor";

// Local fonts - no external requests, fastest option
const amarante = localFont({
  src: "../fonts/Amarante-Regular.ttf",
  variable: "--font-amarante",
  display: "swap",
});

const aladin = localFont({
  src: "../fonts/Aladin-Regular.ttf",
  variable: "--font-aladin",
  display: "swap",
});

const pirataOne = localFont({
  src: "../fonts/PirataOne-Regular.ttf",
  variable: "--font-pirata-one",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Teacher Gamer",
  description: "Safe and fun way to learn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${amarante.variable} ${aladin.variable} ${pirataOne.variable}`}
    >
      <body className="antialiased">
        {children}

        <SplashCursor />
      </body>
    </html>
  );
}
