'use client'

import EmptyState from "@/components/EmptyState";

const Error = ({}) => {
  return (
    <EmptyState
      title="Something went wrong."
      description="Please check back later! We might be already fixing this issue."
    />
  );
};

export default Error;
