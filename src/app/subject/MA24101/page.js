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
          Mathematics 1
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
          <h3 className="text-xl font-semibold ">
            Module 1: Ordinary Differential Equations – I
          </h3>
          <p className="text-gray-700">
            Linear differential equations, Wronskian, Linear independence and
            dependence of solutions, Linear differential equations of second and
            higher order, Operator method, Legendre’s and Euler – Cauchy’s form
            of linear differential equation, Method of variation of parameters.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 2: Ordinary Differential Equations – II
          </h3>
          <p className="text-gray-700">
            Ordinary and singular points of differential equation, Power and
            Frobenius series solutions. Bessel’s differential equation, Bessel
            function of first kind and its properties. Legendre’s differential
            equation, Legendre’s polynomial and its properties.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Fourier series and Partial Differential Equations
          </h3>
          <p className="text-gray-700">
            Fourier series: Euler formulae for Fourier series, Dirichlet
            conditions, Half range Fourier series. Partial Differential
            Equations: Linear partial differential equations, Lagrange’s method.
            Method of separation of variables and its application in solving one
            dimensional wave and heat equations.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Complex Variable-Differentiation & Integration
          </h3>
          <p className="text-gray-700">
            Function of a complex variable, Limit, Continuity,
            Differentiability, Analyticity, Analytic functions, Cauchy – Riemann
            equations. Harmonic functions, Harmonic Conjugate. Cauchy’s theorem,
            Cauchy’s Integral formula, Taylor and Laurent series expansions.
            Singularities and its types, Residues, Residue theorem.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 5: Applied Probability
          </h3>
          <p className="text-gray-700">
            Discrete and continuous random variables, cumulative distribution
            function, probability mass and density functions, expectation,
            variance, moment generating function. Introduction to Binomial,
            Poisson and Normal Distribution.
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
