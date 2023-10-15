"use client";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import Link from "next/link";
import { SignOutButton } from "@clerk/nextjs";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed z-10 left-0 right-0 top-0 flex h-16 border-b-2 border-zinc-800 bg-zinc-900 shadow-[0_2px_20px_2px] shadow-blue-500/10">
      <div className="mx-auto flex w-full max-w-screen-xl items-center justify-between px-4 2xl:px-0">
        <Link className="text-3xl font-bold text-neutral-200" href="/dashboard">
          RR
        </Link>
        <div className="hidden items-center justify-center gap-6 md:flex">
          <Link
            className={cn(
              "rounded-md bg-zinc-800 px-2.5 py-1 text-lg text-neutral-200 transition hover:bg-zinc-700",
              {
                "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 hover:bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]":
                  pathname === "/dashboard",
              },
            )}
            href="/dashboard"
          >
            Dashboard
          </Link>
          <Link
            className={cn(
              "rounded-md bg-zinc-800 px-2.5 py-1 text-lg text-neutral-200 transition hover:bg-zinc-700",
              {
                "bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 hover:bg-gradient-to-r":
                  pathname === "/rating",
              },
            )}
            href="/rating"
          >
            Rating
          </Link>
          <Link
            className={cn(
              "rounded-md bg-zinc-800 px-2.5 py-1 text-lg text-neutral-200 transition hover:bg-zinc-700",
              {
                "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:bg-gradient-to-r":
                  pathname === "/ranking",
              },
            )}
            href="/ranking"
          >
            Ranking
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
        <div className="my-auto ml-auto mr-5 space-x-10 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-neutral-200" />
            </SheetTrigger>

            <SheetContent className="bg-zinc-800">
              <SheetHeader>
                <SheetTitle className=" text-xl text-zinc-50">
                  Resume Rumble
                </SheetTitle>
              </SheetHeader>

              <div className=" h-50 font-karla mt-4 flex  flex-col rounded-full px-4 pb-4 tracking-wider text-zinc-50">
                <div
                  onClick={() => close()}
                  className="flex flex-col items-center gap-4"
                >
                  <SheetClose asChild>
                    <Link
                      href="/dashboard"
                      className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:bg-zinc-50  hover:text-zinc-800"
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
                      className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:bg-zinc-50  hover:text-zinc-800"
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
                      href="/ranking"
                      className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:bg-zinc-50  hover:text-zinc-800"
                    >
                      Ranking
                    </Link>
                  </SheetClose>
                </div>
              </div>

              <hr className="w-full border-zinc-50" />
              <div
                onClick={() => close()}
                className="order-last flex flex-col items-center gap-4"
              >
                <SheetClose asChild>
                  <Link
                    href="/ranking"
                    className=" mt-5 w-full rounded-sm bg-blue-500 py-2.5 text-center text-lg font-semibold text-white hover:bg-zinc-50  hover:text-zinc-800"
                  >
                    Log out
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
