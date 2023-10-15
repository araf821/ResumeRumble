"use client";

import { User } from "@prisma/client";
import Image from "next/image";
import { FC } from "react";
import { Button } from "./ui/button";

interface RoomMemberCardProps {
  user: User;
}

const RoomMemberCard: FC<RoomMemberCardProps> = ({ user }) => {
    
  return (
    <div
      key={user.id}
      className="flex w-full items-center gap-4 rounded-md bg-zinc-950 px-4 py-6"
    >
      <div className="relative h-12 w-12 overflow-hidden rounded-full">
        <Image src={user.imageUrl} alt="" fill />
      </div>
      <p>{user.name}</p>
      <Button
        className="ml-auto hover:bg-zinc-700"
      >
        Challenge
      </Button>
    </div>
  );
};

export default RoomMemberCard;
