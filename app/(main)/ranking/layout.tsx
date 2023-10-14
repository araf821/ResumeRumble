export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-8 py-5">
        <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-5">
          <h1 className="overflow-clip whitespace-nowrap text-xl font-bold">
            Resume ranking
          </h1>
          <h2 className="text-lg">See how you rank!</h2>
        </div>
        {children}
      </div>
    </>
  );
}
