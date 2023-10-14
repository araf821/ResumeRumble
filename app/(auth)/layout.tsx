const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid h-[90dvh] w-screen place-items-center bg-zinc-900">
      {children}
    </div>
  );
};
export default layout;
