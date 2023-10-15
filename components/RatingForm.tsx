"use client";

import { File } from "@prisma/client";
import { FC, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import PDFViewer from "./PDFViewer";
import axios from "axios";
import qs from "query-string";
import { Loader2 } from "lucide-react";
import { Inter } from "next/font/google";

interface RatingFormProps {
  files: File[];
}

const inter = Inter({ subsets: ["latin"] });

const formSchema = z.object({
  fileUrl: z.string(),
  jobDescription: z.string().optional(),
});

const RatingForm: FC<RatingFormProps> = ({ files }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<string | null>(null);
  const resultsRef = useRef<null | HTMLDivElement>(null);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileUrl: files[0].fileUrl,
      jobDescription: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const url = qs.stringifyUrl({
        url: "/api/rating",
        query: {
          fileUrl: values.fileUrl,
          jobDescription: values.jobDescription,
        },
      });

      const response = await axios.post(url);
      setResults(response.data.content);
      toast({ title: "Results are now out!" });
      // if (resultsRef.current)
      //   resultsRef.current.scrollIntoView({ behavior: 'smooth' });
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    } catch (error) {
      console.log("\n\n\nERROR\n\n\n", error);
      toast({ title: "Something went wrong!", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex w-full gap-6 rounded-t-md border-2 border-zinc-700 bg-zinc-800 p-4 max-md:flex-col md:flex-row">
            <div className="w-full space-y-2">
              <p className="text-zinc-200 md:text-lg">Select a resume</p>
              <hr className="border-zinc-700" />
              <FormField
                control={form.control}
                name="fileUrl"
                render={({ field }) => (
                  <FormItem>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="bg-zinc-900 py-6 text-zinc-100 outline-none">
                          <SelectValue placeholder="Select a verified email to display" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-zinc-900 text-zinc-100">
                        {files.map((file) => (
                          <SelectItem key={file.id} value={file.fileUrl}>
                            {file.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="relative min-h-[490px] w-full bg-pink-800">
                <PDFViewer url={form.getValues("fileUrl")} />
              </div>
            </div>

            <div className="w-full space-y-2">
              <p className="text-zinc-200 md:text-lg">
                Job Description{" "}
                <span className="text-zinc-400">(optional)</span>
              </p>
              <p className="text-sm text-zinc-400">
                Include a job description to have your resume directly be
                compared to the particular job.
              </p>
              <hr className="border-zinc-700" />
              <FormField
                name="jobDescription"
                control={form.control}
                render={({ field }) => (
                  <Textarea
                    {...field}
                    placeholder="Enter job description (optional)"
                    className="min-h-[500px] resize-none border-none border-zinc-700 bg-zinc-900 focus:border-zinc-700"
                  />
                )}
              />
            </div>
            <hr />
          </div>
          <div className="w-full border-2 border-t-0 border-zinc-700 bg-zinc-800 p-4">
            <Button
              size="lg"
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-sky-500 via-cyan-600 to-blue-600 py-8 text-xl md:text-2xl"
            >
              {isLoading ? (
                <p className="flex items-center gap-2">
                  Loading Results <Loader2 className="animate-spin" />
                </p>
              ) : (
                "Rate Me!"
              )}
            </Button>
          </div>
        </form>
      </Form>

      <div className="mx-auto mt-8 w-full max-w-screen-sm bg-zinc-800 p-4">
        <p className="text-center text-2xl md:text-3xl">Results</p>
        <hr className="mx-auto mt-2 w-14 border-4 border-amber-600" />

        {isLoading ? (
          <Loader2 className="mx-auto my-14 h-7 w-7 animate-spin text-white" />
        ) : results ? (
          <div
            className={`${inter.className} whitespace-pre-line py-4 font-sans text-lg text-zinc-300`}
          >
            {results}
          </div>
        ) : (
          <p className="py-12 text-center text-zinc-400">
            Results will be displayed here.
          </p>
        )}
      </div>
    </>
  );
};

export default RatingForm;
