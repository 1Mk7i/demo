import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Navigation, Footer } from "@/components/layout";
import { gradientClasses } from "@/components/ui/utils/gradients";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next.js Demo - Навчальний проєкт",
  description: "Демонстрація створення сторінок у Next.js App Router",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen ${gradientClasses.lightSectionBg}`}
      >
        <Navigation />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
