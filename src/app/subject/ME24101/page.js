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
            <AvatarFallback>🔧</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(ME24101)</span> <br /> Basic of
          Mechanical Engineering
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
            Module 1: System of Forces and Structure Mechanics
          </h3>
          <p className="text-gray-700">
            Addition of Forces, Moment of a Force, Couple, Varignon’s theorem,
            Free Body Diagram, Equilibrium in Two and Three Dimensions,
            Equivalent Forces and Moment. Types of Trusses, Plane and Space
            Trusses. Analysis of Plane Trusses by: Method of Joints and Method
            of Sections, Analysis of Frames with Hinged Joints. Hooke’s Law of
            elasticity, Stress and Strain, Relation between elastic constants,
            Thermal Stresses, Properties of surfaces such as centroid and area
            moment of inertia.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 2: Kinematics & Kinetics of rigid bodies
          </h3>
          <p className="text-gray-700">
            Types of rigid body motion– translation, rotation about fixed axis,
            equations defining the rotation of a rigid body about a fixed axis,
            plane motion, absolute and relative velocity in plane motion,
            instantaneous center of rotation. Equation of translational and
            rotational motion, Newton’s law and D’Alembert’s principle –inertia
            force and inertia couple.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Friction and Vibration
          </h3>
          <p className="text-gray-700">
            Interfacial Friction (a) Laws of dry friction, static & kinetic
            co-efficient of friction, Analysis of static, kinetic and rolling
            friction.(b) Analysis of frictional forces in inclined planes,
            wedges, screw jacks and belt drives. Vibrations: Types of vibration,
            free un-damped longitudinal vibrations, free damped longitudinal
            vibrations.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Boilers and Internal Combustion Engine
          </h3>
          <p className="text-gray-700">
            Boiler Mountings and Accessories, Fire Tube and Water Tube Boilers,
            Cochran Boiler, Babcock and Wilcox Boiler. Basic components and
            terminology of IC engines, working of four stroke/two stroke -
            petrol/diesel engine, classification and application of IC engines.
            Heat transfer: various modes of heat transfer, one dimensional
            steady state conduction, Application to composite walls and
            cylinder.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 5: Non-Conventional Energy and their resources
          </h3>
          <p className="text-gray-700">
            Renewable and Non-renewable Energy Resources, Advantages and
            Disadvantages of Renewable Resources, Renewable Energy Forms and
            Conversion, Solar Energy, Wind Energy, Tidal Energy, Ocean Thermal
            Energy; Geothermal Energy, Nuclear Energy, Hydro Energy
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
