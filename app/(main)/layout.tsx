import Navbar from "@/components/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[90dvh] w-screen bg-zinc-900">
      <Navbar />
      {children}
    </div>
  );
};
export default layout;
