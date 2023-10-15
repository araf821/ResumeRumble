import DashboardSidebar from "@/components/DashboardSidebar";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";

const DashBoardLayout = async ({ children }: { children: React.ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/");
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 2xl:px-0">
      <div className="mb-8 rounded-xl bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 p-5">
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
