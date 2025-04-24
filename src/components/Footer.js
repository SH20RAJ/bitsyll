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
      <div className="container mx-auto px-4 py-8 border-t border-blue-800/50">
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-3 text-sm">
            <Link href={"/"} className="font-medium text-white">
              Bit<span className="text-blue-400">Syll</span>
            </Link>
            <span className="text-blue-300/50">•</span>
            <span className="text-blue-300/70">&copy; 2024</span>
            <span className="text-blue-300/50">•</span>
            <SH20RAJ />
          </div>

          <div className="flex items-center gap-6 mt-2">
            <Link
              href={"https://instagram.com/sh20raj"}
              className="text-blue-300/70 hover:text-blue-300 transition-colors"
            >
              <InstagramLogoIcon className="h-5 w-5" />
            </Link>
            <Link
              href={"https://github.com/sh20raj"}
              className="text-blue-300/70 hover:text-blue-300 transition-colors"
            >
              <GitHubLogoIcon className="h-5 w-5" />
            </Link>
            <Link
              href={"https://twitter.com/sh20raj"}
              className="text-blue-300/70 hover:text-blue-300 transition-colors"
            >
              <XIcon className="h-5 w-5" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/sh20raj/"}
              className="text-blue-300/70 hover:text-blue-300 transition-colors"
            >
              <LinkedInLogoIcon className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-blue-900/90 backdrop-blur-sm border-t border-blue-700/50 p-2 z-50 shadow-lg">
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
