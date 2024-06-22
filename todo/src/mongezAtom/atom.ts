import { atom } from "@mongez/react-atom";
import { ITodo } from "../types/type";

export const todoAtom = atom<ITodo[]>({
  key: "todos",
  default: [],
});
export const modalAtom = atom({
  key: "modal",
  default: false,
});
