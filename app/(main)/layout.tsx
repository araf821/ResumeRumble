import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[90dvh] mt-14 w-screen">
      <Navbar />
      {children}
    </div>
  );
};
export default layout;
