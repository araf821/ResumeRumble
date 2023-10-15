"use client";

import { useModal } from "@/hooks/useModal";
import { PlusCircle } from "lucide-react";
import { FC } from "react";

interface AddFileCardProps {}

const AddFileCard: FC<AddFileCardProps> = ({}) => {
  const { onOpen } = useModal();

  return (
    <button
      className="flex h-[30dvh] w-full flex-col items-center justify-center rounded-md border-2 border-dashed border-zinc-600 lg:text-lg"
      onClick={() => onOpen("addFile")}
    >
      <p className="text-zinc-400">Add New File</p>
      <PlusCircle className="h-5 w-5 text-zinc-400" />
    </button>
  );
};

export default AddFileCard;
