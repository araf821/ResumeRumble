import { FC } from "react";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return <nav className="fixed top-0 w-screen h-[10dvh] bg-zinc-800">Navbar</nav>;
};

export default Navbar;
