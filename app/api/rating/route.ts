import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";
import pdf from "pdf-parse";
import axios from "axios";
import { getCurrentUser } from "@/lib/getCurrentUser";

// export const runtime = "edge";

export const POST = async (req: Request) => {
  const user = await getCurrentUser();
  const { searchParams } = new URL(req.url);

  const fileUrl = searchParams.get("fileUrl");
  const jobDescription = searchParams.get("jobDescription");

  if (!user) {
    return new NextResponse("Unauthorized", { status: 401 });
  }

  if (!fileUrl) {
    return new NextResponse("File URL is missing.", {
      status: 400,
    });
  }

  const res = await axios.get(fileUrl, {
    responseType: "arraybuffer",
  });
  const pdfText = await pdf(res.data);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    temperature: 1,
    messages: [
      {
        role: "user",
        content: `Use the following text given below that is most likely a resume converted to text. Your job is to rate the resume out of 100 and give me, the user, a short feedback, be as specific as you can be with that score out of 100. Optionally, there may also be a job description, if the job description is provided, then give the user a score out of 100 for how compatible they are with this job. Please keep the feedback short and concise. Wrap the score inside of <>, for example: <73>.
        
        START OF RESUME

        ${pdfText.text}

        END OF RESUME

        \n---------------\n

        START OF JOB DESCRIPTION

        ${jobDescription}

        END OF JOB DESCRIPTION

        \n---------------\n

        Display the result in this format:

        Resume Rating:

        Job Compatibility Rating: (only if job description exists)

        Feedback
        `,
      },
    ],
  });

  return NextResponse.json(response.choices[0].message);
};
