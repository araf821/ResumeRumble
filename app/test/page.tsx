import AddFileCard from "@/components/AddFileCard";
import PDFViewer from "@/components/PDFViewer";
import TestForm from "@/components/TestForm";
import { db } from "@/lib/db";

const page = async () => {
  const file = await db.file.findFirst({
    select: {
      fileKey: true,
    },
  });

  console.log(file);

  return (
    <div className="py-12">
      {/* <TestForm /> */}
      {/* <TestForm />
      {file && (
        <PDFViewer
          url={`https://uploadthing-prod.s3.us-west-2.amazonaws.com/${file.fileKey}`}
        />
      )} */}
      <AddFileCard/>
    </div>
  );
};

export default page;
