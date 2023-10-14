import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    
    <div className = "w-full min-h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <h1 className= "pt-10 indent-12 text-xl font-serif text-cyan-100">
        Welcome To
      </h1>
      <h2 className= "font-bold tracking-wide pt-5 indent-24 text-left text-8xl font-serif text-sky-500">
        Resume Rumble
      </h2>
      <h3 className= "indent-24 text-left text-xl font-serif text-amber-500">
        Level up 
        <span className = "indent-2 text-cyan-100"> 
          your resume game!
        </span>
      </h3>
      
      <div className= "px-10 pt-10">
        <div className = "rounded-md border-solid border-2 border-neutral-200 bg-opacity-25 bg-zinc-800 grid grid-cols-2">
          <p className = "px-20 py-40 grid-rows-8 col-start-1 text-left text-xl font-serif text-cyan-100">
              Made by job seekers, for job seekers,
              <span className= "px-1 row-start-3 row-end-4 text-sky-500">
                Resume Rumble 
              </span>
              provides a free and fun way to
              improve your resume with detailed, competitive insights, 
              powered by OpenAI’s generative models.
          </p>
          <div className = "grid grid-rows-5 col-start-2 py-30 px-40">
            <Button className="py-8 row-start-2 bg-sky-400">
              Login!
           </Button>
           <Button className="py-8 row-start-4 bg-sky-400">
             Sign-Up?
           </Button>
          </div>
        </div>
      </div>
    </div>
  );
}