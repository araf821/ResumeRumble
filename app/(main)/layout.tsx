import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 bg-zinc-900">
      <Navbar />
      <Toaster />
      {children}
    </div>
  );
};
export default MainLayout;
