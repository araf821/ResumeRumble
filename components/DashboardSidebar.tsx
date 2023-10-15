import { User } from "@prisma/client";
import { FC } from "react";
import Image from "next/image";
import { dateFormat } from "@/lib/utils";
import { SignOutButton } from "@clerk/nextjs";

interface DashboardSidebarProps {
  user: User;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ user }) => {
  return (
    <div className="flex h-fit flex-col gap-4 rounded-md bg-zinc-800 p-4 lg:col-span-1">
      <div className="relative aspect-square overflow-hidden rounded-sm md:h-full md:w-full">
        <Image
          src={user.imageUrl}
          alt="user profile picture"
          fill
          className="object-cover"
        />
      </div>

      {/* User info */}
      <div className="flex flex-col gap-2 py-4">
        <p className="text-xl">{user.name}</p>
        <p>Joined: {dateFormat(new Date(user.createdAt).toISOString())}</p>

        <SignOutButton>
          <button className="mt-auto w-fit p-0 text-zinc-400 transition hover:text-zinc-200">
            Not {user.name.split(" ")[0]}? Logout NOW
          </button>
        </SignOutButton>
      </div>
    </div>
  );
};

export default DashboardSidebar;
