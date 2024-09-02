import React from "react";
import { Card } from "./ui/card";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <Card className=" p-2 ">
        Contact <Link href={"https://instagram.com/sh20raj"}>@sh20raj</Link> for contribute and content update
      </Card>
    </footer>
  );
}
