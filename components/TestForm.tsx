"use client";

import { FC } from "react";
import FileUpload from "./FileUpload";
import { z } from "zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

interface TestFormProps {}

const formSchema = z.object({
  imageUrl: z.string().min(3),
});

const TestForm: FC<TestFormProps> = ({}) => {
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      imageUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("called");

    try {
      await axios.post("/api/post", values);
      toast({ title: "Your post has been published!" });
      form.reset();
      router.push("/collage");
    } catch (error: any) {
      toast({ title: "Something went wrong.", variant: "destructive" });
      console.log(error);
    }
  };

  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col px-4 text-zinc-100">
      <Form {...form}>
        <form className="space-y-8" onSubmit={form.handleSubmit(onSubmit)}>
          <p className="text-4xl">Form</p>
          <FormField
            name="imageUrl"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Upload your pdf</FormLabel>
                <FormControl>
                  <FileUpload onChange={field.onChange} value={field.value} />
                </FormControl>
              </FormItem>
            )}
          />
        </form>
      </Form>
      {/* <PDFViewer url="https://utfs.io/f/4ccf5c90-b4e9-49b4-a082-13a9367671e0_Resume%20-%20Aug%2026.pdf" /> */}
    </div>
  );
};

export default TestForm;
