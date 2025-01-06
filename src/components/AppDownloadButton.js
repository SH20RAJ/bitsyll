import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function AppDownloadButton({ title, link }) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer">
      <Button className=" border border-white" variant="link">
        <img className="h-6 w-6 mr-2" src="/icons/android.svg" /> {title}{" "}
        <img className="h-6 w-6 ml-2" src="/icons/apple.svg" />{" "}
      </Button>
    </Link>
  );
}
