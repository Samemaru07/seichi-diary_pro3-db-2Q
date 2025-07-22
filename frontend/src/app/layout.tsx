import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Mochiy_Pop_One, Yusei_Magic, Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/features/ClientLayout";
import AppClientLayout from "@/features/mobile-layout/AppClientLayout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const yuseiMagic = Yusei_Magic({
  variable: "--font-header",
  subsets: ["latin"],
  weight: "400"
});

const mochiyPopOne = Mochiy_Pop_One({
  variable: "--font-pageTitle",
  subsets: ["latin"],
  weight: "400"
})

const zenMaruGothic = Zen_Maru_Gothic({
  variable: "--font-contents",
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "さめまるの聖地巡礼日記ブログ",
  description: "高専生「さめまる」の聖地巡礼日記です♪",
  keywords: ["アニメ", "anime", "聖地巡礼", "seichi", "ガンダム", "Gundam", "さめまる", "Samemaru", "samemaru", "高専", "高専生", "石川高専"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png"
  },
  manifest: "/manifest.json"
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${mochiyPopOne.variable} ${yuseiMagic.variable} ${zenMaruGothic.variable} antialiased`}
      >
        <ClientLayout>
          <AppClientLayout>
            {children}
          </AppClientLayout>
        </ClientLayout>
      </body>
    </html>
  );
}
