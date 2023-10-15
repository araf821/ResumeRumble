import { Button } from "@/components/ui/button";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const RankingLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();
  if (!userId) redirect("/");

  const userRooms = await db.user.findUnique({
    where: {
      userId,
    },
    select: {
      rooms: true,
    },
  });

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 2xl:px-0">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5">
        <p className="text-xl font-bold md:text-2xl">Resume Ranking</p>
        <h2 className="text-lg">See how you rank against others!</h2>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Page */}
        <div className="md:col-span-2 lg:col-span-3">{children}</div>

        {/* Sidebar */}
        <div className="top-24 col-span-1 h-fit rounded-lg border border-zinc-700 bg-zinc-800 md:sticky">
          <p className="py-3 text-center text-xl">Your Rooms</p>
          <hr className="border-zinc-700" />
          {!userRooms?.rooms.length ? (
            <div className="space-y-4 px-4 py-6 text-center">
              <p className="text-zinc-400">
                You have not yet joined or created any rooms.
              </p>
              <Button className="w-full bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-current text-black text-lg font-bold">
                Create Room
              </Button>
            </div>
          ) : (
            userRooms.rooms.map((room) => <div key={room.id}></div>)
          )}
        </div>
      </div>
    </div>
  );
};
export default RankingLayout;
