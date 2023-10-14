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
    <div className="my-5">
      <div className="flex overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
        <p className="my-auto font-bold text-neutral-200">{name}</p>

        <Link className="my-auto ml-auto" href={url}>
          <LogIn className="text-neutral-200" />
        </Link>
      </div>
    </div>
  );
};

export default LobbyItem;
