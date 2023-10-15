import RoomMemberCard from "@/components/RoomMemberCard";
import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import Image from "next/image";
import { redirect } from "next/navigation";
import { FC } from "react";

interface pageProps {
  params: {
    roomId: string;
  };
}

const page: FC<pageProps> = async ({ params }) => {
  const room = await db.room.findUnique({
    where: {
      id: params.roomId,
    },
    include: {
      users: true,
    },
  });

  if (!room) redirect("/ranking");

  return (
    <div className="flex flex-col gap-4">
      <div className="space-y-2">
        <p className="text-2xl md:text-3xl">{room?.name}</p>
        <hr className="border-zinc-800" />
      </div>
      {room.users.map((user) => (
        <RoomMemberCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default page;
