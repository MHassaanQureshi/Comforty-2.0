import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header/Header";
import Navtop from "./components/Navtop/Navtop";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { CartProvider } from "./context/cartContext";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Comforty",
  description: "Created by Muhammad Hassaan Qureshi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
        <Header />
        <Navtop />
        <Navbar />
        {children}
        <Footer />
        </CartProvider>
      </body>
    </html>
  );
}