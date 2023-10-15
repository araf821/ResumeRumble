"use client";

import AddFileCard from "@/components/AddFileCard";
import ResumeRating from "@/components/ResumeRating";
import axios from "axios";

const page = async () => {

  return (
    <div className="py-12">
      <ResumeRating />
      <AddFileCard />
    </div>
  );
};

export default page;
