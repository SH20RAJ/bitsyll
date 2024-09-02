import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { PopComments } from "./PopComments";

export default function SuggestButton() {
  return (
    <div className=" flex flex-col gap-4">
      <Link href="https://instagram.com/sh20raj">
        <Button className="w-full">Suggest/Contribute Content</Button>
      </Link>
      <div className="flex gap-2">
        <Link className=" w-full" href="https://github.com/sh20raj">
          <Button className="w-full">Contribute Code</Button>
        </Link>
        <PopComments />
      </div>

      <div>
        <div className="sharethis-inline-reaction-buttons"></div>
      </div>
    </div>
  );
}
