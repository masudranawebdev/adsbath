import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AdsBath",
  description: " 🚧 Under Construction 🚧",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.2.3/animate.min.css"
        />
        <link
          rel="stylesheet"
          href="https://github.hubspot.com/odometer/themes/odometer-theme-minimal.css"
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
