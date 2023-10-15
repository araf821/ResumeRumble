export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-8 py-5">
        <div className="mb-8 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 p-5">
          <h1 className="text-xl font-bold">Welcome back, YourName</h1>
          {/* <h2 className="text-lg">See how you rank!</h2> */}
        </div>
        {children}
      </div>
    </>
  );
}
