"use client";

import { FC } from "react";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";

interface RedirectWithToastProps {
  title: string;
  description?: string;
}

const RedirectWithToast: FC<RedirectWithToastProps> = ({
  title,
  description = "",
}) => {
  const router = useRouter();
  const { toast } = useToast();

  toast({ title: title, description: description });
  router.push("/dashboard");

  return null;
};

export default RedirectWithToast;
