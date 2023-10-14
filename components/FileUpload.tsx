"use client";

import { FC } from "react";
import "@uploadthing/react/styles.css";
import { UploadDropzone } from "@/lib/uploadthing";

interface FileUploadProps {
  endPoint: "pdf";
  onChange: (url?: string) => void;
  value: string;
}

const FileUpload: FC<FileUploadProps> = ({ endPoint, onChange, value }) => {
  if (value) {
    // if (endPoint === "image") {
    //   return (
    //     <div className="relative h-full w-full">
    //       <Image
    //         src={value}
    //         alt="uploaded image"
    //         className="rounded-sm object-cover"
    //         fill
    //       />
    //       <button
    //         onClick={() => onChange("")}
    //         type="button"
    //         className="group absolute -right-2 -top-2 rounded-md bg-zinc-800 p-1 text-white shadow-sm"
    //       >
    //         <X className="h-5 w-5 transition group-hover:rotate-90" />
    //       </button>
    //     </div>
    //   );
    // }

    
  }

  return (
    <UploadDropzone
      className="h-full w-full bg-zinc-800"
      endpoint={endPoint}
      onClientUploadComplete={(res) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};

export default FileUpload;
