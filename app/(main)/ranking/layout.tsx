import UserRoomsSidebar from "@/components/UserRoomsSidebar";
import { db } from "@/lib/db";
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
      Room: true,
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

        <UserRoomsSidebar rooms={userRooms?.Room} />
      </div>
    </div>
  );
};
export default RankingLayout;
