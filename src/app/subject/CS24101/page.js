import Important from "@/components/subject/Important";
import Topics from "@/components/subject/Topics";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SH20RAJ } from "@/components/sh20raj";
import ImportantData from "@/components/ImportantData";
import { Button } from "@/components/ui/button";
import SuggestButton from "@/components/SuggestButton";

export default function Page() {
  const youtubeChannels = [
    {
      title: "Jenny's Lectures CS IT",
      link: "https://www.youtube.com/channel/UCM-yUTYGmrNvKOCcAl21g3w",
    },
    {
      title: "Neso Academy",
      link: "https://www.youtube.com/@nesoacademy",
    },
    {
      title: "Saurabh Shukla Sir(SirG)",
      link: "https://www.youtube.com/@cbysaurabhshuklasir32",
    },
    {
      title: "Apna College",
      link: "https://www.youtube.com/@ApnaCollegeOfficial",
    },
    {
      title: "Code With Harry",
      link: "https://www.youtube.com/@CodeWithHarry",
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-4 py-8 min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center h-28 mt-20">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage src=" " alt="@shadcn" />
            <AvatarFallback>💻</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(CS24101)</span> <br />{" "}
          Programming for Problem Solving
        </h2>{" "}
      </div>

      <Accordion type="single" collapsible className="w-full mt-20">
        <AccordionItem value="item-1">
          <AccordionTrigger>Syllabus</AccordionTrigger>
          <AccordionContent>
            <Syllabus />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>PDFs/Slides</AccordionTrigger>
          <AccordionContent>
            <PDFs />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="PYQs">
          <AccordionTrigger>PYQs</AccordionTrigger>
          <AccordionContent>
            <PYQs />
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger>Best YouTube Video/Playlist</AccordionTrigger>
          <AccordionContent>
            {youtubeChannels.map((channel, index) => (
              <p key={index} className="text-gray-700">
                <a
                  href={channel.link}
                  target="_blank"
                  className="text-blue-500"
                >
                  {channel.title}
                </a>
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Important Links</AccordionTrigger>
          <AccordionContent>
            <ImportantData showHeading={false} />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>Contributions/Credits</AccordionTrigger>
          <AccordionContent>
            <p className="text-gray-700">
              This page is contributed by <SH20RAJ />.
            </p>
            <p>Get your name here by contributing to this page.</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      {/* <Important /> */}

      {/* <Topics subcode="MA24101" topics="topics" /> */}
    </div>
  );
}

export function Syllabus() {
  return (
    <>
      <div className="syllabus  shadow-lg rounded-lg p-6">
        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 1: Introduction to Programming
          </h3>
          <p className="text-gray-700">
            Introduction to components of a computer system (disks, memory,
            processor, where a program is stored and executed, operating system,
            compilers etc.) Problem Solving: Steps to solve logical and
            numerical problems. Representation of Algorithm: Flowchart/Pseudo
            code with examples. From algorithms to programs; source code,
            variables (with data types) variables and memory locations, Syntax
            and Logical Errors in compilation, object and executable code.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 2: Arithmetic expressions and Conditional Branching and Loops
          </h3>
          <p className="text-gray-700">
            Arithmetic expressions and precedence, Conditional Branching and
            Loops, Writing and evaluation of conditionals, Iterations, Loops.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Array, Character array, strings
          </h3>
          <p className="text-gray-700">
            Array, Character array, strings. Case studies to discuss the various
            Problems related to Basic science (Matrix addition, Matrix-matrix
            multiplication, Roots of an equation etc.), Sorting, Searching.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Functions and Recursion
          </h3>
          <p className="text-gray-700">
            Functions (including using built in libraries), Parameter passing in
            functions, call by value, call by reference. Passing arrays to
            functions, Recursion (Finding Factorial, Fibonacci series, Ackerman
            function etc.).
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 5: Structures and Pointers
          </h3>
          <p className="text-gray-700">
            Structures, Defining structures and Array of Structures Pointers:
            Defining pointers, Use of Pointers in self-referential structures,
            File Handling.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "Algorithm and Flowchart",
      link: "https://drive.google.com/file/d/17kxm6IcKJCCUCdUecjHjaiRLkGif4jLp/view?usp=drive_link",
    },
    {
      title: "Array",
      link: "https://drive.google.com/file/d/1YCPUqu1qYSZIiQwce0P2k37AVMPbTVED/view?usp=drive_link",
    },
    {
      title: "Bubble Sort",
      link: "https://drive.google.com/file/d/1QyL2neOeTbaYemKB1wlam_H7aKo-quYc/view?usp=drive_link",
    },
    {
      title: "Data Type & Token",
      link: "https://drive.google.com/file/d/1Zi0TBbYcn4XGlJVykg3PgUyq4X5YwV_6/view?usp=drive_link",
    },
    {
      title: "Function",
      link: "https://drive.google.com/file/d/1vezMVhmLBm9E87I_2Ryng4dNP-Ye3jWF/view?usp=drive_link",
    },
    {
      title: "Generation of Language",
      link: "https://drive.google.com/file/d/1EAashHYPUhWTig0ntFrDax-cNIbCLIgt/view?usp=drive_link",
    },
    {
      title: "If-Else",
      link: "https://drive.google.com/file/d/1RARPKhQSciyxhy7JtI2SF7yABxcH9bFH/view?usp=drive_link",
    },
    {
      title: "Instruction",
      link: "https://drive.google.com/file/d/1_2L8ZXtWMsjGqaIw0_bNCAqxDap5XZqc/view?usp=drive_link",
    },
    {
      title: "Loop",
      link: "https://drive.google.com/file/d/1mDNh5rEHTN2TkQ3yqvqJWzA7SN-1kTVy/view?usp=drive_link",
    },
    {
      title: "Operator",
      link: "https://drive.google.com/file/d/1oD3OdERrTFj8tB2hXqp1-FIOgh51g_cn/view?usp=drive_link",
    },
    {
      title: "String",
      link: "https://drive.google.com/file/d/14pUSvurKtvzvp238j9ygPdUQ8-3mb9WN/view?usp=drive_link",
    },
    {
      title: "Structure",
      link: "https://drive.google.com/file/d/1Dz2jDuo82SidpnrlX4IDJk_L7r60O57p/view?usp=drive_link",
    },
    {
      title: "Switch",
      link: "https://drive.google.com/file/d/1XgSgGyL_jSklduQNY6qKPSF-B5J1VFWJ/view?usp=drive_link",
    },
    {
      title: "Types of Error",
      link: "https://drive.google.com/file/d/1Bfve9kae-0MCDWe4qnMPQX6Rf7O-kdcd/view?usp=drive_link",
    },
  ];
  return (
    <div className="pdfs">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf mb-4">
          <a href={pdf.link} target="_blank" className="text-blue-500">
            {pdf.title}
          </a>
        </div>
      ))}
    </div>
  );
}

export function PYQs() {
  let pdfs = [
    {
      title: "Mid Sem 2023",
      link: "https://drive.google.com/file/d/1h3TaLzIYeOavhL0SpCu_Kc7mMb1_PxPB/view?usp=drive_link",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/17YkNtcmD4QHNU_ldukPK12psTerVoDVJ/view?usp=drive_link",
    },
  ];
  return (
    <div className="pyqs">
      {pdfs.map((pdf, index) => (
        <div key={index} className="pdf mb-4">
          <a href={pdf.link} target="_blank" className="text-blue-500">
            {pdf.title}
          </a>
        </div>
      ))}
    </div>
  );
}
