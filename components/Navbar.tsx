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
    <nav className="fixed left-0 right-0 top-0 z-10 flex h-16 border-b-2 border-zinc-800 bg-zinc-900 shadow-[0_2px_20px_2px] shadow-blue-500/10">
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
        <div className="my-auto ml-auto mr-5 md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Menu className="text-neutral-200" />
            </SheetTrigger>

            <SheetContent className="bg-zinc-800">
              <SheetHeader>
                <SheetTitle className="pb-5 text-xl text-zinc-50">
                  ResumeRumble
                </SheetTitle>
              </SheetHeader>

              <div className="h-50 mt-4 grid grid-cols-1 gap-3 rounded px-4 pb-4 tracking-wider text-zinc-50">
                <SheetClose asChild>
                  <Link
                    href="/dashboard"
                    className={cn(
                      "w-full rounded bg-zinc-50 py-2.5 text-center text-lg font-semibold text-zinc-800",
                      {
                        "bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-sky-400 to-blue-800 text-zinc-50 hover:bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]":
                          pathname === "/dashboard",
                      },
                    )}
                  >
                    Dashboard
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/rating"
                    className={cn(
                      "w-full rounded bg-zinc-50 py-2.5 text-center text-lg font-semibold text-zinc-800",
                      {
                        "bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 text-zinc-50 hover:bg-gradient-to-r":
                          pathname === "/rating",
                      },
                    )}
                  >
                    Rating
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/ranking"
                    className={cn(
                      "w-full rounded bg-zinc-50 py-2.5 text-center text-lg font-semibold text-zinc-800",
                      {
                        "bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-zinc-50 hover:bg-gradient-to-r":
                          pathname === "/ranking",
                      },
                    )}
                  >
                    Ranking
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <SignOutButton>
                    <Link
                      href="/"
                      className="mt-20 w-full rounded bg-zinc-700 py-2.5 text-center text-lg font-semibold text-white hover:bg-zinc-50 hover:text-zinc-800"
                    >
                      Log out
                    </Link>
                  </SignOutButton>
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
