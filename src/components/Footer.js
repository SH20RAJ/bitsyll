import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";
import { SH20RAJ } from "./sh20raj";

export default function Footer() {
  return (
    <footer className=" p-4">
      <div className="container mx-auto px-4 text-center">
        &copy; <Link href={"/"}>
         Bit
          <span className="text-fuchsia-500">Syll</span>
        </Link> 2024 - <SH20RAJ/>
      </div>
    </footer>
  );
}
