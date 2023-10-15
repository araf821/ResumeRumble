"use client";

import axios from "axios";
import { Loader2 } from "lucide-react";
import { FC, useState } from "react";
import { Button } from "./ui/button";

interface ResumeRatingProps {}

const ResumeRating: FC<ResumeRatingProps> = ({}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [jobDescription, setJobDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/openai", {jobDescription});
      setMessage(response.data.content);
    } catch (error) {
      console.log("\n\n\nERROR\n\n\n", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-6">
      {message ? (
        <textarea className="h-[40vh] px-3 py-2 rounded-md resize-none w-full max-w-screen-sm">{message}</textarea>
      ) : (
        <div className="flex max-w-screen-sm w-full flex-col gap-4">
          <textarea
            className="min-h-[40vh] resize-none rounded-md px-3 py-2"
            onChange={(e) => setJobDescription(e.target.value)}
          />
          <p>Click the button to get started</p>
          <Button className="bg-blue-500 hover:bg-blue-600" onClick={onSubmit}>
            {isLoading ? (
              <Loader2 className="h-12 w-12 animate-spin" />
            ) : (
              "Rate Me!"
            )}
          </Button>
        </div>
      )}
    </div>
  );
};

export default ResumeRating;
