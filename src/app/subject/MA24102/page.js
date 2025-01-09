/* eslint-disable react/no-unescaped-entities */
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
              src="https://freesvg.org/storage/img/thumb/fathertimeteaches.png"
              alt="@shadcn"
              className="bg-white"
            />
            <AvatarFallback>Maths</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(MA24102)</span> <br />{" "}
          Mathematics 2
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
            <YoutubeVideos />
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Important Links</AccordionTrigger>
          <AccordionContent>
            <ImportantData showHeading={false} />
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
      <div className="syllabus shadow-lg rounded-lg p-6">
        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - I: Ordinary Differential Equations - I
          </h3>
          <p className="text-gray-700">
            Linear differential equations, Wronskian, Linear independence and dependence of solutions, Linear differential equations of second and higher order, Operator method, Euler - Cauchy's differential equation, Legendre's linear differential equation, Method of variation of parameters, Method of change of independent variable, Normal form method. [9 L]
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - II: Ordinary Differential Equations - II
          </h3>
          <p className="text-gray-700">
            Power series, ordinary and singular points of differential equation, Power and Frobenius series solutions. Bessel's differential equation and its series solution, Bessel function of first kind and its properties. Legendre's differential equation and its series solution, Legendre's polynomial and its properties. [9 L]
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - III: Partial Differential Equations
          </h3>
          <p className="text-gray-700">
            Fourier series, Euler formulae for Fourier series for length of interval 2n, Dirichlet conditions, Fourier series for arbitrary length of interval, Half range Fourier series. Linear and quasi - linear partial differential equations, Lagrange's method, Linear - partial differential equations with constant coefficients, Method of separation of variables and its application in solving one dimensional wave and heat equations.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - IV: Complex Variable
          </h3>
          <p className="text-gray-700">
            Function of a complex variable, Limit, Continuity, Differentiability, Analyticity, Analytic functions, Cauchy - Riemann equations (Cartesian and Polar form), Harmonic functions, Complex [9L]
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - V: Probability and Statistics
          </h3>
          <p className="text-gray-700">
            Definition and scope of statistics, average and dispersion, skewness and kurtosis, graphical statistics, classical and empirical definitions of probability, addition theorem, Conditional padabi varatip camon the distindepen denteren, Bage the men, discrete any contions, mathematical expectation, variance, moment generating function.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "Module 1: Ordinary Differential Equations – I",
      link: "https://drive.google.com/file/d/1eyHo4uBTmOyYvuZ6LBXpKi0u3h-Of-z1/view?usp=drive_link",
    },
    {
      title: "Module 2: Ordinary Differential Equations – II",
      link: "https://drive.google.com/file/d/1FfGdiuP-DxvLK2ETgUeNoGv7-7CDctma/view?usp=drive_link",
    },
    {
      title: "Module 3: Fourier series and Partial Differential Equations",
      link: "https://drive.google.com/file/d/1a0k_ly5THUXLfVcZZWvuNEuxfkDm_-bl/view?usp=drive_link",
    },
    {
      title: "Module 4: Complex Variable-Differentiation & Integration",
      link: "https://drive.google.com/file/d/1THBjGfglh03NSYSnQEfHvcXScWbLbmkh/view?usp=drive_link",
    },
    {
      title: "Module 5: Applied Probability",
      link: "https://drive.google.com/file/d/18SIFtHhBhZ2MP6hQYWMZgDQIUo4hXBkr/view?usp=drive_link",
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
      link: "https://drive.google.com/file/d/19sHz1yo23xhxXumMBldY0xBpuqGigaWr/view?usp=drive_link",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1KsHHwqzjG4sVGf95r9ky8s_-ixYNbKqr/view?usp=drive_link",
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

export function YoutubeVideos() {
  let channels = [
    {
      title: "Dr. Gajendra Purohit",
      link: "https://www.youtube.com/@gajendrapurohit",
    },
    {
      title: "Bhagwan Singh Vishwakarma",
      link: "https://www.youtube.com/@BhagwanSinghVishwakarma",
    },
    {
      title: "Maths for All (English)",
      link: "https://www.youtube.com/@mathsallinone5110",
    },
    {
      title: "Last Moment Tuition",
      link: "https://www.youtube.com/@Lastmomenttuitions",
    },
    {
      title: "Btech Mathematics",
      link: "https://www.youtube.com/@BTechMathematics",
    },
  ];
  return (
    <div className="videos">
      {channels.map((channel, index) => (
        <div key={index} className="video mb-4">
          <a href={channel.link} target="_blank" className="text-blue-500">
            {channel.title}
          </a>
        </div>
      ))}
    </div>
  );
}
