import RatingForm from "@/components/RatingForm";
import RedirectWithToast from "@/components/RedirectWithToast";
import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { redirect } from "next/navigation";

const Rating = async () => {
  const user = await getCurrentUser();

  if (!user) redirect("/");

  const files = await db.file.findMany({
    where: {
      userId: user.userId,
    },
  });

  if (!files.length) {
    return <RedirectWithToast title="Please upload a resume first." />;
  }

  return (
    <div className="mx-auto max-w-screen-xl space-y-6 px-4 py-8 2xl:px-0">
      <div className="mb-8 rounded-xl bg-gradient-to-r from-purple-600 via-blue-500 to-green-300 p-5">
        {" "}
        <h1 className="text-xl font-bold md:text-2xl">Resume Rating</h1>
        <h2 className="text-lg">Get your resume ranked and reviewed!</h2>
      </div>

      <RatingForm files={files} />
    </div>
  );
};

export default Rating;
