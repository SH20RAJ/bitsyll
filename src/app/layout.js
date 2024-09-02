import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bitsyll",
  description: "Bitsyll - BIT Meshra - Study Repository",
};

export default function RootLayout({ children }) {
  let script = `  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-225MVECG7S');
`;

  return (
    <html lang="en" className=" dark">
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
        <br />
      <iframe
        src="https://archive.org/embed/LuisFonsiDespacitoFt.DaddyYankee_201712"
        width={"100%"}
        height={60}
        frameBorder={0}
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
