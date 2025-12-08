import type { Metadata } from "next";
import "./globals.css";

import SplashCursor from "@/components/shared/SplashCursor";

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
    <html lang="en">
      <body className="antialiased">
        {children}

        <SplashCursor />
      </body>
    </html>
  );
}
