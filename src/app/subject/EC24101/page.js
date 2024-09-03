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
              src=" "
              alt="@shadcn"
            />
            <AvatarFallback>🛜</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(EC24101)</span> <br />{" "}
          Basics of Electronics & Communication Engineering
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
          <AccordionTrigger>Best YouTube Videos</AccordionTrigger>
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
              Module 1: Diodes and Applications
            </h3>
            <p className="text-gray-700">
              Introduction to PN junction diodes; Characteristics of semiconductor
              diodes: V-I characteristics, diode-resistance, temperature-dependence,
              diode-capacitance; DC & AC load lines; Breakdown Mechanisms; Zener
              Diode – Operation and Applications; Diode as a Rectifier: Half Wave
              and Full Wave Rectifiers with and without C-Filters.
            </p>
          </div>

          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 2: Bipolar Junction Transistors (BJT)
            </h3>
            <p className="text-gray-700">
              PNP and NPN Transistors, Basic Transistor Action, Input and Output
              Characteristics of CB, CE and CC Configurations, dc and ac load line
              analysis, operating point, Transistor biasing: Fixed bias, emitter
              bias/self-bias, Low-frequency response of CE amplifier. Field Effect
              Transistors: JFET, Idea of Channel Formation, Pinch-Off and saturation
              Voltage, Current-Voltage Output Characteristics; MOSFET: Basic
              structure, operation and characteristics
            </p>
          </div>

          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 3: Sinusoidal Oscillators
            </h3>
            <p className="text-gray-700">
              Concept of positive and negative feedback, Barkhausen criterion for
              sustained oscillations, Determination of Frequency and Condition of
              oscillation, Hartley and Colpitt’s oscillator. Operational Amplifiers:
              Characteristics of an Ideal and Practical Operational Amplifier (IC
              741), Inverting and non-inverting amplifiers, Offset error voltages
              and currents; Power supply rejection ratio, Slew Rate and concept of
              Virtual Ground, Summing and Difference Amplifiers, Differentiator and
              Integrator, RC phase shift oscillator.
            </p>
          </div>

          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 4: Logic Gates and Boolean algebra
            </h3>
            <p className="text-gray-700">
              Introduction to Boolean Algebra and Boolean operators, Symbolic
              representation, Boolean algebraic function and Truth table of
              different Digital logic Gates (AND, OR, NOT, NAND, NOR, EX-OR,
              EX-NOR); Realization of Basic logic gates using universal gates,
              Adder, Subtractor, adder/subtractor.
            </p>
          </div>

          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 5: Electronic communication
            </h3>
            <p className="text-gray-700">
              Introduction to electronic communication system, Electromagnetic Communication spectrum band and applications, Elements of Electronic Communication System; Merits and demerits of analog and digital communication, Modes of communication; Signal radiation and propagation; Need for modulation; Introduction to Amplitude modulation and Angle modulation.
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
    }
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
    }
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
