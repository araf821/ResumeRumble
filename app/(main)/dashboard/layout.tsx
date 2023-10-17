import DashboardSidebar from "@/components/DashboardSidebar";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";
import { initializeUser } from "@/lib/initializeUser";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  await initializeUser();
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 2xl:px-0">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-400 text-black p-5">
        <h1 className="text-xl font-bold md:text-2xl">
          Hello, {user.name.split(" ")[0]}!
        </h1>
        {/* <h2 className="text-lg">See how you rank!</h2> */}
      </div>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
        <DashboardSidebar user={user} />
        {children}
      </div>
    </div>
  );
};
export default DashBoardLayout;
