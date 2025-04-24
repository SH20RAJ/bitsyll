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
import SuggestButton from "@/components/SuggestButton";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center h-28 mt-20">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://freesvg.org/img/pgb-chip-crypto-3.png"
              alt="@shadcn"
            />
            <AvatarFallback>🛜</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(EE24101)</span> <br /> Basic
          Electrical Engineering
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
      </Accordion>

      {/* <Important /> */}

      {/* <Topics subcode="MA24101" topics="topics" /> */}
    </div>
  );
}

export function Syllabus() {
  return (
    <>
      <div className="syllabus shadow-lg rounded-lg p-0">
        <div className="module mb-6">
          <h3 className="text-xl font-semibold">Module 1: Introduction</h3>
          <p className="text-gray-700"> 
            Importance of Electrical Engineering in day-to-day life, Electrical elements,
            properties (linear, non-linear, unilateral, bilateral, lumped and distributed, etc.) and their
            classification, Ideal and Real Sources, Source Conversion, Star-Delta conversion, KCL and
            KVL, Mesh current and Nodal voltage method.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">Module 2: D.C. Circuits</h3>
          <p className="text-gray-700">
            Steady state analysis with independent and dependent sources; Series and
            Parallel circuits.
            Circuit Theorems: Superposition, Thevenin's, Norton's, and Maximum Power Transfer
            theorems for Independent and Dependent Sources applied to DC circuits.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">Module 3: Single-phase AC Circuits</h3>
          <p className="text-gray-700">
            Common signals and their waveforms, RMS and Average value.
            Form factor & Peak factor of a sinusoidal waveform. Series Circuits: Impedance of Series
            circuits. Phasor diagram. Active Power. Power factor. Power triangle. Parallel Circuits:
            Admittance method, Phasor diagram, Power and Power factor Power triangle, Series-parallel
            Circuit, Power factor improvement, Circuit Theorems applied to AC circuits.
            Series and Parallel Resonance: Resonance curve, Q–factor, Dynamic Impedance, and
            Bandwidth.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">Module 4: Three-Phase AC Circuits</h3>
          <p className="text-gray-700">
            Importance and use of a 3-phase network, types of 3-phase connections- Star and Delta, Line and Phase relations for Star and Delta connection, Phasor
            diagrams, Power relations, analysis of balanced and unbalanced 3-phase circuits, Measurement
            of Power in 3-phase star and delta network.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">Module 5: Magnetic Circuits</h3>
          <p className="text-gray-700">
            Introduction, Series-parallel magnetic circuits, Analysis of Linear and
            Non-linear magnetic circuits, Energy storage, A.C. excitation, Eddy currents and Hysteresis
            losses.
            Coupled Circuits: Dot rule, Self and mutual inductances, Coefficient of coupling, working of
            transformer.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "ALL PDF's AND NOTES FOLDER",
      link: "https://drive.google.com/drive/folders/114lWXFwqxmjA8oVkPd-_tRUXbOtULQQl",
    },
    {
      title: "BITSYLL FOLDER COLLECTION",
      link: "https://drive.google.com/drive/u/4/folders/1y4Xy__O9J7oIueVbF30Wka4gVfoF7C49",
    },
    {
      title: "Module 1",
      link: "https://drive.google.com/file/d/11wOfkR6rF-5GCZQOkztHTbqvyKtTXBB6/view?usp=drive_link",
    },
    {
      title: "Module 2",
      link: "https://drive.google.com/file/d/1yYnkmG59Y4kgX8-eJ42PuAWaqRPTHbbq/view?usp=drive_link",
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
      link: "https://drive.google.com/file/d/1AfpTZHf69fppXc_F48MsoTTTxy0H0Us7/view?usp=drive_link",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1VXUfiC-dtOt6Vj20snCW9hIpd17J1kZj/view?usp=drive_link",
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
