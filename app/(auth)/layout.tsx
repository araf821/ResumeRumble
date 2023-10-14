const layout = ({children}: {children: React.ReactNode}) => {
  return (
    <div className="w-screen grid place-items-center bg-zinc-900 h-[100dvh]">{children}</div>
  )
}
export default layout