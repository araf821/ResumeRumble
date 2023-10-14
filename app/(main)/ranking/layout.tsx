export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-8 my-5 rounded-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-5 py-5">
        <h1 className="overflow-clip whitespace-nowrap text-xl font-bold">
          Resume ranking
        </h1>
        <h2 className="text-lg">See how you rank!</h2>
      </div>
      {children}
    </>
  );
}
