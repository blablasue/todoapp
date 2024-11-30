"use server";
import { PrismaClient } from "@prisma/client";
import getUser from "./getUser";

interface NewTodo {
  title: string;
  priority: number;
  description: string;
  isCompleted: boolean;
}

const createTodo = async (props: NewTodo) => {
  const db = new PrismaClient();
  const user = await getUser("b2bestwaifu@gmail.com");
  if (!user) return;
  const userId = user.id;
  const newTodo = await db.todo.create({
    data: {
      isCompleted: props.isCompleted,
      priority: props.priority,
      title: props.title,
      userId: userId,
      description: props.description,
    },
  });
  if (newTodo) return true;
  return false;
};

export default createTodo;
