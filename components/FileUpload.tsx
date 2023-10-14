"use client";

import { FC } from "react";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
}

const FileUpload: FC<FileUploadProps> = ({ onChange, value }) => {
  if (value) {
    alert("Got the file")
  }

  return (
    <UploadDropzone

      className="h-full w-full bg-zinc-800"
      endpoint="pdf"
      
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log("EEEERRRRRRRROORORRORORO", error);
      }}
    />
  );
};

export default FileUpload;
