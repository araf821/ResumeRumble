import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
import pdf from "pdf-parse";

export const pdfConvert = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const pdfPath = path.resolve("test.pdf");
    console.log(`Reading PDF file from: ${pdfPath}`);
    const dataBuffer = await fs.readFile(pdfPath);
    console.log(`Successfully read PDF file.`);

    const data = await pdf(dataBuffer);
    const text = data.text;
    console.log(`Extracted text: ${text}`);

    res.status(200).json({ text });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the PDF." });
  }
};
