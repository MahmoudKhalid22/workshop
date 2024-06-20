import { atom } from "recoil";
import { ITodo } from "../types/type";

const todoState = atom<ITodo[]>({
  key: "todos",
  default: [],
});

const modalState = atom<boolean>({
  key: "modal",
  default: false,
});

export { todoState, modalState };
