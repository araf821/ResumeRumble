"use client";
import { Button } from "@/components/ui/button";
import { SignInButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const router = useRouter();

  const gotoLogin = () => {
    router.push("/sign-in");
  };
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className=" py-5"
      >
        <h1 className="mt-28 text-center text-xl text-cyan-100">Welcome To</h1>
        <div className="text-center text-6xl font-bold text-sky-500 sm:text-7xl md:text-8xl">
          <motion.span
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                x: -1000,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            animate="show"
            initial="hidden"
          >
            Resume
          </motion.span>
          <motion.span
            className="inline-block"
            variants={{
              hidden: {
                opacity: 0,
                x: 1000,
              },
              show: {
                opacity: 1,
                x: 0,
              },
            }}
            animate="show"
            initial="hidden"
          >
            Rumble
          </motion.span>
        </div>

        <h3 className="pb-5 text-center text-lg text-amber-500 md:text-xl">
          Level up
          <span className="pl-4 indent-2 text-cyan-100">your resume game!</span>
        </h3>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-5 md:mx-12 "
      >
        <div className="mx-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-7">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: [1, 1.05, 1.05, 1, 1],
              rotate: [0, 7, -4, 1, 0],
            }}
            viewport={{ once: true }}
          >
            <Button className="w-full bg-sky-400 py-8 text-xl">
              <SignInButton>Login!</SignInButton>
            </Button>
          </motion.div>
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{
              scale: [1, 1.05, 1.05, 1, 1],
              rotate: [0, -8, 4, -2, 0],
            }}
            viewport={{ once: true }}
          >
            <Button className="w-full bg-sky-400 py-8 text-xl">
              <SignInButton>Sign‑up?</SignInButton>
            </Button>
          </motion.div>
        </div>
        <div className="my-10 rounded-md border-2 border-solid border-neutral-200 bg-zinc-800 bg-opacity-25">
          <p className="mx-auto w-5/6 whitespace-normal py-8 text-center text-xl text-cyan-100">
            Made by job seekers, for job seekers,
            <span className="block whitespace-nowrap px-3 text-sky-500">
              Resume Rumble
            </span>
            provides a free and fun way to improve your resume with detailed,
            competitive insights, powered by OpenAI’s generative models.
          </p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-zinc-800"
      >
        <h1 className="pt-10 indent-12 text-5xl text-cyan-100 underline decoration-amber-500 decoration-2 underline-offset-4">
          Features
        </h1>
        <div className="mx-8 mt-10 grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-5">
          <Accordion
            type="single"
            collapsible
            className="mb-8 h-fit w-full rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-5"
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
                <p className="text-xl font-light text-zinc-800">
                  Get your resume rated out of 100!
                  <p className="my-20">
                    ResumeRumble uses OpenAI to score the quality of your
                    resume. Scoring can be done on the general quality of your
                    resume, or specific to the job you're aiming for.
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
                <p className="text-xl font-light text-zinc-800">
                  Battle your resume against other users!
                  <p className="my-20">
                    Join a lobby, invite your friends, or connect with other
                    users. ResumeRumble will compare your resume against other
                    users and see who comes out on top.
                  </p>
                  Find your place on the leaderboard, sign up!
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="grid h-20 w-full place-content-center justify-center bg-black">
          <p className="text-neutral-200">Made for HTV8 ❤️</p>
        </div>
      </motion.div>
    </div>
  );
}
