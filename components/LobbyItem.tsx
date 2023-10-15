import { LogIn } from "lucide-react";
import Link from "next/link";

const LobbyItem = ({
  name = "Unnamed Lobby",
  url = "#",
}: {
  name?: string;
  url?: string;
}) => {
  return (
    // show user count/limit
    // join modal shows description and resume select
    <div className="my-5">
      <div className="flex overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
        <p className="my-auto overflow-clip overflow-ellipsis whitespace-nowrap font-bold text-neutral-200">
          {name}
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
