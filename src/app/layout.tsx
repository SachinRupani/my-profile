import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.sachinrupani.com";
const siteTitle = "Sachin Rupani | Mobile App Developer | React Native | Android";
const siteDescription =
  "An enthusiastic Mobile App Engineer with 10+ years of experience building & scaling React Native, Android, and iOS applications across healthcare and enterprise domains.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: "Sachin Rupani Portfolio",
  authors: [{ name: "Sachin Rupani", url: siteUrl }],
  creator: "Sachin Rupani",
  publisher: "Sachin Rupani",
  keywords: [
    "Sachin Rupani",
    "Mobile App Developer",
    "React Native Developer",
    "Android Developer",
    "iOS Developer",
    "Expo Developer",
    "TypeScript",
  ],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "profile",
    url: "/",
    title: siteTitle,
    description: siteDescription,
    siteName: "Sachin Rupani Portfolio",
    images: [
      {
        url: "/profile_pic_v2.webp",
        width: 512,
        height: 512,
        alt: "Sachin Rupani",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
    images: ["/profile_pic_v2.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
