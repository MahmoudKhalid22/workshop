import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../types/type";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("todos");
    if (serializedState === null) {
      return [];
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return [];
  }
};

const initialState: ITodo[] = loadState();

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      const newTodo = {
        ...action.payload,
        id: Date.now(),
      };
      state.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(state));
    },
    updateCompleted: (state, action: PayloadAction<ITodo>) => {
      const todo = state.findIndex(
        (todo: ITodo) => todo.id === action.payload.id
      );
      if (todo !== -1) {
        state[todo].completed = !state[todo].completed;
        localStorage.setItem("todos", JSON.stringify(state));
      }
    },
    deleteTodo: (state, action: PayloadAction<ITodo>) => {
      const newData = state.filter(
        (todo: ITodo) => todo.id !== action.payload.id
      );
      localStorage.setItem("todos", JSON.stringify(newData));
      return newData;
    },
    clearAll: (state) => {
      localStorage.clear();
      state = [];
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTodo, updateCompleted, deleteTodo, clearAll } =
  todoSlice.actions;

export default todoSlice.reducer;
