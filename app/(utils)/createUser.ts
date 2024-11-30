"use server";
import { PrismaClient } from "@prisma/client";

interface NewUser {
  name: string;
  email: string;
}

const createUser = async (props: NewUser) => {
  const db = new PrismaClient();
  const newUser = await db.user.create({
    data: {
      name: props.name,
      email: props.email,
    },
  });
  if (newUser) return true;
  return false;
};

export default createUser;
