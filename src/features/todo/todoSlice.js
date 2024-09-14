import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || [],
  editTodoIndex: null,
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo(state, action) {
      state.todoList.push(action.payload);
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    toggleTodoStatus(state, action) {
      const selectedTodo = state.todoList.find(
        (todo) => todo.id === action.payload
      );
      if (selectedTodo) {
        selectedTodo.status = !selectedTodo.status;
        localStorage.setItem("todoList", JSON.stringify(state.todoList));
      }
    },
    updateTodoIndex(state, action) {
      state.editTodoIndex = action.payload;
    },
    updateTodo(state, action) {
      state.editTodoIndex = null;
      const updatedTodo = action.payload;
      state.todoList = state.todoList.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      );
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
    deleteTodo(state, action) {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
      localStorage.setItem("todoList", JSON.stringify(state.todoList));
    },
  },
});

export const {
  addTodo,
  toggleTodoStatus,
  updateTodoIndex,
  updateTodo,
  deleteTodo,
} = todoSlice.actions;

export default todoSlice.reducer;
