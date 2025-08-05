import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "../styles/menustyle.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Making a Difference | Turner",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const homeContent = await fetch("http://localhost:3000/api/homeContent");
  const homeData = await homeContent.json();
  const footer = homeData.footer;
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-y-scroll orange-scroll`}
      >
        <Navbar />
        
        {children}
        <Footer footer={footer} />
      </body>
    </html>
  );
}
