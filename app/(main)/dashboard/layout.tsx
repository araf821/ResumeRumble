export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-8 py-5">
        <div className="mb-8 rounded-xl bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 p-5">
          <h1 className="overflow-clip whitespace-nowrap text-xl font-bold">
            Welcome back, YourName
          </h1>
          {/* <h2 className="text-lg">See how you rank!</h2> */}
        </div>
        {children}
      </div>
    </>
  );
}
