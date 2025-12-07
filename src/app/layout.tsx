import type { Metadata } from "next";
import "./globals.css";
import SplashCursor from "@/components/shared/SplashCursor";
import { Header } from "@/components/header";
import Footer from "@/components/footer";

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
        <Header />
        {children}
        <Footer />
        <SplashCursor />
      </body>
    </html>
  );
}
