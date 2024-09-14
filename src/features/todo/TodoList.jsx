import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

import {
  deleteTodo,
  toggleTodoStatus,
  updateTodo,
  updateTodoIndex,
} from "./todoSlice";

import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { Check, FilePenLine, Trash2, X } from "lucide-react";

function TodoList({ todo, index }) {
  const dispatch = useDispatch();
  const { editTodoIndex } = useSelector((store) => store.todo);
  const [{ title, description }, setDetails] = useState({
    title: todo?.title,
    description: todo?.description,
  });

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setDetails((current) => ({ ...current, [name]: value }));
  }

  function handleToggleStatus() {
    dispatch(toggleTodoStatus(index));
  }

  function handleEditTodo() {
    if (editTodoIndex === index) {
      const updatedTodo = { ...todo, title, description };
      dispatch(updateTodo(updatedTodo));
    } else {
      dispatch(updateTodoIndex(index));
    }
  }

  console.log(todo?.title?.length);

  return (
    <li className="flex items-center divide-x divide-gray-200 h-20">
      <div className="flex items-center gap-3.5 w-wd-md ms:w-1/3">
        <Checkbox checked={todo?.status} onCheckedChange={handleToggleStatus} />
        {editTodoIndex === index ? (
          <div className="grow pr-5">
            <Input
              type="text"
              placeholder="Edit Title"
              name="title"
              value={title}
              onChange={handleChangeInput}
              className="focus:outline-0"
            />
          </div>
        ) : (
          <h6 className="text-base font-semibold text-gray-800">
            {todo?.title}
          </h6>
        )}
      </div>
      {editTodoIndex === index ? (
        <div className="w-wd-md ms:w-1/3 px-2.5 sm:px-5">
          <Input
            type="text"
            placeholder="Edit Description"
            name="description"
            value={description}
            onChange={handleChangeInput}
            className="outline-0"
          />
        </div>
      ) : (
        <p className="w-wd-md ms:w-1/3 text-sm text-muted-foreground font-normal mr-2.5 sm:mr-5 pl-2.5 sm:pl-5 flex items-center">
          {todo?.description}
        </p>
      )}

      <div className="px-5 hidden ms:flex items-center justify-center w-1/6">
        <Badge
          variant="outline"
          className={`px-2 py-0 rounded h-5 inline-flex items-center gap-1 justify-center text-sm font-normal border-none
            ${
              todo?.status
                ? "bg-complete-badge-bg text-complete-badge"
                : "bg-incompleted-badge-bg text-incompleted-badge"
            }`}
        >
          {todo?.status ? "Completed" : "Incomplete"}
          {todo?.status ? (
            <Check size={16} strokeWidth={1.5} color="#1FC16B" />
          ) : (
            <X size={16} strokeWidth={1.5} color="#FB3748" className="mt-0.5" />
          )}
        </Badge>
      </div>
      <div className="grow pl-5 flex items-center gap-3 justify-end">
        <Button
          variant="ghost"
          size="icon"
          className="w-5 h-5 hover:bg-transparent"
          onClick={handleEditTodo}
        >
          {editTodoIndex === index ? (
            <Check strokeWidth={1.5} color="#6EE7B7" />
          ) : (
            <FilePenLine size={20} strokeWidth={1.5} color="#6EE7B7" />
          )}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="w-5 h-5 hover:bg-transparent"
          onClick={() => dispatch(deleteTodo(index))}
        >
          <Trash2 size={20} strokeWidth={1.5} color="#FB3748" />
        </Button>
      </div>
    </li>
  );
}

TodoList.propTypes = {
  todo: PropTypes.object,
  index: PropTypes.number,
};

export default TodoList;
