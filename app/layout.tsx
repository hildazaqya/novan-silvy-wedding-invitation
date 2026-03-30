import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Rasa, Dancing_Script } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const rasa = Rasa({
  variable: "--font-rasa",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Novan Silvy Wedding Invitation",
  description: "Join us in celebrating the wedding of Novan and Silvy on April 26, 2026.",
  icons: {
    icon: "/image/asset/logo-wedding.webp",
  },
  openGraph: {
    title: "Novan Silvy Wedding Invitation",
    description: "Join us in celebrating the wedding of Novan and Silvy on April 26, 2026.",
    images: [
      {
        url: "/image/asset/logo-wedding.webp",
        width: 512,
        height: 512,
        alt: "Novan & Silvy Wedding",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${rasa.variable} ${dancingScript.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/image/asset/logo-wedding.webp" type="image/webp" />
        <link rel="apple-touch-icon" href="/image/asset/logo-wedding.webp" />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
