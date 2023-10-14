"use client";
import circleIcon from "@/assets/circle.svg";
import hamburgerIcon from "@/assets/hamburger.svg";
import Image from "next/image";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const path = usePathname();

  return (
    <nav className="sticky top-0 flex h-[10dvh] bg-zinc-800">
      <a
        className="my-auto ml-5 mr-auto text-3xl font-bold text-neutral-200"
        href="/"
      >
        RR
      </a>
      <div className="my-auto ml-auto mr-10 hidden space-x-10 md:flex">
        <a
          className="text-lg text-neutral-200 active:underline"
          style={path === "/dashboard" ? { textDecoration: "underline" } : {}}
          href="/dashboard"
        >
          dashboard
        </a>
        <a
          className="text-lg text-neutral-200 active:underline"
          style={path === "/rating" ? { textDecoration: "underline" } : {}}
          href="/rating"
        >
          rating
        </a>
        <a
          className="text-lg text-neutral-200 active:underline"
          style={path === "/ranking" ? { textDecoration: "underline" } : {}}
          href="/ranking"
        >
          ranking
        </a>
      </div>
      <div className="my-auto ml-auto mr-5 space-x-10 md:hidden">
        <Image
          className="w-[7.5dvh]"
          src={hamburgerIcon}
          width={5}
          alt="menu"
        ></Image>
      </div>
      <Image
        className="my-auto mr-5 hidden w-[7.5dvh] md:block"
        src={circleIcon}
        width={5}
        alt="pfp"
      ></Image>
    </nav>
  );
};

export default Navbar;
