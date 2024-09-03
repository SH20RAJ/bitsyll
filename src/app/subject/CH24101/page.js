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
            <AvatarImage src="" alt="@shadcn" />
            <AvatarFallback>🧪</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold  mb-4 text-center">
          {" "}
          <span className=" text-lg underline">(CH24101)</span> <br /> Chemistry
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
          <h3 className="text-xl font-semibold ">Module 1: Chemical Bonding</h3>
          <p className="text-gray-700">
            Ionic bond: Radius ratio rule, Born-Landé equation, Born-Haber
            cycle. Metallic Bond: valence bond and band theories, defects in
            solids, Werner{"'"}s Theory, Bonding in Transition metal complexes,
            Ligands, coordination complexes, Ligand Field, Crystal Field Theory,
            Octahedral, Tetrahedral and square planar complexes, CFSE, Jahn
            Teller theorem, electronic spectra, magnetism, and isomerization in
            coordination compounds.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 2: Organic Structure and Stereochemistry
          </h3>
          <p className="text-gray-700">
            Covalent bond: Lewis structure, Valence Bond theory, Molecular
            orbital theory, Molecular orbital of diatomic and polyatomic system,
            hybridization, conjugated molecules, Huckel molecular orbital theory
            of conjugated systems. Isomerism, Geometrical isomerism: cis–trans
            and syn-anti isomerism; Optical isomerism & Chirality; Wedge,
            Fischer, Newmann and Sawhorse Projection formulae and
            interconversions; E/Z, D/L, R/S nomenclature system; Conformational
            studies of ethane, n-butane, Cyclohexane.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 3: Kinetics and Catalysis
          </h3>
          <p className="text-gray-700">
            Order & molecularity of reactions: chain, parallel, Competing, Side,
            Consecutive reactions; Kinetics of Fast reactions, Characteristics
            of catalyst, types of catalysis, catalytic poison; Theories of
            catalysis; Acid base catalysis: including kinetics, Enzyme
            catalysis, Mechanism and kinetics of enzyme catalyzed reaction,
            Michaelis-Menten equation, Important catalysts in industrial
            processes; Hydrogenation using Wilkinsons catalyst, Hydroformylation
            by using Cobalt-catalyst, Phase transfer catalyst.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 4: Spectroscopic Techniques
          </h3>
          <p className="text-gray-700">
            Absorption and emission Spectroscopy, Lambert-Beers Law, Principles
            and applications of UVVisible, Factors influencing for UV-VIS
            spectrum; Rotational and Vibrational spectroscopy, Principle of
            FT-IR, and NMR spectroscopy; Modern techniques in structural
            elucidation of compounds by UV-VIS, IR, & NMR Spectroscopy.
          </p>
        </div>

        <div className="module mb-6">
          <h3 className="text-xl font-semibold ">
            Module 5: Phase and Chemical equilibrium
          </h3>
          <p className="text-gray-700">
            Phase Rule: Terms Involved, Phase diagram of one component (Water) &
            two component (Pb/Ag) system & their applications. Law of chemical
            equilibrium, equilibrium constants and their significance, Weak and
            strong electrolytes, Standard electrode potential and its
            application to different kinds of half cells, EMF and its
            measurement and application, Batteries and Fuel Cells, Chemical and
            Electrochemical corrosion, Factors affecting the rate of corrosion.
          </p>
        </div>
      </div>
    </>
  );
}

export function PDFs() {
  let pdfs = [
    {
      title: "Module 1: Chemical Bonding",
      link: "https://drive.google.com/file/d/1vAiXWWnv8EQHo65vXN8XLL772e-0Xzcp/view?usp=sharing",
    },
    {
      title: "Module 2: Organic Structure and Stereochemistry",
      link: "https://drive.google.com/file/d/1Eig3jcEppu03hGUXUjM-XbiUBEVzeQUq/view?usp=sharing",
    },
    {
      title: "Module 3: Kinetics and Catalysis",
      link: "https://drive.google.com/file/d/1NYsxfqW69LuN3YTnZ1yffNRLaLMhqG-m/view?usp=sharing",
    },
    {
      title: "Module 4: Spectroscopic Techniques",
      link: "https://drive.google.com/file/d/1DF8n5rhFlkBi5hOPpjVjjkvXnR1FgViN/view?usp=sharing",
    },
    {
      title: "Module 5: Phase and Chemical equilibrium",
      link: "https://drive.google.com/file/d/1RiwLERyl1TfSEcdh8P3GNEYAmUAzm20W/view?usp=sharing",
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
      link: "https://drive.google.com/file/d/1z3sm9Eaaq2XcGvCy-vdNS6uZz9tO_qxh/view?usp=sharing",
    },
    {
      title: "End Sem 2023",
      link: "https://drive.google.com/file/d/1u1ed-KP0c1RvSHvMLmy0ASCdn31VubCq/view?usp=sharing",
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
