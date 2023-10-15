"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const gotoLogin = () => {
    router.push("/sign-in");
  };
  return (
    <div className="min-h-screen w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
      <h1 className="pt-10 indent-12 text-xl text-cyan-100">Welcome To</h1>
      <h2 className="pt-5 text-left indent-24 text-8xl font-bold text-sky-500">
        Resume Rumble
      </h2>
      <h3 className="pr-1 text-left indent-24 text-xl text-amber-500">
        Level up
        <span className="pl-4 indent-2 text-cyan-100">your resume game!</span>
      </h3>

      <div className="px-12 py-10">
        <div className="grid grid-cols-2 rounded-md border-2 border-solid border-neutral-200 bg-zinc-800 bg-opacity-25">
          <p className="grid-rows-8 col-start-1 px-20 py-40 text-left text-xl text-cyan-100">
            Made by job seekers, for job seekers,
            <span className="row-start-3 row-end-4 px-3 text-sky-500">
              Resume Rumble
            </span>
            provides a free and fun way to improve your resume with detailed,
            competitive insights, powered by OpenAI’s generative models.
          </p>
          <div className="py-30 col-start-2 grid grid-rows-4 px-40">
            <Button
              className="row-start-2 mt-4 bg-sky-400 py-8 text-xl"
              onClick={() => gotoLogin()}
            >
              Login!
            </Button>
            <Button
              className="row-start-3 bg-sky-400 py-8 text-xl"
              onClick={() => gotoLogin()}
            >
              Sign-Up?
            </Button>
          </div>
        </div>
      </div>

      <div className="bg-zinc-800">
        <h1 className="pt-10 indent-12 text-5xl text-cyan-100 underline decoration-amber-500 decoration-2 underline-offset-4">
          Features
        </h1>
        <div className="mx-12 mt-10 grid grid-cols-2 space-x-4">
          <h2 className="rounded-md bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 pt-10 text-left indent-12 text-3xl font-extrabold">
            Resume Ratings
            <p className="mt-10 bg-zinc-900 bg-opacity-50 px-14 pb-20 pt-20 indent-0 text-xl font-light text-cyan-100">
              Get your resume rated out of 100!
              <p className="my-20">
                Resume Rumble uses OpenAI to score the quality of your resume.
                Scoring can be done on the general quality of your resume, or
                specific to the job you&rsquo;re aiming for.
              </p>
              What score do you think you&rsquo;ll get? Sign up now!
            </p>
          </h2>
          <h2 className="rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pt-10 text-left indent-12 text-3xl font-extrabold">
            Resume Rankings
            <p className="mt-10 bg-zinc-900 bg-opacity-50 px-12 pb-20 pt-20 text-left indent-0 text-xl font-light text-cyan-100">
              Battle your resume against other users!
              <p className="my-20 text-left">
                Join a lobby, invite your friends, or connect with other users.
                Resume Rumble will compare your resume against other users and
                see who comes out on top.
              </p>
              Where do you stand on the leaderboard, sign up!
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
}
