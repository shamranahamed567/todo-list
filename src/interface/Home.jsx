import { useSelector } from "react-redux";

import Header from "./Header";
import TodoList from "../features/todo/TodoList";
import CreateTodo from "../features/todo/CreateTodo";

import { ScrollArea } from "@/components/ui/scroll-area";

import NotAuthenticated from "./NotAuthenticated";

function Home() {
  const { isAuthenticated } = useSelector((store) => store.user);
  const { todoList } = useSelector((store) => store.todo);

  if (!isAuthenticated) return <NotAuthenticated />;

  if (isAuthenticated)
    return (
      <main className="border-x border-gray-200 h-screen max-w-7xl mx-auto overflow-y-hidden">
        <Header />
        <section className="mt-7 mx-2 sm:mx-8 border-x border-t rounded-lg grid grid-rows-scroll-view h-todo">
          <div className="px-4 sm:px-8 py-7 flex items-center justify-between">
            <h4 className="text-lg font-semibold text-gray-800">Todo List</h4>
            <CreateTodo />
          </div>
          <div className="border-t border-gray-200 border-solid py-2 px-3 sm:px-7.5 bg-gray-50">
            <div className="flex">
              <p className="w-wd-md ms:w-1/3 text-sm not-italic font-semibold leading-normal text-gray-800">
                Title
              </p>

              <p className="w-wd-md ms:w-1/3 text-sm not-italic font-semibold leading-normal text-gray-800 px-2.5 sm:px-5">
                Description
              </p>
              <p className="w-1/6 text-center text-sm not-italic font-semibold leading-normal text-gray-800 px-5 hidden ms:flex items-center justify-center">
                Status
              </p>
            </div>
          </div>

          <ScrollArea className="h-full">
            {todoList?.length > 0 ? (
              <ul className="divide-y divide-gray-200 px-3 sm:px-7.5">
                {todoList?.map((todo, index) => (
                  <TodoList todo={todo} key={index} index={todo.id} />
                ))}
              </ul>
            ) : (
              <div className="h-20 flex items-center px-5">
                <h4>Please add a todo</h4>
              </div>
            )}
          </ScrollArea>
        </section>
      </main>
    );
}

export default Home;
