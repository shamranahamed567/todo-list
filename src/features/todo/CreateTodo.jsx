import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { Plus } from "lucide-react";
import { addTodo } from "./todoSlice";

function CreateTodo() {
  const [{ title, description }, setDetails] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch();

  function handleChangeInput(event) {
    const { name, value } = event.target;
    setDetails((current) => ({ ...current, [name]: value }));
  }

  function handleAddTodo() {
    const newTodo = {
      id: Math.floor(Math.random() * 1000000),
      title,
      description,
      status: false,
    };

    if (!title && !description) return;
    dispatch(addTodo(newTodo));
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center px-3 gap-2">
          <Plus size={20} strokeWidth={1.5} color="#FFF" />
          Add Todo
        </Button>
      </DialogTrigger>
      <DialogContent
        className="sm:max-w-md"
        onOpenAutoFocus={() => {
          setDetails({
            title: "",
            description: "",
          });
        }}
      >
        <DialogHeader>
          <DialogTitle>Add Todo</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-start">
              Title
            </Label>
            <Input
              id="title"
              placeholder="Enter a title"
              className="col-span-3"
              value={title}
              onChange={handleChangeInput}
              name="title"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-start">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Enter a description"
              className="col-span-3"
              value={description}
              onChange={handleChangeInput}
              name="description"
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button onClick={handleAddTodo} disabled={!title || !description}>
              Add Todo
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default CreateTodo;
