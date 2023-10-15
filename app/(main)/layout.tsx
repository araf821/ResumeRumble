import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

const MainLayout = async ({ children }: { children: React.ReactNode }) => {
  const { userId } = await auth();

  if (!userId) {
    redirect("/");
  }

  return (
    <div className="mt-16 bg-zinc-900">
      <Navbar />
      <Toaster />
      {children}
    </div>
  );
};
export default MainLayout;
