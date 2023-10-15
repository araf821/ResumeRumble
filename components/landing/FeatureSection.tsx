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
      className="bg-zinc-800/40 rounded-md"
    >
      <h1 className="pt-10 text-center text-5xl text-cyan-100">
        Features
      </h1>
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
                  Resume rating
                </h1>
                <h2 className="text-left text-lg">Get your resume ranked!</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-xl flex flex-col gap-6 font-light text-zinc-800">
                Get your resume rated out of 100!
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
                  Resume Rankings
                </h1>
                <h2 className="text-left text-lg">See how you rank!</h2>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-xl flex flex-col gap-6 font-light text-zinc-800">
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
      <div className="grid h-20 w-full place-content-center justify-center bg-black">
        <p className="text-neutral-200">Made for HTV8 ❤️</p>
      </div>
    </motion.div>
  );
};

export default FeatureSection;
