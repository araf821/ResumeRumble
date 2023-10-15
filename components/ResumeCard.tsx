import Link from "next/link";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";

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
    <div className="resume-card flex h-40 flex-col overflow-hidden rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
      <h1 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-neutral-200">
        {name}
      </h1>
      <div className="upload-date overflow-hidden overflow-ellipsis whitespace-nowrap text-neutral-200">
        {uploadDate}
      </div>
      <Link
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="overflow-hidden overflow-ellipsis whitespace-nowrap text-neutral-200 underline"
      >
        View PDF Version
      </Link>
      <div className="grid grid-cols-[auto_min-content] gap-2">
        {isDefault === true ? (
          <Button className="mt-2 bg-sky-700" disabled>
            Default resume
          </Button>
        ) : (
          <Button className="mt-2 border bg-zinc-800 hover:border-0 hover:bg-sky-500">
            Set as default
          </Button>
        )}
        <Button className="mt-2 border bg-zinc-800 hover:border-0 hover:bg-red-500">
          <Trash2 />
        </Button>
      </div>
    </div>
  );
}

export default ResumeCard;
