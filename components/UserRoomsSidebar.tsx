"use client";

import { Room } from "@prisma/client";
import { FC } from "react";
import { Button } from "./ui/button";
import { useModal } from "@/hooks/useModal";

interface UserRoomsSidebarProps {
  rooms: Room[] | undefined;
}

const UserRoomsSidebar: FC<UserRoomsSidebarProps> = ({ rooms }) => {
  const { onOpen } = useModal();

  return (
    <div className="top-24 col-span-1 h-fit rounded-lg border border-zinc-700 bg-zinc-800 md:sticky">
      <p className="py-3 text-center text-xl">Your Rooms</p>
      <hr className="border-zinc-700" />
      {!rooms?.length ? (
        <div className="space-y-4 px-4 py-6 text-center">
          <p className="text-zinc-400">
            You have not yet joined or created any rooms.
          </p>
          <Button
            onClick={() => onOpen("createRoom")}
            className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-lg font-bold text-black hover:bg-current"
          >
            Create Room
          </Button>
        </div>
      ) : (
        rooms.map((room) => <div key={room.id}>
          
        </div>)
      )}
      
    </div>
  );
};

export default UserRoomsSidebar;
