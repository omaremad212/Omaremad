import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Background } from "@/components/Background";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://omaremad.dev"),
  title: "Omar Emad — WordPress & AI Fullstack Developer",
  description:
    "I build websites that work for your business — fast, smart, and powered by AI. WordPress expert + AI-powered workflow = faster delivery and better results.",
  keywords: [
    "WordPress developer",
    "AI developer",
    "fullstack developer",
    "Next.js developer",
    "web development",
    "Omar Emad",
    "AI-powered websites",
    "WooCommerce",
  ],
  authors: [{ name: "Omar Emad" }],
  creator: "Omar Emad",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://omaremad.dev",
    siteName: "Omar Emad Portfolio",
    title: "Omar Emad — WordPress & AI Fullstack Developer",
    description:
      "I build websites that work for your business — fast, smart, and powered by AI.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Omar Emad — WordPress & AI Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Emad — WordPress & AI Fullstack Developer",
    description:
      "I build websites that work for your business — fast, smart, and powered by AI.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-black text-neutral-200 antialiased font-sans">
        <CustomCursor />
        <Background />
        {children}
      </body>
    </html>
  );
}
