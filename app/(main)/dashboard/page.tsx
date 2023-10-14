import { Button } from "@/components/ui/button";
import ResumeCard from "@/components/ResumeCard";
import { CircleDashed, Plus } from "lucide-react";

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
  ];

  return (
    <div className="">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-[33%_auto]">
        <div className="flex h-[70dvh] flex-col justify-center rounded-xl bg-zinc-800">
          <CircleDashed className="h-full w-full px-10 py-20 text-neutral-200" />
          <div className="mt-auto grid grid-cols-1 gap-2 pl-5 md:grid-cols-[auto_min-content]">
            <div className="">
              <h1 className="text-md text-neutral-200 md:mb-5">
                You are logged in as: FirstName LastName
              </h1>
            </div>
            <Button className="mb-5 mt-auto w-fit bg-sky-500 md:ml-auto md:mr-5">
              Logout
            </Button>
          </div>
        </div>

        <div className="resumes h-[70dvh] rounded-xl bg-zinc-800 p-5">
          <h2 className="pb-2 text-xl font-bold text-neutral-200">
            your resumes:
          </h2>
          <div className="grid-col-1 grid h-[60dvh] gap-3 overflow-hidden overflow-y-scroll md:grid-cols-2">
            {resumes.map((resume, index) => (
              <ResumeCard
                key={index}
                name={resume.name}
                uploadDate={resume.uploadDate}
                file={resume.file}
              />
            ))}
            <div className="grid h-28 content-center justify-items-center rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
              <Plus className="text-neutral-200" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*
 */
export default DashboardPage;
