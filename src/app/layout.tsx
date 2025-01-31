import Header from "./Header";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Home from "./Home";
import Footer from "./Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Berita Kini",
  description: "Website for the latest news",
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
        <Header />
        <main className="px-4 py-8">
          <Home />
        </main>
      </body>
      <Footer />
    </html>
  );
}
