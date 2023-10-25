import { prisma } from "@/db";
import { redirect } from "next/navigation";
import Link from "next/link";

async function createTodo(data: FormData) {
  "use server";
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  await prisma.todo.create({ data: { title, complete: false } });
  redirect("/")
  console.log("Hi");
}

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mx-5 my-5">
        <h1 className="text-5xl text-white font-bold">New</h1>
      </header>
      <form action={createTodo}>
        <input
          type="text"
          name="title"
          className="border text-white mx-5 my-5 bg-transparent rounded-md px-3 py-2"
        />
        <div className="flex gap-1 mx-5 my-5">
          <Link
            href=".."
            className="flex-none rounded-3xl bg-red-700 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-red-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="flex-none rounded-3xl bg-indigo-700 px-4 py-2 text-lg font-bold text-white shadow-sm hover:bg-indigo-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >Create</button>
        </div>
      </form>
    </>
  );
}
