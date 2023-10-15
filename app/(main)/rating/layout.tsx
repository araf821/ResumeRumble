export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="px-8 py-5">
        <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 p-5">
          <h1 className="overflow-clip whitespace-nowrap text-xl font-bold">
            Resume rating
          </h1>
          <h2 className="text-lg">Get your resume ranked!</h2>
        </div>
        {children}
      </div>
    </>
  );
}
