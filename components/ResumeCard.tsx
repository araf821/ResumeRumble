import Link from "next/link";
import { Button } from "./ui/button";

function ResumeCard({
  name,
  uploadDate,
  file,
  isDefault = false,
}: {
  name: string;
  uploadDate: string;
  file: string;
  isDefault?: boolean;
}) {
  return (
    <div className="resume-card group flex h-40 flex-col overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
      <h1 className="text-neutral-200">{name}</h1>
      <div className="upload-date text-neutral-200">{uploadDate}</div>
      <Link
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-200 underline"
      >
        View PDF Version
      </Link>
      {isDefault === true ? (
        <h1 className="mt-2 text-sm font-bold text-blue-500">
          This is your default resume
        </h1>
      ) : (
        <Button className="invisible mt-2 bg-sky-500 group-hover:visible">
          Set as default
        </Button>
      )}
    </div>
  );
}

export default ResumeCard;
