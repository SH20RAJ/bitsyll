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
            <AvatarImage
              src="https://png.pngtree.com/png-clipart/20190516/original/pngtree-math-calculations-png-image_4124283.jpg"
              alt="@shadcn"
            />
            <AvatarFallback>Maths</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(MA24101)</span> <br />{" "}
          Mathematics I
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
            Module 1: Sequences and Series
          </h3>
          <p className="text-gray-700">
            Sequences, Convergence of Sequence. Series, Convergence of Series,
            Tests for Convergence: Comparison tests, Ratio test, Cauchy’s root
            test, Raabe’s test, Gauss test, Cauchy{"'"}s Integral test,
            Alternating series, Leibnitz test, Absolute and Conditional
            Convergence.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">Module 2: Matrices</h3>
          <p className="text-gray-700">
            Rank of a Matrix, elementary transformations, Row - reduced Echelon
            form. Vectors, Linear Independence and Dependence of Vectors.
            Consistency of system of linear equations. Eigenvalues,
            Eigenvectors, Cayley - Hamilton theorem
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Advance Differential Calculus
          </h3>
          <p className="text-gray-700">
            Function of several variables, Limit, Continuity, Partial
            derivatives, Euler’s theorem for homogeneous functions, Total
            derivatives, Chain rules, Jacobians and its properties, Taylor
            series for function of two variables, Maxima – Minima, Lagrange’s
            method of multipliers.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Advance Integral Calculus
          </h3>
          <p className="text-gray-700">
            Beta and Gamma functions: definition and properties. Double
            integrals, double integrals in polar coordinates, Change of order of
            integration, Triple Integrals, cylindrical and spherical coordinate
            systems, transformation of coordinates, Applications of double and
            triple integrals in areas and volumes.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">Module 5: Vector Calculus</h3>
          <p className="text-gray-700">
            Scalar and vector point functions, gradient, directional derivative,
            divergence, curl, vector equations and identities. Line Integral,
            Work done, Conservative field, Green’s theorem in a plane, Surface
            and volume integrals, Gauss – divergence theorem, Stoke’s theorem.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "Module 1: Sequences and Series",
      link: "https://drive.google.com/file/d/1tLDg12YncZmYcBeRqfo_ml24n4_2MfRs/view?usp=drive_link",
    },
    {
      title: "Module 2: Matrices",
      link: "https://drive.google.com/file/d/1v7JscEa11gJGECiNMjes7vhSlybI9G8a/view?usp=sharing",
    },
    {
      title: "Module 3: Advance Differential Calculus",
      link: "https://drive.google.com/file/d/1Zb0id9PwC8PqwnZCpC9JG6GJRPq5D36c/view?usp=sharing",
    },
    {
      title: "Module 4: Advance Integral Calculus",
      link: "https://drive.google.com/file/d/1Zb0id9PwC8PqwnZCpC9JG6GJRPq5D36c/view?usp=sharing",
    },
    {
      title: "Module 5: Vector Calculus",
      link: "https://drive.google.com/file/d/1OJkYqiHwgxfLFrHezv40d2_OGn3J-LTC/view?usp=sharing",
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
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
    },
    {
      title: "Mid Sem 2022",
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
    },
    {
      title: "End Sem 2022",
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
    },
    {
      title: "Mid Sem 2021",
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
    },
    {
      title: "End Sem 2021",
      link: "https://drive.google.com/file/d/1cWlwkcj4yIMe0lCqnL76xaF-OL89pp0W/view?usp=sharing",
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
