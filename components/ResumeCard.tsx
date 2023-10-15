"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Loader2, Trash2 } from "lucide-react";
import { File } from "@prisma/client";
import { cn, dateFormat } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import qs from "query-string";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

function ResumeCard({ file }: { file: File }) {
  const { toast } = useToast();
  const router = useRouter();

  const { mutate: setDefault, isLoading } = useMutation({
    mutationFn: async () => {
      const url = qs.stringifyUrl({
        url: "/api/file/default",
        query: {
          fileId: file.id,
          userId: file.userId,
        },
      });

      await axios.post(url);
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Default post updated successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    },
  });

  const { mutate: deleteFile, isLoading: isDeleteLoading } = useMutation({
    mutationFn: async () => {
      const url = qs.stringifyUrl({
        url: "/api/file",
        query: {
          fileId: file.id,
        },
      });

      await axios.delete(url);
    },
    onSuccess: () => {
      router.refresh();
      toast({
        title: "Post deleted successfully!",
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong!",
        variant: "destructive",
      });
    },
  });

  return (
    <div
      className={cn(
        "resume-card flex flex-col overflow-hidden rounded-md border border-zinc-700 bg-transparent px-5 py-5",
        { "border-2 border-white": file.isDefault },
      )}
    >
      <p className="break-words text-xl text-neutral-200">{file.name}</p>
      <div className="text-sm text-zinc-400">
        Uploaded on: {dateFormat(new Date(file.createdAt).toISOString())}
      </div>

      <Link
        href={file.fileUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-fit text-sky-500"
      >
        View PDF Version
      </Link>
      <div className="grid grid-cols-[auto_min-content] gap-2">
        {file.isDefault ? (
          <Button
            className="mt-2 border-2 border-zinc-800 bg-zinc-950"
            disabled
          >
            Default resume
          </Button>
        ) : (
          <Button
            disabled={isLoading}
            onClick={() => setDefault()}
            className="mt-2 border hover:bg-zinc-800"
          >
            {isLoading ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              "Set as default"
            )}
          </Button>
        )}
        <Button
          onClick={() => deleteFile()}
          className="mt-2 border border-red-500 text-red-500 hover:bg-red-500 hover:text-black"
        >
          {isDeleteLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Trash2 className="h-5 w-5" />
          )}
        </Button>
      </div>
    </div>
  );
}

export default ResumeCard;
