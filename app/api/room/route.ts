import { db } from "@/lib/db";
import { getCurrentUser } from "@/lib/getCurrentUser";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const user = await getCurrentUser();
    const body = await req.json();

    const { name, jobDescription, capacity } = body;

    if (!user) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!name || !capacity) {
      return new NextResponse("Bad Request", { status: 400 });
    }

    const newRoom = await db.room.create({
      data: {
        name,
        capacity,
        jobDescription,
        userId: user.id,
        users: {
          connect: {
            id: user.id,
          },
        },
      },
    });

    return NextResponse.json(newRoom);
  } catch (error) {
    console.log("ROOM CREATION ERROR: ", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
