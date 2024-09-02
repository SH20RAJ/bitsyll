import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitsyll",
  description: "Bitsyll - BIT Meshra - Study Repository",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
