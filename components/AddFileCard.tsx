"use client";

import { useModal } from "@/hooks/useModal";
import { PlusCircle } from "lucide-react";
import { FC } from "react";

interface AddFileCardProps {}

const AddFileCard: FC<AddFileCardProps> = ({}) => {
  const {onOpen} = useModal();

  return (
    <button
      className="lg:text-lg border-dashed border-zinc-600 border-2 flex w-full max-w-md rounded-md flex-col items-center justify-center h-full"
      onClick={() => onOpen("addFile")}
    >
      <p className="text-zinc-400">Add New File</p>
      <PlusCircle className="text-zinc-400 w-5 h-5" />
    </button>
  );
};

export default AddFileCard;
