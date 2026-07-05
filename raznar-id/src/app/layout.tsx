import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Hosting Game Indonesia: Bikin Server Sendiri Jadi Lebih Seru | Raznar",
  description:
    "Raznar adalah penyedia solusi digital mencakup Cloud Server, Game Hosting, VPS, pengadaan IT, dan software custom. Kami hadir dengan performa tinggi dan dukungan andal untuk mendukung pertumbuhan digital Anda.",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased scroll-smooth`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-white font-sans">
        {children}
      </body>
    </html>
  );
}
