"use client";

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";
import Link from "next/link";

export default function Topics({subcode = "MA24101"}) {
    let topics = [
      {
        name: "Algebra",
        emoji: "🧮",
        slug: "algebra",
      },
      {
        name: "Calculus",
        emoji: "📈",
        slug: "calculus",
      },
      {
        name: "Geometry",
        emoji: "🔺",
        slug: "geometry",
      },
      {
        name: "Trigonometry",
        emoji: "📐",
        slug: "trigonometry",
      },
      {
        name: "Statistics",
        emoji: "📊",
        slug: "statistics",
      }
    ]
  return (
    <>
      <h2 className="text-2xl font-bold p-1 ">
        Search Topic <span className=" w-full self-end ">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />

      <Command className="rounded-lg border shadow-md  md:min-w-[450px] mt-2">
        <CommandInput placeholder="Type a topic to search..." />
        {/* --- */}
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Topics">
            {topics.map((topic) => (
              <Link href={"./"+subcode+"/" + topic.slug} key={topic.name}>
                <CommandItem className=" cursor-pointer">
                  <span className=" p-2">{topic.emoji}</span>
                  <span>{topic.name}</span>
                  <span className="text-gray-500 ml-auto">{topic.slug}</span>
                </CommandItem>
              </Link>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
    </>
  );
}
