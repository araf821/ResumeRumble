import DashboardSidebar from "@/components/DashboardSidebar";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/lib/getCurrentUser";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();
  
  if (!user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 2xl:px-0">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-cyan-200 to-cyan-400 p-5 text-black">
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
