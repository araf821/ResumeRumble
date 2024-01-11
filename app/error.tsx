"use client";

import EmptyState from "@/components/EmptyState";

export const dynamic = "force-dynamic";
const Error = ({ error }: { error: Error & { digest?: string } }) => {
  if (error.message.includes("prisma")) {
    return (
      <EmptyState
        title="The database is sleeping."
        description="Database has been put to sleep due to it being inactive for an extended period."
      />
    );
  }

  return (
    <EmptyState
      title="Something went wrong."
      description="Please check back later! We might be already fixing this issue."
    />
  );
};

export default Error;
