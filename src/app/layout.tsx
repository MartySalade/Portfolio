import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin Mallein - Portfolio",
  description: "Welcome to my website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <div className="z-10 absolute opacity-15 h-full w-full bg-gradient-to-r bg-opacity-10 from-black via-blue-500 to-black" /> */}
        <main className="relative min-h-screen">
          {children}
          <Toaster richColors />
          <Footer />
        </main>
      </body>
    </html>
  );
}
