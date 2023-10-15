"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { SignInButton } from "@clerk/nextjs";
import { Box } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {motion} from 'framer-motion'

export default function Home() {
  const router = useRouter()

  const gotoLogin = () => {
    router.push("/sign-in")
  }
  return (

    <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <motion.div initial={{opacity:0}} animate={{opacity:1}} className = " py-5">
        <h1 className="mt-40 text-center text-xl text-cyan-100">
          Welcome To
        </h1>
        <div className="text-center font-bold text-9xl text-sky-500">
          <motion.span className="inline-block" variants={{
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
          initial="hidden" >
            Resume 
          </motion.span>   
          <motion.span className="inline-block" variants={{
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
          initial="hidden" >
            Rumble 
          </motion.span>   
        </div>
        
        <h3 className="pb-5 text-center text-xl text-amber-500">
          Level up
          <span className="pl-4 indent-2 text-cyan-100">
            your resume game!
          </span>
        </h3>
      </motion.div>
      

      <motion.div initial={{opacity:0}} animate={{opacity:1}} className="px-12 py-10 ">
        <div className="my-20 rounded-md border-solid border-2 border-neutral-200 bg-opacity-25 bg-zinc-800">
          <p className="w-1/2 mx-auto px-20 py-20 text-center text-xl text-cyan-100">
            Made by job seekers, for job seekers,
            <span className="px-3 text-sky-500">
              ResumeRumble
            </span>
            provides a free and fun way to
            improve your resume with detailed, competitive insights,
            powered by OpenAI’s generative models.
          </p>
          <div className="space-x-10 grid grid-cols-2 py-30 px-40 mb-20">
            <motion.div initial={{scale:0}} whileInView={{scale: [1, 1.05, 1.05, 1, 1], rotate: [0, 7, -4, 1, 0], }} viewport={{ once: true }}>
              <Button className="text-xl mt-4 px-52 py-8 col-start-1 bg-sky-400">
                <SignInButton>
                Login! 
                </SignInButton>
              </Button> 
            </motion.div> 
            <motion.div initial={{scale:0}} whileInView={{scale: [1, 1.05, 1.05, 1, 1], rotate: [0, -8, 4, -2, 0], }} viewport={{ once: true }}>
              <Button className="text-xl mt-4 px-52 py-8 col-start-2 bg-sky-400">
                <SignInButton>
                Sign‑up?
                </SignInButton>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{ once: true }} className="bg-zinc-800">
        <h1 className="pt-10 underline decoration-amber-500 underline-offset-4 decoration-2 indent-12 text-5xl text-cyan-100">
          Features
        </h1>
        <div className="grid grid-cols-2 space-x-4 mx-12 mt-10">
          <h2 className="text-left indent-12 text-3xl font-extrabold pt-10 rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Resume Ratings
            <p className="indent-0 px-14 font-light mt-10 bg-zinc-900 bg-opacity-50 text-xl pt-20 pb-20 text-cyan-100">
              Get your resume rated out of 100!
              <p className="my-20">
                ResumeRumble uses OpenAI to score the quality of your resume.
                Scoring can be done on the general quality of your resume, or 
                specific to the job you're aiming for.
              </p>
              What score do you think you'll get? Sign up now!
            </p>
          </h2>
          <h2 className="text-left pt-10 indent-12 text-left text-3xl font-extrabold rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
            Resume Rankings
            <p className="indent-0 text-left px-12 font-light text-cyan-100 mt-10 pt-20 pb-20 text-xl bg-zinc-900 bg-opacity-50">
                Battle your resume against other users!
              <p className="text-left my-20">
                Join a lobby, invite your friends, or connect with other users.
                ResumeRumble will compare your resume against other users and see 
                who comes out on top.
              </p>
                Find your place on the leaderboard, sign up!
            </p>
          </h2>
        </div>
      </motion.div>
    </div>
  );
}