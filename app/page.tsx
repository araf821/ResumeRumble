"use client";

import { Button } from "@/components/ui/button";
import { SignInButton, useAuth } from "@clerk/nextjs";
import { redirect, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FeatureSection from "@/components/landing/FeatureSection";

export default function Home() {
  const { userId } = useAuth();

  if (userId) {
    redirect("/dashboard");
  }

  return (
    <main className="min-h-screen w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0 ">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="py-32"
        >
          <h1 className="text-center text-xl text-cyan-100">Welcome To</h1>
          <div className="text-center text-6xl font-bold text-sky-500 sm:text-7xl md:text-8xl lg:text-9xl">
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
                  transition: {
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.6,
                  },
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
                  transition: {
                    duration: 1.5,
                    type: "spring",
                    bounce: 0.6,
                  },
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
            <span className="pl-4 indent-2 text-cyan-100">
              your resume game!
            </span>
          </h3>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="mx-auto grid max-w-screen-sm grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 gap-4">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: [1, 1.05, 1.05, 1, 1],
                rotate: [0, 7, -4, 1, 0],
              }}
              viewport={{ once: true }}
            >
              <SignInButton>
                <Button className="w-full border-2 border-blue-500 bg-transparent py-8 text-xl font-bold text-blue-500 outline-none hover:outline hover:outline-offset-4 hover:outline-blue-500 transition-all duration-100 ">
                  Sign In
                </Button>
              </SignInButton>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{
                scale: [1, 1.05, 1.05, 1, 1],
                rotate: [0, -8, 4, -2, 0],
              }}
              viewport={{ once: true }}
            >
              <SignInButton>
                <Button className="w-full bg-blue-500 py-8 text-xl transition-all duration-100 hover:bg-blue-600 hover:outline hover:outline-offset-4 hover:outline-blue-600">
                  Get Started
                </Button>
              </SignInButton>
            </motion.div>
          </div>
          <div className="my-12 rounded-md border-2 border-neutral-200 bg-zinc-800 bg-opacity-25">
            <p className="text-balance mx-auto max-w-3xl break-words px-4 py-8 text-center text-cyan-100 md:text-xl">
              Made by job seekers, for job seekers,{" "}
              <span className="text-sky-500">ResumeRumble</span> provides a free
              and fun way to improve your resume with detailed, competitive
              insights, powered by OpenAI’s generative models.
            </p>
          </div>
        </motion.div>

        <FeatureSection />
      </div>
    </main>
  );
}
