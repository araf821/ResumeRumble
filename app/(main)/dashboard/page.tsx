import { initializeUser } from "@/lib/initializeUser";

const DashboardPage = async () => {
  const user = await initializeUser();

  return <div className="text-5xl text-white font-bold">{user?.name}</div>;
};
export default DashboardPage;
