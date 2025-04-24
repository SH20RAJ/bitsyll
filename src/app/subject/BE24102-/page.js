/* eslint-disable react/no-unescaped-entities */
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ImportantData from "@/components/ImportantData";

export default function Page() {
  return (
    <div className="flex flex-col gap-8 px-4 py-8 min-h-screen">
      <div className="flex flex-col gap-4 justify-center items-center h-28 mt-20">
        <div>
          <Avatar className="h-20 w-20">
            <AvatarImage
              src="https://www.svgrepo.com/show/530142/biology.svg"
              alt="@shadcn"
              className="bg-white"
            />
            <AvatarFallback>Biology</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center">
          <span className="text-lg underline">(BS24102)</span> <br />
          Biology Science for Engineers
        </h2>
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
    </div>
  );
}

export function Syllabus() {
  return (
    <>
      <div className="syllabus shadow-lg rounded-lg p-0">
        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - I: Basic Cell Biology
          </h3>
          <p className="text-gray-700">
            Origin of life, Cell theory, Cell Structure and function, Biomolecules, Cell cycle and cell division, Biological Organization.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - II: Bioenergetics and Metabolism
          </h3>
          <p className="text-gray-700">
            Gibbs free energy and thermodynamics, aerobic and anaerobic respiration, Glycolysis, Krebs cycle and electron transport chain, Beta oxidation, Photosynthesis.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - III: Enzymes and its Application
          </h3>
          <p className="text-gray-700">
            Classification of enzymes, Structure and mechanism of enzyme action and uses of enzymes, factors affecting enzyme activity, Immobilization of enzymes and their application.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - IV: Biological Signal Generation and Propagation
          </h3>
          <p className="text-gray-700">
            Nerve cell structure and signal propagation. Mechanism of vision and hearing, cell signaling, Circadian rhythm.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold">
            MODULE - V: Engineering Biological Systems and its Applications
          </h3>
          <p className="text-gray-700">
            Central dogma of molecular biology, Methods in genetic engineering and application, PCR, ELISA and its application, stem cell and tissue engineering. Artificial Intelligence in Biology, Plant factory.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "All Collections",
      link: "https://drive.google.com/drive/folders/1PKWw6EIpRpjfdR3HnQlV6HQH8PIegFod?usp=drive_link",
    },
    {
      title: "Module 1: Basic Cell Biology",
      link: "https://drive.google.com/file/d/1s6cjaIw9VSl_LNFUU_0Q9cv7QWsXxskI/view?usp=drive_link",
    },
    {
      title: "Module 2: Bioenergetics and Metabolism",
      link: "https://drive.google.com/file/d/1rx_FEnqqiRvxbRyrXQKFgTkXZ7odWIlr/view?usp=drive_link",
    },
    {
      title: "Module 3: Enzymes and its Application",
      link: "https://drive.google.com/file/d/1HtOSUZHX9gPT0cNFoTv7hDFqZmpNSxb2/view?usp=drive_link",
    },
    {
      title: "Module 4: Biological Signal Generation and Propagation",
      link: "https://drive.google.com/file/d/1CZkVjre9-iWJbKyrm7SaEJd5Su2KEbpZ/view?usp=drive_link",
    },
    {
      title: "Module 5: Engineering Biological Systems and its Applications",
      link: "https://drive.google.com/file/d/1juFPbzwcdktfZEPsOn9NYK27dGP6nkaw/view?usp=drive_link",
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
      link: "https://drive.google.com/file/d/1XvrhcWeV1_1Uau8MTWuPD-vM78EuH-br/view?usp=drive_link",
    },
    {
      title: "End Sem 2023", 
      link: "https://drive.google.com/file/d/1RCthA4_V407XqHVuzDiLevstyMDHUMih/view?usp=drive_link",
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
      title: "Khan Academy Biology",
      link: "https://www.youtube.com/c/khanacademy",
    },
    {
      title: "Crash Course Biology",
      link: "https://www.youtube.com/user/crashcourse",
    },
    {
      title: "Amoeba Sisters",
      link: "https://www.youtube.com/c/AmoebaSisters",
    },
    {
      title: "Bozeman Science",
      link: "https://www.youtube.com/c/bozemanscience",
    },
    {
      title: "Professor Dave Explains",
      link: "https://www.youtube.com/c/ProfessorDaveExplains",
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
