import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";
import Script from "next/script";

export default function Footer() {
  let audios = [
    "https://cdn.jsdelivr.net/gh/DrivePlyr/video-storage@main/Harry%20Styles%20-%20Watermelon%20Sugar%20(Official%20Audio).mp3",
    "https://ia804601.us.archive.org/9/items/BestOfArijitSingh/Atif%20Aslam%20Arijit%20Singhs%20Hit%20song%20collections%20%20Audio%20JukeBox.mp3",
    "https://ia804601.us.archive.org/9/items/BestOfArijitSingh/Valentines%20Day%20Special%20%20Best%20of%20Arijit%20Singh%20%20Romantic%20Songs%202016.mp3",
    "https://ia800708.us.archive.org/22/items/EdSheeranShapeOfYou_201811/Ed%20Sheeran%20-%20Shape%20Of%20You.mp3",
  ];

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
      <div className="song fixed  h-6 m-0 bottom-0 w-full bg-black p-2">
        <div
          className="essential_audio w-full"
          data-loop="true"
          data-url={audios[Math.floor(Math.random() * audios.length)]}
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
