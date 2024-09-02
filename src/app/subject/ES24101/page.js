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
              src=""
              alt="@shadcn"
            />
            <AvatarFallback>🍀</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(ES24101)</span> <br />{" "}
          Environmental
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
  return  <div className="syllabus  shadow-lg rounded-lg p-6">
        <div>
          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 1: Ecosystem and Environment
            </h3>
            <p className="text-gray-700">
              Concepts of Ecology and Environmental science, ecosystem: structure, function and services, Biogeochemical cycles, energy and nutrient flow, ecosystem management, fate of environmental pollutants, environmental status and reports on climate change.
            </p>
          </div>
        
          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">Module 2: Air Pollution</h3>
            <p className="text-gray-700">
              Structure and composition of unpolluted atmosphere, classification of air pollution sources, types of air pollutants, effects of air pollution, monitoring of air pollution, control methods and equipment for air pollution control, vehicular emissions and control, indoor air pollution, air pollution episodes and case studies.
            </p>
          </div>
        
          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 3: Water Pollution
            </h3>
            <p className="text-gray-700">
              Types and Sources of Pollutants; effects of water pollution; Water quality monitoring, various water quality indices, water and waste water treatment: primary, secondary and tertiary treatment, advanced treatments (nitrate and phosphate removal); Sludge treatment and disposal.
            </p>
          </div>
        
          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">
              Module 4: Water Resource
            </h3>
            <p className="text-gray-700">
              Types and Sources of Pollutants; effects of water pollution; Water quality monitoring, various water quality indices, water and waste water treatment: primary, secondary and tertiary treatment, advanced treatments (nitrate and phosphate removal); Sludge treatment and disposal.
            </p>
          </div>
        
          <div className="module mb-6">
            <h3 className="text-xl font-semibold ">Module 5: Water Pollution</h3>
            <p className="text-gray-700">
              Types and Sources of Pollutants; effects of water pollution; Water quality monitoring, various water quality indices, water and waste water treatment: primary, secondary and tertiary treatment, advanced treatments (nitrate and phosphate removal); Sludge treatment and disposal.
            </p>
          </div>
        </div>
      </div>
      
  
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
