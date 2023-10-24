"use client";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { SignOutButton, useClerk } from "@clerk/nextjs";

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
import { Button } from "./ui/button";

const Navbar = () => {
  const pathname = usePathname();
  const { signOut } = useClerk();
  const router = useRouter();

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
                "bg-gradient-to-r from-cyan-200 to-cyan-400 text-black hover:bg-[conic-gradient(at_left,_var(--tw-gradient-stops))]":
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
                "bg-gradient-to-r from-emerald-500 to-lime-600 hover:bg-gradient-to-r":
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
        <Sheet>
          <SheetTrigger className="md:hidden" asChild>
            <Menu className="text-neutral-200" />
          </SheetTrigger>

          <SheetContent className="max-h-[100dvh] bg-zinc-800">
            <SheetHeader className="flex flex-row items-center justify-between">
              <SheetTitle className="text-xl text-zinc-50">
                Resume Rumble
              </SheetTitle>
              <SheetClose>
                <X className="my-auto -mt-2 h-5 w-5" />
                <span className="sr-only">Close</span>
              </SheetClose>
            </SheetHeader>
            <hr className="mt-4 border-zinc-700" />

            <div className="flex h-[90dvh] flex-col justify-between">
              <div className="font-karla mt-4 flex flex-col rounded-full tracking-wider text-zinc-50">
                <SheetClose asChild>
                  <Link
                    href="/dashboard"
                    className="mt-5 w-full rounded-sm bg-gradient-to-r from-blue-400 to-cyan-600 py-2.5 text-center text-lg text-white transition hover:-translate-y-1 active:translate-y-2"
                  >
                    Dashboard
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/rating"
                    className="mt-5 w-full rounded-sm bg-blue-500 bg-gradient-to-r from-emerald-500 to-lime-600 py-2.5 text-center text-lg text-white transition hover:-translate-y-1  active:translate-y-2"
                  >
                    Rating
                  </Link>
                </SheetClose>

                <SheetClose asChild>
                  <Link
                    href="/ranking"
                    className="mt-5 w-full rounded-sm bg-blue-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 py-2.5 text-center text-lg text-white transition hover:-translate-y-1  active:translate-y-2"
                  >
                    Ranking
                  </Link>
                </SheetClose>
                <hr className="mb-4 mt-8 border-zinc-700" />
              </div>

              <SheetClose asChild>
                <Button
                  onClick={() => signOut(() => router.push("/"))}
                  className="rounded-md border-2 border-blue-500 bg-transparent py-2.5 text-center text-xl font-bold text-blue-500 transition hover:bg-blue-500 hover:text-white "
                >
                  Sign Out
                </Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
