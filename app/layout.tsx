import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });
const perFont = localFont({
  src: "./../public/Fonts/iransansdn.woff",
  variable: "--perFont",
  style: "swap",
});
const vazirFont = localFont({
  src: "./../public/Fonts/VAZIR-FD-WOL.woff",
  variable: "--vazirFont",
  style: "swap",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${perFont.variable} ${vazirFont.variable} min-h-screen overflow-x-hidden`}
      >
      <main className={"w-screen min-h-screen overflow-x-clip"}>
          <Header />
          {children}
      </main>
      </body>
    </html>
  );
}
