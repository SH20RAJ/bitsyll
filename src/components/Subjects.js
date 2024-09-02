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
import { subjects } from "@/constants/subjects";
import { topics } from "@/constants/topics";
import Link from "next/link";

export function Subjects() {
  return (
    <>
      <h2 className="text-2xl font-bold p-1 ">
        Search Data <span className=" w-full self-end ">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />

      <Command className="rounded-lg border shadow-md  md:min-w-[450px] mt-2">
        <CommandInput placeholder="Type a subject or topic to search..." />
        {/* --- */}
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Subjects">
            {subjects.map((subject) => (
                <Link href={"subject/"+subject.slug} key={subject.name}>
              <CommandItem className=" cursor-pointer">
                <span className=" p-2">{subject.emoji}</span>
                <span>{subject.name}</span>
                <span className="text-gray-500 ml-auto">{subject.slug}</span>
              </CommandItem>
              </Link>
            ))}
          </CommandGroup>
          <CommandSeparator />
          {/* <CommandGroup heading="Topics">
            {topics.map((topic) => (
              <CommandItem key={topic.name} className="cursor-pointer">
                <span className=" p-2">{topic.emoji}</span>
                <span>{topic.name}</span>
                <CommandShortcut>⌘{topic.name.charAt(0)}</CommandShortcut>
              </CommandItem>
            ))}
          </CommandGroup> */}
        </CommandList>
      </Command>
    </>
  );
}
