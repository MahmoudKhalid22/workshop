import { atom } from "recoil";
import { ITodo } from "../types/type";

const data = localStorage.getItem("todos")
  ? JSON.parse(localStorage.getItem("todos") as string)
  : [];

const todoState = atom<ITodo[]>({
  key: "todos",
  default: data,
});

const modalState = atom<boolean>({
  key: "modal",
  default: false,
});

export { todoState, modalState };
