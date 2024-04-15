import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/Navbar";
import { getDaySuffix } from "@/lib/utils";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: `TrinitySpeak - ${
    new Date().toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
    }) +
    getDaySuffix(new Date().getDate()) +
    ", " +
    new Date().getFullYear()
  }`,
  description: "The best place to discuss verses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="lofi">
      <body>
        <Toaster />
        <div className="flex flex-col gap-4">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
