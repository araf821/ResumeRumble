import Image from "next/image";
import enterIcon from "@/assets/enter.svg";

const LobbyItem = ({
  name = "Unnamed Lobby",
  url = "#",
}: {
  name?: string;
  url?: string;
}) => {
  return (
    <div className="mx-8 my-5 flex overflow-clip rounded-xl border border-neutral-200 bg-zinc-800 px-5 py-5">
      <p className="my-auto font-bold text-neutral-200">{name}</p>

      <a className="my-auto ml-auto" href={url}>
        <Image className="" src={enterIcon} width={25} alt="enter"></Image>
      </a>
    </div>
  );
};

export default LobbyItem;
