import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import dynamic from "next/dynamic";
import SuggestButton from "@/components/SuggestButton";
import { Metadata } from "@/constants/metadata";
import { Menu } from "@/components/Menu";

// Using Plus Jakarta Sans for a more premium look
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-40 bg-[#0a1129]"></div>,
});

export const metadata = Metadata;

export default function RootLayout({ children }) {
  let script = `window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-225MVECG7S');
`;

  return (
    <html lang="en" className={`dark ${jakarta.variable}`}>
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
        <meta name="theme-color" content="#0a1129" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />
      </head>
      <body className={jakarta.className}>
        <div className="relative min-h-screen bg-[#0a1129]">
          {/* Global background elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-[#0a1129]" />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e3a8a10_1px,transparent_1px),linear-gradient(to_bottom,#1e3a8a10_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <Nav />
          <main className="pb-24">{children}</main>

          <div className="fixed bottom-24 right-6 z-40">
            <SuggestButton />
          </div>

          <Menu />
          <Footer />
        </div>
      </body>
    </html>
  );
}
