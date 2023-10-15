import { Room } from "@prisma/client";
import { ArrowRight } from "lucide-react";
import { FC } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

interface RoomsListProps {
  rooms: Room[];
}

const RoomsList: FC<RoomsListProps> = ({ rooms }) => {
  if (!rooms.length) {
    return (
      <p className="max-w-md py-8 text-zinc-400">
        No rooms to display at this time. Please check back later or create your
        own!
      </p>
    );
  }

  return (
    <>
      {rooms.map((room) => (
        <div
          key={room.id}
          className="flex items-center justify-between rounded-md bg-zinc-950 px-4 py-3"
        >
          <div>
            <p className="text-xl">{room.name}</p>
            <p className="text-zinc-400">Created by @CreatorName</p>
            <p className="text-zinc-400">Capacity: {room.capacity}</p>
          </div>
          <Link href={`/ranking/room/${room.id}`}>
            <ArrowRight />
          </Link>
        </div>
      ))}
    </>
  );
};

export default RoomsList;
