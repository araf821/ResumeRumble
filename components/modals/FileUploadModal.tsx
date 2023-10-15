"use client";

import { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import { useModal } from "@/hooks/useModal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { RefreshCcw } from "lucide-react";
import { UploadDropzone } from "@/lib/uploadthing";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { z } from "zod";
import "@uploadthing/react/styles.css";

interface FileUploadModalProps {}

const formSchema = z.object({
  fileUrl: z.string().min(3, { message: "File is required." }),
  fileKey: z.string().min(3, { message: "File is required." }),
  name: z.string(),
});

const FileUploadModal: FC<FileUploadModalProps> = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "addFile";

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
      onClose();
      router.push("/dashboard");
    } catch (error: any) {
      toast({ title: "Something went wrong.", variant: "destructive" });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="border-zinc-800 bg-zinc-900 text-zinc-100 shadow-blue-600/10">
        <div className="mx-auto flex w-full max-w-3xl flex-col px-4 text-zinc-100">
          <Form {...form}>
            <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                name="fileUrl"
                control={form.control}
                render={() => (
                  <FormItem>
                    <FormLabel className="text-xl text-zinc-300 md:text-2xl">
                      Upload a PDF
                    </FormLabel>
                    <hr className="border-zinc-800" />
                    <FormControl>
                      {form.getValues().name ? (
                        <div className="w-full space-y-6 rounded-md bg-zinc-800 py-12 text-center">
                          <p className="text-zinc-400">Uploaded Successfully</p>
                          <p className="px-2 md:text-lg">
                            {form.getValues().name}
                          </p>

                          <button
                            onClick={() => {
                              form.setValue("fileKey", "");
                              form.setValue("fileUrl", "");
                              form.setValue("name", "");
                            }}
                            type="button"
                            className="rounded-sm border border-rose-600 bg-transparent px-2.5 py-1 text-rose-600 transition hover:bg-rose-600 hover:text-zinc-100"
                          >
                            <p className="flex items-center gap-2">
                              Remove
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
                              console.log(res);
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
                Confirm Upload
              </button>
            </form>
          </Form>
          {/* <PDFViewer url="https://utfs.io/f/4ccf5c90-b4e9-49b4-a082-13a9367671e0_Resume%20-%20Aug%2026.pdf" /> */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FileUploadModal;
