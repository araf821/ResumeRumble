"use client";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { CircleDashed } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

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

      <Sheet >

      <SheetTrigger asChild>
        <Menu className="text-neutral-200" />
      </SheetTrigger>

       <SheetContent className="bg-zinc-800">
        <SheetHeader>
          <SheetTitle className=" text-xl text-zinc-50">Resume Rumble</SheetTitle>
        </SheetHeader>
       
        <div className=" mt-4 flex h-50 flex-col  rounded-full px-4 pb-4 font-karla tracking-wider text-zinc-50">
           <div
            onClick={() => close()}
            className="flex flex-col items-center gap-4"
          >
            <SheetClose asChild>

            <Link
              href="/rating"
              className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:text-zinc-800  hover:bg-zinc-50"
            >
              Dashboard
            </Link>
            </SheetClose>
          
          </div>
          <div
            onClick={() => close()}
            className="flex flex-col items-center gap-4"
          >
            <SheetClose asChild>

            <Link
              href="/rating"
              className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:text-zinc-800  hover:bg-zinc-50"
            >
              Rating
            </Link>
            </SheetClose>
          
          </div>
            <div
            onClick={() => close()}
            className="order-last flex flex-col items-center gap-4"
          >
            <SheetClose asChild>

            <Link
              href="/rating"
              className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:text-zinc-800  hover:bg-zinc-50"
            >
              Ranking
            </Link>
            </SheetClose>
          
          </div>  
           
        </div>
      
        
      </SheetContent>
    </Sheet>

      </div>
      <CircleDashed
        className="my-auto mr-5 hidden h-auto w-[5dvh] text-neutral-200 md:block"
        size={50}
      />
    </nav>
  );
};

export default Navbar;
