import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";

export default function Footer() {
  return (
    <footer className=" ">
      <div className="container mx-auto px-4 text-center mb-20">
        &copy; <Link href={"/"}>
         Bit
          <span className="text-fuchsia-500">Syll</span>
        </Link> 2024 - <SH20RAJ/>
      </div>
      <div className="song fixed  m-0 bottom-0 w-full bg-black p-2">
      {/* <iframe
        src="https://archive.org/embed/BestOfArijitSingh"
        width={"100%"}
        height={40}
      /> */}
      </div>

      <script type='text/javascript' src='https://platform-api.sharethis.com/js/sharethis.js#property=66d60ae0abc00d00197bfee9&product=sop' async='async'></script>
    </footer>
  );
}
