import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import pdfIcon from "@/assets/pdf.svg";

const Rating = () => {
  return (
    <>
      <div className="page-body grid grid-cols-2 gap-5">
        <div className="input-box w-full">
          <h2 className="text-neutral-200">job posting:</h2>
          <Textarea
            className="rounded-xl border border-neutral-200 bg-zinc-800 text-neutral-200"
            placeholder="<Paste job description here. If you’re interested in general feedback, leave this empty.>"
          />
        </div>
        <div className="resume-sec w-full">
          <h2 className="text-neutral-200">your resume:</h2>
          <div className="grid w-full">
            <div className="mx-auto my-10">
              <Image src={pdfIcon} layout="fixed" alt="pdf" />
            </div>
            <Input
              type="file"
              className="w-full rounded-xl border border-neutral-200 bg-zinc-800 text-sky-500"
            />
          </div>
          <Button className="mt-5 w-full bg-sky-500">RATE IT BABY!!!</Button>
          <div className="submit button"></div>
        </div>
      </div>
    </>
  );
};

export default Rating;
