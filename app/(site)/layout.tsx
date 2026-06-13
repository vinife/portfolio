import { Space_Mono, Open_Sans, Cal_Sans, Tilt_Warp } from "next/font/google";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./site.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400",
  subsets: ["latin"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});

const calSans = Cal_Sans({
  variable: "--font-cal-sans",
  weight: "400",
  subsets: ["latin"],
});

const tiltWarp = Tilt_Warp({
  variable: "--font-tilt-warp",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Portfolio",
    template: "%s | Portfolio",
  },
  description:
    "Portfolio pessoal com projetos e artigos gerenciados no Outstatic.",
};

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${spaceMono.variable} ${openSans.variable} ${calSans.variable} ${tiltWarp.variable} site-shell antialiased`}
    >
      <body className="flex min-h-screen flex-col">
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  );
}
