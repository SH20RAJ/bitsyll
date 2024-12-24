import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";
import SuggestButton from "@/components/SuggestButton";
import { Metadata } from "@/constants/metadata";

const inter = Inter({ subsets: ["latin"] });

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <p>Loading...</p>,
});

export const metadata = Metadata;

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1828915420581549"
          crossOrigin="anonymous"
        ></script>
        <meta
          name="google-adsense-account"
          content="ca-pub-1828915420581549"
        ></meta>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={inter.className}>
        <div className="relative h-full w-full  ">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          </div>{" "}
          <Nav />
          <main>{children}</main>
          <div className="p-2">
            <SuggestButton />
          </div>
          <br />
          <Footer />
        </div>
      </body>
    </html>
  );
}
