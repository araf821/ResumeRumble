import React from "react";

type ResumeData = {
  name: string;
  uploadDate: string;
  file: string;
};

type ResumeCardProps = {
  data: ResumeData;
};

function ResumeCard({
  name,
  uploadDate,
  file,
}: {
  name: string;
  uploadDate: string;
  file: string;
}) {
  return (
    <div className="resume-card overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
      <h1 className="text-neutral-200">{name}</h1>
      <div className="upload-date text-neutral-200">{uploadDate}</div>
      <a
        href={file}
        target="_blank"
        rel="noopener noreferrer"
        className="text-neutral-200 underline"
      >
        View PDF Version
      </a>
    </div>
  );
}

export default ResumeCard;
