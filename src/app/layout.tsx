import "./globals.css";

import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter, JetBrains_Mono } from "next/font/google";

import { Cursor } from "@/components/Cursor";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Nav } from "@/components/Nav";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/react";

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Martin Mallein — Frontend & Software Engineer",
  description:
    "Portfolio of Martin Mallein — frontend & software engineer based in Toulouse, France. I turn digital challenges into polished products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`dark ${display.variable} ${sans.variable} ${mono.variable}`}
    >
      <body className="font-sans">
        <Grain />
        <Cursor />
        <Nav />
        <main className="relative min-h-screen">
          {children}
          <Analytics />
          <Toaster richColors />
          <Footer />
        </main>
      </body>
    </html>
  );
}
