"use server";

import { PrismaClient } from "@prisma/client";

const getUser = async (email: string) => {
  const db = new PrismaClient();
  const user = await db.user.findFirst({ where: { email: email } });
  if (user) return user;
  return false;
};

export default getUser;
