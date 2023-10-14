"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Box } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter()

  const gotoLogin = () => {
    router.push("/sign-in")
  }
  return (

    <div className="w-full min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <h1 className="pt-10 indent-12 text-xl text-cyan-100">
        Welcome To
      </h1>
      <h2 className="font-bold pt-5 indent-24 text-left text-8xl text-sky-500">
        Resume Rumble
      </h2>
      <h3 className="indent-24 pr-1 text-left text-xl text-amber-500">
        Level up
        <span className="pl-4 indent-2 text-cyan-100">
          your resume game!
        </span>
      </h3>

      <div className="px-12 py-10">
        <div className="rounded-md border-solid border-2 border-neutral-200 bg-opacity-25 bg-zinc-800 grid grid-cols-2">
          <p className="px-20 py-40 grid-rows-8 col-start-1 text-left text-xl text-cyan-100">
            Made by job seekers, for job seekers,
            <span className="px-3 row-start-3 row-end-4 text-sky-500">
              Resume Rumble
            </span>
            provides a free and fun way to
            improve your resume with detailed, competitive insights,
            powered by OpenAI’s generative models.
          </p>
          <div className="grid grid-rows-4 col-start-2 py-30 px-40">
            <Button className="text-xl mt-4 py-8 row-start-2 bg-sky-400" onClick={() => gotoLogin()}>
              Login!
            </Button>
            <Button className="text-xl py-8 row-start-3 bg-sky-400" onClick={() => gotoLogin()}>
              Sign-Up?
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <h1 className="pt-10 underline decoration-amber-500 underline-offset-4 decoration-2 indent-12 text-5xl text-cyan-100">
          Features
        </h1>
        <div className="grid grid-cols-2 space-x-4 mx-12 mt-10">
          <h2 className="text-left indent-12 text-3xl font-extrabold pt-10 rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            Resume Ratings
            <p className="indent-0 px-14 font-light mt-10 bg-zinc-900 bg-opacity-50 text-xl pt-20 pb-20 text-cyan-100">
              Get your resume rated out of 100!
              <p className="my-20">
                Resume Rumble uses OpenAI to score the quality of your resume.
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
                Resume Rumble will compare your resume against other users and see 
                who comes out on top.
              </p>
                Where do you stand on the leaderboard, sign up!
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}