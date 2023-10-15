"use client";
import PDFViewer from "@/components/PDFViewer";
import ResumeFeedback from "@/components/ResumeFeedback";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Rating = () => {
  const data = [
    {
      title: "Grammar: 5/5",
      content: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      title: "Action Verbs: 5/5",
      content:
        "Yes. It comes with default styles that matches the other components&apos; aesthetic.",
    },
    {
      title: "Content: 5/5",
      content:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
    {
      title: "(Optional) Keyword Matching: 5/5",
      content:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
    {
      title: "(Optional) Keyword Matching: 5/5",
      content:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
    {
      title: "(Optional) Keyword Matching: 5/5",
      content:
        "Yes. It&apos;s animated by default, but you can disable it if you prefer.",
    },
  ];
  return (
    <>
      <ResumeFeedback data={data} />
      <ResumeFeedback />{" "}
      <div className="mb-5 h-24 resize-none rounded-xl border border-neutral-200 bg-zinc-800 p-5 text-neutral-200">
        The winner is...
      </div>
      <Link className="mt-5 w-full" href="/rating">
        <Button className="w-full bg-sky-500">rate another resume</Button>
      </Link>
    </>
  );
};
export default Rating;
