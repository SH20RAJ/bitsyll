import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <>
      <nav className="p-4 flex justify-center items-center text-2xl sticky top-0 z-50 bg-blue-900/90 backdrop-blur-lg shadow-md">
        <Link href={"/"} className="flex items-center">
          <span className="inline-block mx-2 text-xl">📚</span>
          <span className="font-bold">Bit</span>
          <span className="text-blue-400 font-bold">Syll</span>
          <span className="inline-block mx-2 text-xl">📚</span>
        </Link>
      </nav>
      <hr className="border-1 border-blue-800 w-full" />
    </>
  );
}
