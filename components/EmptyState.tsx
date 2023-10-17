import Link from "next/link";
import { FC } from "react";

interface EmptyStateProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
  link?: string;
}

const EmptyState: FC<EmptyStateProps> = ({
  children,
  description,
  link,
  title = "404 NOT FOUND",
}) => {
  if (!children) {
    return (
      <section className="mx-auto px-4 flex h-[90dvh] w-full max-w-screen-md text-center flex-col items-center justify-center gap-8">
        <p className="break-words text-4xl md:text-5xl">{title}</p>
        {description && (
          <p className="break-words text-zinc-400">{description}</p>
        )}
        <Link
          href={link ? link : "/"}
          className="rounded-sm bg-zinc-800  px-3 py-2 hover:bg-zinc-700 md:text-lg"
        >
          Back Home
        </Link>
      </section>
    );
  }

  return (
    <section className="grid h-[90dvh] w-screen place-items-center">
      {children}
    </section>
  );
};

export default EmptyState;
