import RoomsList from "@/components/RoomsList";
import { db } from "@/lib/db";

const RankingPage = async () => {
  const rooms = await db.room.findMany();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl md:text-3xl">Find Rooms</p>
      <hr className="border-zinc-800" />
      {/* List of rooms */}
      <RoomsList rooms={rooms} />
    </div>
  );
};

export default RankingPage;
