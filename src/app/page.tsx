import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import { prisma } from "@/db";
import { TodoItem } from "@/components/TodoItem";

function getTodos() {
  return prisma.todo.findMany();
}

async function toggleTodo(id: string, complete: boolean) {
  "use server";
  await prisma.todo.update({ where: { id }, data: { complete } });
}

export default async function Home() {
  const todos = await getTodos();
  return (
    <>
      <header className="flex justify-between items-center mx-5 my-5">
        <h1 className="text-5xl text-white font-bold">To Do List</h1>
        <Link
          href="/new"
          className="flex-none rounded-3xl bg-indigo-700 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          New
        </Link>
      </header>
      <ul className="py-5 px-5">
        {todos.map((todo) => (
          <TodoItem key={todo.id} {...todo} toggleTodo={toggleTodo} />
        ))}
      </ul>
    </>
  );
}
