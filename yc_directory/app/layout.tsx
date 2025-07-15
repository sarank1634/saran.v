import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const workSans = localFont({
  src: [
    {
      path: "./assets/fonts/WorkSans-Regular.ttf",
      weight: "900",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-BLack.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./assets/fonts/WorkSans-Bold.ttf",
      weight: "900",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-SemiBold.ttf",
      weight: "500",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-Medium.ttf",
      weight: "900",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-ExtraLight.ttf",
      weight: "900",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-Light.ttf",
      weight: "900",
      style: "normal",
    },{
      path: "./assets/fonts/WorkSans-Regular.ttf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC",
  description: "Pitch your code with directory",
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        {children}
      </body>
    </html>
  );
}
