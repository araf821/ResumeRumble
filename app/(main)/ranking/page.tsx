import { db } from "@/lib/db";

const RankingPage = async () => {
  const rooms = await db.room.findMany();

  return (
    <div className="flex flex-col gap-2">
      <p className="text-2xl md:text-3xl">Find Rooms</p>
      <hr className="border-zinc-800" />
      {/* List of rooms */}
      {!rooms.length ? (
        <p className="max-w-md py-8 text-zinc-400">
          No rooms to display at this time. Please check back later or create
          your own!
        </p>
      ) : (
        rooms.map((room) => <div key={room.id}>

        </div>)
      )}
    </div>
  );
};

export default RankingPage;
