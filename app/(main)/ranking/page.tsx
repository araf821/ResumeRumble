import LobbyItem from "@/components/LobbyItem";

const lobbyData = [
  { name: "Lobby 1" },
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
    <div className="h-[60dvh] overflow-y-scroll">
      {lobbyData.map((data, index) => (
        <LobbyItem key={index} name={data.name}></LobbyItem>
      ))}
    </div>
  );
};

export default RankingPage;
