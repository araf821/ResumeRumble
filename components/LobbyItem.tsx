import { LogIn } from "lucide-react";
import Link from "next/link";

const LobbyItem = ({
  name = "Unnamed Lobby",
  url = "#",
  current = 0,
  max = 0,
}: {
  name?: string;
  url?: string;
  current?: number;
  max?: number;
}) => {
  return (
    // show user count/limit
    // join modal shows description and resume select
    <div className="my-5">
      <div className="flex overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
        <p className="my-auto overflow-hidden overflow-ellipsis whitespace-nowrap font-bold text-neutral-200">
          {name}
        </p>
        <p className="ml-2 whitespace-nowrap text-blue-500">
          {current}/{max}
        </p>

        <Link className="my-auto ml-auto flex" href={url}>
          <p className="mr-5 hidden text-neutral-200 md:block">Join</p>
          <LogIn className="text-neutral-200" />
        </Link>
      </div>
    </div>
  );
};

export default LobbyItem;
