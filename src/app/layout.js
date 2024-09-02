import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

// Dynamically import the Footer component
const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading...</p>, // Optional: You can show a loading indicator while the Footer is being loaded
});

export const metadata = {
  title: "BitSyll",
  description: "Bitsyll - BIT Meshra - Study Repository",
};

export default function RootLayout({ children }) {
  let script = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-225MVECG7S');
`;

  return (
    <html lang="en" className="dark">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-225MVECG7S"
        ></script>
        <script dangerouslySetInnerHTML={{ __html: script }} />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
