import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-16 bg-zinc-900">
      <Navbar />
      {children}
    </div>
  );
};
export default MainLayout;
