import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";
import Script from "next/script";
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { XIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative">
      <div className="container mx-auto px-4 py-6 border-t border-white/10">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-2 text-sm">
            <Link href={"/"} className="hover:opacity-80 transition-opacity">
              Bit<span className="text-fuchsia-500">Syll</span>
            </Link>
            <span className="text-white/50">•</span>
            <span className="text-white/50">&copy; 2024</span>
            <span className="text-white/50">•</span>
            <SH20RAJ />
          </div>
          
          <div className="flex items-center gap-4">
            <Link 
              href={"https://instagram.com/sh20raj"}
              className="text-white/50 hover:text-fuchsia-400 transition-colors"
            >
              <InstagramLogoIcon className="h-4 w-4" />
            </Link>
            <Link 
              href={"https://github.com/sh20raj"}
              className="text-white/50 hover:text-white transition-colors"
            >
              <GitHubLogoIcon className="h-4 w-4" />
            </Link>
            <Link 
              href={"https://twitter.com/sh20raj"}
              className="text-white/50 hover:text-white transition-colors"
            >
              <XIcon className="h-4 w-4" />
            </Link>
            <Link 
              href={"https://www.linkedin.com/in/sh20raj/"}
              className="text-white/50 hover:text-blue-400 transition-colors"
            >
              <LinkedInLogoIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10 p-2 z-50">
        <iframe
          src="https://archive.org/embed/BestOfArijitSingh"
          width="100%"
          height={40}
          className="rounded"
          title="Music Player"
          allow="autoplay"
        />
      </div>
    </footer>
  );
}
