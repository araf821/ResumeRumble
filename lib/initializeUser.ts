import { auth, currentUser } from "@clerk/nextjs";
import { db } from "./db";

export const initializeUser = async () => {
  const user = await currentUser();
  const { userId } = auth();

  if (!userId) {
    return null;
  }

  const existingUser = await db.user.findUnique({
    where: {
      userId,
    },
  });

  if (existingUser) return existingUser;

  if (!user) return null;

  const newUser = await db.user.create({
    data: {
      userId: userId,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl:
        user.imageUrl ??
        "https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg",
      email: user.emailAddresses[0].emailAddress,
    },
  });

  return newUser;
};
