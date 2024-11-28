import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Kosen Anime",
  description: "A web application for exploring and organizing anime.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="flex flex-col h-full bg-[#0D1B2A]">
        <div className="w-full">
          <Header />
            <main className="flex-1">
              {children}
            </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
