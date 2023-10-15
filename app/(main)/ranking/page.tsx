import LobbyItem from "@/components/LobbyItem";
import Link from "next/link";
import { Plus } from "lucide-react";

const lobbyData = [
  { name: "Lobby 1", current: 1, max: 2 },
  { name: "Lobby 2" },
  { name: "Lobby 3" },
  { name: "Lobby 4" },
  { name: "Lobby 5" },
  { name: "Lobby 6" },
  { name: "Lobby 7" },
  { name: "Lobby 8" },
  { name: "Lobby 9" },
  { name: "Lobby 10" },
  { name: "Lobby 11" },
  { name: "Lobby 12" },
  { name: "Lobby 13" },
  { name: "Lobby 14" },
  { name: "Lobby 15" },
];

const RankingPage = () => {
  return (
    <div className="h-[60dvh] overflow-y-scroll rounded-xl bg-zinc-800 p-5 pt-2">
      {lobbyData.map((data, index) => (
        <LobbyItem
          key={index}
          name={data.name}
          current={data.current}
          max={data.max}
        ></LobbyItem>
      ))}
      <Link
        className="grid h-28 content-center justify-items-center rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5"
        href="#"
      >
        <Plus className="text-neutral-200" />
      </Link>
    </div>
  );
};

export default RankingPage;
