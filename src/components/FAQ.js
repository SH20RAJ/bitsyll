import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";

export function FAQ() {

  let faqs = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it styled?",
      answer:
        "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: "Is it animated?",
      answer:
        "Yes. It's animated by default, but you can disable it if you prefer.",
    },
  ];
  
  return (
    <>
      <div className=" p-2">
      <h2 className="text-2xl font-bold  ">
        FAQs <span className=" w-full self-end ">{""}</span>
      </h2>
      <hr className="border-1 border-gray-100 opacity-20" />

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How to add content?</AccordionTrigger>
            <AccordionContent>
              Contact the developer <Link className=" text-fuchsia-400" href={"https://instagram.com/sh20raj"}>@sh20raj</Link> for contributing, suggesting or adding content or Join the Whatsapp Group for contributing and sending feedback after that you may <span className=" text-fuchsia-400">leave the whatsapp group</span>.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I contribute to this website (Codes)?</AccordionTrigger>
            <AccordionContent>
              Yes. Your are welcome to contribute to this website. You can add content, suggest changes or report bugs. Visit <Link className=" text-fuchsia-400" href={"https://github.com/sh20raj/bitsyll"} target="_">Github</Link> for more details.
            </AccordionContent>
          </AccordionItem>
          
        </Accordion>
      </div>
    </>
  );
}
