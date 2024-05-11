import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";

//using Exo2 font
const exo2 = Exo_2({ subsets: ["latin"] });


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
      <body className={`${exo2.className} bg-black text-white `}>{children}</body>
    </html>
  );
}
