import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Adsense } from "@/components/Adsense";
import { Footer } from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All my gigs",
  description: "Create a lastfm collage from your gigs already viewd",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <div className="bg-white min-h-screen flex flex-col justify-between">
          <Header />
          {children}
          <Footer />
        </div>
      </body>

      <Adsense />
    </html>
  );
}
