import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { Adsense } from "@/components/Adsense";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "All my gigs",
  description: "Create a lastfm collage from your gigs already viewd",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <Adsense />
      </Head>
      <body className={inter.className}>
        <div className="bg-gradient-to-tl from-neutral-200 via-neutral-100 to-white">
          {children}
        </div>
      </body>
    </html>
  );
}
