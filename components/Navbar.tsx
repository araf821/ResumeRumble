"use client";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { CircleDashed } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="sticky top-0 flex h-[8dvh] bg-zinc-800">
      <Link
        className="my-auto ml-5 mr-auto text-3xl font-bold text-neutral-200"
        href="/"
      >
        RR
      </Link>
      <div className="my-auto ml-auto mr-10 hidden space-x-10 md:flex">
        <Link
          className="text-lg text-neutral-200 active:underline"
          style={path === "/dashboard" ? { textDecoration: "underline" } : {}}
          href="/dashboard"
        >
          dashboard
        </Link>
        <Link
          className="text-lg text-neutral-200 active:underline"
          style={path === "/rating" ? { textDecoration: "underline" } : {}}
          href="/rating"
        >
          rating
        </Link>
        <Link
          className="text-lg text-neutral-200 active:underline"
          style={path === "/ranking" ? { textDecoration: "underline" } : {}}
          href="/ranking"
        >
          ranking
        </Link>
      </div>
      <div className="my-auto ml-auto mr-5 space-x-10 md:hidden">
        <Menu className="text-neutral-200" />
      </div>
      <CircleDashed
        className="my-auto mr-5 hidden h-auto w-[5dvh] text-neutral-200 md:block"
        size={50}
      />
    </nav>
  );
};

export default Navbar;
