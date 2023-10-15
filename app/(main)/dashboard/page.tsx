import AddFileCard from "@/components/AddFileCard";
import ResumeCard from "@/components/ResumeCard";
import { db } from "@/lib/db";
import { auth } from "@clerk/nextjs";

const DashboardPage = async () => {
  const { userId } = auth();

  const files = await db.file.findMany({
    where: {
      userId,
    },
  });

  return (
    <div className="space-y-1 md:col-span-2 lg:col-span-3">
      <p className="text-2xl text-zinc-200 md:text-3xl">Your Uploads</p>
      <p className="text-zinc-400">
        Manage your default resume or delete uploaded files
      </p>
      <hr className="border-zinc-700" />
      <div className="grid grid-cols-1 gap-4 pt-2 lg:grid-cols-2">
        {files.map((file) => (
          <ResumeCard key={file.id} file={file} />
        ))}
        <AddFileCard />
      </div>
    </div>
  );
};
/*
 */
export default DashboardPage;

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
    isDefault: true,
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
