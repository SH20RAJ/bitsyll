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
          <AccordionContent></AccordionContent>
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

      <SuggestButton />

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
      title: "Module 1: Diodes and Applications",
      link: "https://drive.google.com/file/d/1PlromX6l_OqjwXKP25d6usn6YyRsJ5tA/view?usp=sharing",
    },
    {
      title: "Module 2: Bipolar Junction Transistors (BJT)",
      link: "https://drive.google.com/file/d/1zYU_Z6bsm8zQDqLn7rC6B3qty1ZgjB7l/view?usp=sharing",
    },
    {
      title: "Module 3: Sinusoidal Oscillators",
      link: "https://drive.google.com/file/d/1rEs-mO3ZwvPcgvLtA5rVatuO8B0vokwF/view?usp=sharing",
    },
    {
      title: "Module 4: Logic Gates and Boolean algebra",
      link: "https://drive.google.com/file/d/1Vb5WE_phDxUGWVZI2MrHbmf-QuukNwJv/view?usp=sharing",
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
      link: "https://drive.google.com/file/d/1bnbTF2Tl4BnoXXdYIzXzz75cGuWUGqv8/view?usp=sharing",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1LdsvJ_cG-1_a4Rn_FqLRz4ESmwDylhuB/view?usp=sharing",
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
