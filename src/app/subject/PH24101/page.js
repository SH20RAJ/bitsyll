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
              src="https://freesvg.org/img/logomancer_Atom_Model.png"
              alt="@shadcn"
            />
            <AvatarFallback>Physics</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(PH24101)</span> <br /> Physics
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
          <h3 className="text-xl font-semibold ">Module 1: Physical Optics</h3>
          <p className="text-gray-700">
            Polarization, Malus’ Law, Brewster’s Law, Double Refraction,
            Interference in thin films (Parallel films), Interference in
            wedge-shaped layers, Newton’s rings, Fraunhofer diffraction by
            single slit, Double slit.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 2: Electromagnetic Theory
          </h3>
          <p className="text-gray-700">
            Curl, Gradient, Divergence, Gauss theorem, Stokes theorem, Gauss’s
            law, Applications, Concept of electric potential, Relationship
            between E and V, Polarization of dielectrics, dielectric constant,
            Boundary conditions for E & D, Gauss’s law in magnetostatics,
            Ampere’s circuital law, Boundary conditions for B & H, Equation of
            continuity of charge, Displacement current, Maxwell’s equations.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Special Theory of Relativity
          </h3>
          <p className="text-gray-700">
            Introduction, Inertial frame of reference, Galilean transformations,
            Postulates, Lorentz transformations and its conclusions, Length
            contraction, time dilation, velocity addition, Mass change,
            Einstein's mass energy relation.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Quantum Mechanics
          </h3>
          <p className="text-gray-700">
            Planck's theory of black-body radiation, Compton effect, Wave
            particle duality, De Broglie waves, Davisson and Germer's
            experiment, Uncertainty principle, physical interpretation of wave
            function, Schrodinger equation in one dimension, free particle,
            particle in an infinite square well.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">Module 5: Lasers</h3>
          <p className="text-gray-700">
            Spontaneous and stimulated emission, Einstein's A and B
            coefficients, Population-inversion, Light amplification, Basic laser
            action, Ruby and He-Ne lasers, Properties and applications of laser
            radiation, Elementary ideas of fiber optics and application of fiber
            optic cables.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "Module 1: Physical Optics",
      link: "https://bithub.co.in/phy_1.pdf",
    },
    {
      title: "Module 2: Electromagnetic Theory",
      link: "https://bithub.co.in/phy_2.pdf",
    },
    {
      title: "Module 3: Special Theory of Relativity",
      link: "https://bithub.co.in/phy_3.pdf",
    },
    {
      title: "Module 4: Quantum Mechanics",
      link: "https://bithub.co.in/phy_4.pdf",
    },
    {
      title: "Module 5: Lasers",
      link: "https://bithub.co.in/phy_5.pdf",
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
      link: "https://drive.google.com/file/d/1xc831Vz6HAI5VmdzP-dbK_9qcqJuyMkj/view?usp=drive_link",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1PSY7S6iVwFuSHaza2N71d4VktzSyupKG/view?usp=drive_link",
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
