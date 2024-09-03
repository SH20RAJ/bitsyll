import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { PopComments } from "./PopComments";
import { SH20RAJ } from "./sh20raj";

export default function SuggestButton() {
  return (
    <div className=" flex flex-col gap-4">
      <p className=" text-sm opacity-65">
        Found something missing 😒? Want to suggest some content? Or want to give feedback? Feel free to reach out to me.
      </p>
      <Link href="https://instagram.com/sh20raj">
        <Button className="w-full" variant="secondary">Suggest/Contribute Content</Button>
      </Link>
      <div className="flex gap-2">
        <Link className=" w-full" href="https://github.com/SH20RAJ/bitsyll">
          <Button className="w-full">Contribute Code</Button>
        </Link>
        <PopComments />
      </div>
      <Link href={"https://drive.google.com/drive/folders/1-0Xfwd73g-Y7mec64v5W0osI4CWT0B1v"} target="_"><Button className="w-full">😻 Notes 📃</Button></Link>

      <div>
        <div className="sharethis-inline-reaction-buttons"></div>
      </div>
    </div>
  );
}
