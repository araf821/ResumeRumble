"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import FileUpload from "@/components/FileUpload";
import PDFViewer from "@/components/PDFViewer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const Rating = () => {
  var [submittedResume, setSubmittedResume] = useState(false);

  if (submittedResume) {
    return (
      //	<div className='grid grid-cols-1 md:grid-cols-2 text-white'>
      <div>
        {/* <div className="mx-8 my-5 rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 px-5 py-5">
          <h1 className=" overflow-clip whitespace-nowrap text-xl font-bold">
            Results:
          </h1>
          <h2 className="text-lg">Are you cooking!?</h2>
        </div> */}
        <div className="grid grid-cols-1 gap-5 text-white md:grid-cols-[33%_auto]">
          <div className="rounded-xl bg-zinc-800 p-5">
            <PDFViewer url="amongus" />
          </div>
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-xl bg-zinc-800 p-5"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>Grammar: 5/5</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Action Verbs: 5/5</AccordionTrigger>
              <AccordionContent>
                Yes. It comes with default styles that matches the other
                components&apos; aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Content: 5/5</AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                (Optional) Keyword Matching: 5/5
              </AccordionTrigger>
              <AccordionContent>
                Yes. It&apos;s animated by default, but you can disable it if
                you prefer.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Button
          className="mt-5 w-full bg-sky-500"
          onClick={() => setSubmittedResume(!submittedResume)}
        >
          rate another resume
        </Button>
      </div>
    );
  } else {
    return (
      <>
        <div className="page-body grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="input-box w-full rounded-xl bg-zinc-800 p-5">
            <h2 className="font-bold text-neutral-200">job posting:</h2>
            <Textarea
              className="h-[55dvh] resize-none rounded-xl border border-neutral-200 bg-zinc-800 text-neutral-200"
              placeholder="<Paste job description here. If you’re interested in general feedback, leave this empty.>"
            />
          </div>
          <div className="resume-sec w-full rounded-xl bg-zinc-800 p-5">
            <h2 className="font-bold text-neutral-200">your resume:</h2>
            <div className="grid w-full">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select resume or upload" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="upload">Upload</SelectItem>
                  <SelectItem value="Resume 1">Resume 1</SelectItem>
                  <SelectItem value="Resume 1 (1)">Resume 1 (1)</SelectItem>
                </SelectContent>
              </Select>
              <FileUpload />
            </div>
            <Button
              className="mt-5 w-full bg-sky-500"
              onClick={() => setSubmittedResume(!submittedResume)}
            >
              RATE IT BABY!!!
            </Button>
            <div className="submit button"></div>
          </div>
        </div>
      </>
    );
  }
};

export default Rating;
