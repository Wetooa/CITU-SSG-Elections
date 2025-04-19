import Navbar from "@/components/navbar/navbar";
import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "PROJECT E",
  description:
    "PROJECT E is an interactive platform for CIT-U's SSG Elections. It helps students explore candidate profiles, platforms, and achievements, with tools like a countdown to voting day, live vote tally, and a side-by-side comparison feature. Designed for clarity and accessibility, it empowers students to make informed choices throughout the election process.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* FIX: Change this to dynamic color variables later */}
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} font-sans antialiased min-h-screen min-w-screen bg-gradient-to-b from-background to-[#141415] text-white drop-shadow-2xl flex flex-col`}
      >
        <Navbar />

        <main className="flex-1 flex items-center justify-center w-full p-6">
          <div className="w-full max-w-[1000px]">{children}</div>
        </main>
      </body>
    </html>
  );
}
