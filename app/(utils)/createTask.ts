"use server";
import { PrismaClient } from "@prisma/client";
import getUser from "./getUser";

interface NewTask {
  title: string;
  priority: number;
  description: string;
  isCompleted: boolean;
  deadlineAt: Date;
}

const createTask = async (props: NewTask) => {
  const db = new PrismaClient();
  const user = await getUser("b2bestwaifu@gmail.com");
  if (!user) return;
  const userId = user.id;
  const newTask = await db.todo.create({
    data: {
      isCompleted: props.isCompleted,
      priority: props.priority,
      title: props.title,
      userId: userId,
      createdAt: new Date(),
      deadlineAt: new Date(),
      description: props.description,
    },
  });
  if (newTask) return true;
  return false;
};

export default createTask;
