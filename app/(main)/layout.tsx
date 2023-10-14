import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mt-[10dvh]">
      <Navbar />
      {children}
    </div>
  );
};
export default MainLayout;
