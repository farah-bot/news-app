"use client";
import "./globals.css";
import React, { useEffect } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";


export default function RootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, []);

  return (
    <html lang="id">
      <body>
        <Header />
        <main className="px-4 py-8 min-h-screen">{children}</main>
      </body>
      <Footer />
    </html>
  );
}
