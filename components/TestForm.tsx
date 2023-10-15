"use client";

import { FC, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css";
import { RefreshCcw } from "lucide-react";

interface TestFormProps {}

const formSchema = z.object({
  fileUrl: z.string().min(3, { message: "File is required." }),
  fileKey: z.string().min(3, { message: "File is required." }),
  name: z.string(),
});

const TestForm: FC<TestFormProps> = ({}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fileUrl: "",
      fileKey: "",
      name: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      await axios.post("/api/file", values);
      toast({ title: "Your file was successfully uploaded!" });
      form.reset();
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Something went wrong.", variant: "destructive" });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 text-zinc-100">
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="fileUrl"
            control={form.control}
            render={() => (
              <FormItem>
                <FormLabel className="text-3xl text-zinc-300">
                  Upload a PDF
                </FormLabel>
                <hr className="border-zinc-800" />
                <FormControl>
                  {form.getValues().name ? (
                    <div className="w-full space-y-6 rounded-md bg-zinc-800 py-12 text-center">
                      <p className="text-zinc-400">Uploaded Successfully</p>
                      <p className="text-lg">{form.getValues().name}</p>

                      <button
                        onClick={() => {
                          form.setValue("fileKey", "");
                          form.setValue("fileUrl", "");
                          form.setValue("name", "");
                        }}
                        type="button"
                        className="rounded-sm border border-rose-600 bg-transparent px-2.5 py-1 text-rose-600 transition hover:bg-rose-600 hover:text-zinc-100"
                      >
                        <p className="flex items-center gap-3">
                          Reset
                          <RefreshCcw className="h-4 w-4" />
                        </p>
                      </button>
                    </div>
                  ) : (
                    <UploadDropzone
                      className="bg-zinc-800"
                      endpoint="pdf"
                      onClientUploadComplete={(res) => {
                        if (res) {
                          form.setValue("name", res[0].name);
                          form.setValue("fileKey", res[0].key);
                          form.setValue("fileUrl", res[0].url);
                        }
                      }}
                      onUploadError={(error: Error) => {
                        console.log("File Upload Error", error);
                      }}
                    />
                  )}
                </FormControl>
                <FormMessage />
                {}
                <div></div>
              </FormItem>
            )}
          />

          <button
            disabled={isLoading}
            className="rounded-sm bg-zinc-800 px-3 py-2.5 text-white transition hover:bg-zinc-700"
          >
            Submit File
          </button>
        </form>
      </Form>
      {/* <PDFViewer url="https://utfs.io/f/4ccf5c90-b4e9-49b4-a082-13a9367671e0_Resume%20-%20Aug%2026.pdf" /> */}
    </div>
  );
};

export default TestForm;
