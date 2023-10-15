import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();

    const { fileKey, name } = await req.json();

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const file = await db.file.create({
      data: {
        fileUrl: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${fileKey}`,
        fileKey,
        name,
        userId: user.userId,
      },
    });

    return NextResponse.json(file);
  } catch (error) {
    console.log("FILE UPLOAD ERROR: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
