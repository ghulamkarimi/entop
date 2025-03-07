import type { Metadata } from "next";
import { Geist, Geist_Mono, Delius } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Navbar from "@/components/menu/Navbar";
import Footer from "@/components/footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const delius = Delius({
  weight: "400",
  variable: "--font-delius",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Entop Sicherheit",
  description: "Generated by Ghulam Karimi",
  icons: {
    icon: "/entop.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${delius.variable} antialiased bg-gray-100`}
      >
         <header>
          <Header />
        </header>
        <nav>
          <Navbar />
        </nav>
        <main>{children}</main>
        <footer>
        <Footer />
        </footer>
      </body>
    </html>
  );
}
