import { FC } from "react";

interface HeadingProps {
  title: string;
  subtitle: string;
}

const Heading: FC<HeadingProps> = ({ subtitle, title }) => {
  return (
    <div className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-4">
      <p className="text-lg text-zinc-900 mb-2 md:text-xl font-bold">
        {title}
      </p>
      <p className="md:text-lg text-zinc-700 leading-5">{subtitle}</p>
    </div>
  );
};

export default Heading;
