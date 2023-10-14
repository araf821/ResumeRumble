import Header from "@/components/ui/Header";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-[90dvh] w-screen overflow-clip bg-zinc-900">
      <Header />
      {children}
    </div>
  );
};
export default layout;
