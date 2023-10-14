import TestForm from "@/components/TestForm";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="py-12">
      <TestForm />
    </div>
  );
};

export default page;
