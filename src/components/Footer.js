import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";
import Script from "next/script";


export default function Footer() {
  return (
    <footer className=" ">
      <div className="container mx-auto px-4 text-center mb-20">
        &copy;{" "}
        <Link href={"/"}>
          Bit
          <span className="text-fuchsia-500">Syll</span>
        </Link>{" "}
        2024 - <SH20RAJ />
      </div>
      <div className="song fixed  m-0 bottom-0 w-full bg-black p-2">
        <div
          className="essential_audio"
          data-loop="true"
          data-url="https://cdn.jsdelivr.net/gh/DrivePlyr/video-storage@main/Harry%20Styles%20-%20Watermelon%20Sugar%20(Official%20Audio).mp3"
        ></div>

        <Script
          src="https://cdn.jsdelivr.net/npm/essential-audio-player@2.1.0/essential_audio.min.js"
          strategy="afterInteractive"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/essential-audio-player@2.1.0/essential_audio.min.css"
        ></link>
        <link
          rel="stylesheet"
          href="https://essential-audio-player.net/css/player/essential_audio_ribbon_rounded.css"
        ></link>

        {/* <iframe
        src="https://archive.org/embed/BestOfArijitSingh"
        width={"100%"}
        height={40}
      /> */}
      </div>

      {/* <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=66d60ae0abc00d00197bfee9&product=sop' async='async'></script> */}
    </footer>
  );
}
