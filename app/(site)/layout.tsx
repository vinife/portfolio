import { Geist, Geist_Mono } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./site.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description: "Portfolio pessoal com projetos e artigos gerenciados no Outstatic.",
};


export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} site-shell antialiased`}
    >
      <body>
      <Header />
      
      {children}
      <Footer /></body>
      </html>
  );
}
