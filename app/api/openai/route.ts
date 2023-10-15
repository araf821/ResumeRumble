import { openai } from "@/lib/openai";
import { NextResponse } from "next/server";
import pdf from "pdf-parse";
import axios from "axios";
import { db } from "@/lib/db";

export const POST = async (req: Request) => {
  const file = await db.file.findFirst();

  const { jobDescription } = await req.json();

  if (!file) throw new Error("\n\n\n\n\n\n\n\n\n\nnsomethkng went wrong");

  const res = await axios.get(file.fileUrl, {
    responseType: "arraybuffer",
  });
  console.log("\n\n\npdf text\n\n\n", res.data);
  const pdfText = await pdf(res.data);

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "system",
        content:
          "Use the following text given below that is most likely a resume converted to text. Your job is rate the resume and give the user a short overview of what you like and don't like about the resume.",
      },
      {
        role: "user",
        content: `Use the following text given below that is most likely a resume converted to text. Your job is rate the resume out of 100 and give the user a short overview of what you like and don't like about the resume. Optionally, there may also be a job description, if the job description is provided, then give the user a score out of 100 for how compatible they are with this job. Please keep the feedback short and concise.
        
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

        Job Compatibility Rating: (don't include this line if job description is missing)

        Feedback
        `,
      },
    ],
  });

  console.log(response);

  return NextResponse.json(response.choices[0].message);
};
