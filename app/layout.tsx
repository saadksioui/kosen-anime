import type { Metadata } from "next";
import "./globals.css";


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
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
