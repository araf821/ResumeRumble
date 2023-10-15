import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const currentUser = await getCurrentUser();
    const { searchParams } = new URL(req.url);

    const fileId = searchParams.get("fileId");
    const userId = searchParams.get("userId");

    if (!fileId || !userId) {
      return new NextResponse("File ID or user ID is missing.", {
        status: 400,
      });
    }

    if (!currentUser || currentUser.userId !== userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Remove previous default
    try {
      await db.file.updateMany({
        where: {
          userId,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });
    } catch (error) {
      console.log(error);
    }

    const newDefaultFile = await db.file.update({
      data: {
        isDefault: true,
      },
      where: {
        id: fileId,
        userId,
      },
    });

    return NextResponse.json(newDefaultFile);
  } catch (error) {
    console.log("FILE DEFAULT ERROR", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
