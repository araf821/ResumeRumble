"use client";

import { FC, useState } from "react";
import { Dialog, DialogContent } from "../ui/dialog";
import { useModal } from "@/hooks/useModal";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useToast } from "../ui/use-toast";
import { z } from "zod";
import "@uploadthing/react/styles.css";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CreateRoomModalProps {}

const formSchema = z.object({
  name: z
    .string()
    .min(3, {
      message: "Room name must be between 3 and 52 characters in length.",
    })
    .max(52, {
      message: "Room name must be between 3 and 52 characters in length.",
    }),
  jobDescription: z.string().optional(),
  capacity: z
    .string()
    .max(50, { message: "Rooms can hold a maximum of 50 users." })
    .min(2, { message: "Each room must have a capacity of at least 2." })
    .refine((val) => !Number.isNaN(parseInt(val, 10)), {
      message: "Expected number, received a string",
    }),
});

const CreateRoomModal: FC<CreateRoomModalProps> = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { isOpen, onClose, type } = useModal();

  const isModalOpen = isOpen && type === "createRoom";

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      jobDescription: "",
      capacity: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);

    try {
      const response = await axios.post("/api/file", values);
      toast({ title: "Room created!" });
      form.reset();
      onClose();
      router.push("/");
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
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              <p className="text-2xl">Create a room</p>
              <hr className="border-zinc-700" />
              <div className="space-y-4">
                <FormField
                  name="name"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-sans text-base">
                        Room Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Data Science Club"
                          className="bg-transparent text-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="capacity"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-sans text-base">
                        Room Capacity
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="number"
                          min={2}
                          max={50}
                          className="bg-transparent text-xl"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="jobDescription"
                  control={form.control}
                  render={({ field }) => (
                    <FormItem className="space-y-1">
                      <FormLabel className="font-sans text-base">
                        Job Description{" "}
                        <span className="text-zinc-400">(optional)</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Enter a default job description to compare resumes against. You can change this later."
                          className="min-h-[300px] resize-none border border-zinc-700 bg-zinc-900 text-base focus:border-zinc-700"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 px-3 py-2.5 text-black transition hover:bg-current"
              >
                Create Room
              </button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRoomModal;
