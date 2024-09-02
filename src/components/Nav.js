import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="p-4 flex justify-center items-center text-2xl sticky top-0 z-50  bg-opacity-50 backdrop-blur-lg">
        <Link href={"/"}>
          <span className="inline-block mx-2">🎶</span> Bit
          <span className="text-fuchsia-500">Syll</span>
        </Link>
      </nav>
      <hr className="border-2 w-full" />
    </>
  );
}
