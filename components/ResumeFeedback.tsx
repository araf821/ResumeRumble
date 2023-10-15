import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import PDFViewer from "@/components/PDFViewer";

interface feedbackData {
  title: string;
  content: string;
}

const ResumeFeedback = ({
  url = "amongus",
  data = [],
}: {
  url?: string;
  data?: feedbackData[];
}) => {
  return (
    <div className="mb-5 grid grid-cols-1 gap-5 text-white md:grid-cols-[33%_auto]">
      <div className="rounded-xl bg-zinc-800 p-5">
        <PDFViewer url={url} />
      </div>
      {data && data.length > 0 ? (
        <Accordion
          type="single"
          collapsible
          className="w-full rounded-xl bg-zinc-800 p-5 pb-8"
        >
          {data.map((data, index) => (
            <AccordionItem value={index.toString()}>
              <AccordionTrigger>{data.title}</AccordionTrigger>
              <AccordionContent>{data.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="rounded-xl bg-zinc-800 p-5 text-neutral-200">
          No feedback to show.
        </div>
      )}
    </div>
  );
};

export default ResumeFeedback;
