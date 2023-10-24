'use client'

import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { motion } from "framer-motion";

interface FeatureSectionProps {}

const FeatureSection: FC<FeatureSectionProps> = ({}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="rounded-md pt-12 pb-8 mb-8 bg-zinc-800/40"
    >
      <h1 className="text-center text-5xl text-cyan-100">Features</h1>
      <div className="mx-8 mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
        <Accordion
          type="single"
          collapsible
          className="mb-8 h-fit w-full rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 p-5"
        >
          <AccordionItem value="1">
            <AccordionTrigger>
              <div>
                <h1 className="overflow-clip whitespace-nowrap text-left text-xl font-bold">
                  Resume Rating
                </h1>
                <h2 className="text-left text-lg">Get your resume rated!</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="flex flex-col gap-6 text-xl font-light text-zinc-800">
                Get a score out of 100 for your resume!
                <p className="">
                  ResumeRumble uses OpenAI to score the quality of your resume.
                  Scoring can be done on the general quality of your resume, or
                  specific to the job you&apos;re aiming for.
                </p>
                What score do you think you&rsquo;ll get? Sign up now!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion
          type="single"
          collapsible
          className="mb-8 h-fit w-full rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5"
        >
          <AccordionItem value="2">
            <AccordionTrigger>
              <div>
                <h1 className="overflow-clip whitespace-nowrap text-left text-xl font-bold">
                  Resume Ranking
                </h1>
                <h2 className="text-left text-lg">See how you rank against others!</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="flex flex-col gap-6 text-xl font-light text-zinc-800">
                Battle your resume against other users!
                <p className="">
                  Join a lobby, invite your friends, or connect with other
                  users. ResumeRumble will compare your resume against other
                  users and see who comes out on top.
                </p>
                Find your place on the leader boards, sign up!
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
