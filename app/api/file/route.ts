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

    const files = await db.file.findMany({
      where: {
        userId: user.userId,
      },
    });

    const file = await db.file.create({
      data: {
        fileUrl: `https://uploadthing-prod.s3.us-west-2.amazonaws.com/${fileKey}`,
        fileKey,
        name,
        userId: user.userId,
        isDefault: files.length === 0 ? true : false,
      },
    });

    return NextResponse.json(file);
  } catch (error) {
    console.log("FILE UPLOAD ERROR: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const { searchParams } = new URL(req.url);

    const fileId = searchParams.get("fileId");

    if (!fileId) {
      return new NextResponse("File ID is missing.", {
        status: 400,
      });
    }

    if (!currentUser) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const deletedFile = await db.file.delete({
      where: {
        id: fileId,
        userId: currentUser.userId,
      },
    });

    return NextResponse.json(deletedFile);
  } catch (error) {
    console.log("FILE DELETION ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
