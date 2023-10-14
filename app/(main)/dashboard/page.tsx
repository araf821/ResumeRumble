import { Button } from "@/components/ui/button";
import ResumeCard from "@/components/ResumeCard";
import Image from "next/image";
import circleIcon from "@/assets/circle.svg";

type ResumeData = {
  name: string;
  uploadDate: string;
  file: string;
};

const resumes = [
  {
    name: "Johnny Donuts",
    uploadDate: "00-00-00",
    file: "https://example.com/johndoe_resume.pdf",
  },
];

type DashboardProps = {
  resumes: ResumeData[]; // Define the type explicitly as an array of ResumeData
};

const DashboardPage = () => {
  const resumes = [
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
    {
      name: "Johnny Donuts",
      uploadDate: "00-00-00",
      file: "https://example.com/johndoe_resume.pdf",
    },
  ];

  return (
    <div className="px-8 py-5">
      <h1 className="text-4xl text-neutral-200">
        Welcome to <span className="font-bold text-sky-500">Resume Rumble</span>
      </h1>
      <div className="mx-5 grid grid-cols-1 gap-2 pb-5 md:grid-cols-3">
        <Button className="bg-sky-500">Rating</Button>
        <Button className="bg-sky-500">Ranking</Button>
        <Button className="bg-sky-500">Leaderboards</Button>
      </div>

      <div className="mx-5 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-2">
        <div className="flex max-h-[60dvh] flex-col">
          <div className="mx-auto mb-auto max-h-[40dvh] max-w-xs pb-10 md:h-auto">
            <Image
              className=""
              src={circleIcon}
              layout="fixed"
              alt="pfp"
            ></Image>
          </div>
          <div className="mt-auto grid grid-cols-1 gap-2 md:grid-cols-[auto_min-content]">
            <div className="">
              <h1 className="text-lg text-neutral-200">
                You are logged in as:{" "}
              </h1>
              <p className="text-neutral-200">FirstName LastName</p>
            </div>
            <Button className="mb-5 mt-auto w-fit bg-sky-500 md:ml-auto md:mr-5">
              Logout
            </Button>
          </div>
        </div>

        <div className="resumes h-[60dvh]">
          <h2 className="pb-2 text-xl font-bold text-neutral-200">
            your resumes:
          </h2>
          <div className="grid-col-1 grid h-full gap-3 overflow-hidden overflow-y-scroll pb-5 md:grid-cols-2">
            {resumes.map((resume, index) => (
              <ResumeCard
                key={index}
                name={resume.name}
                uploadDate={resume.uploadDate}
                file={resume.file}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
/*
 */
export default DashboardPage;
