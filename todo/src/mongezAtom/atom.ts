import { atom, beforeUpdate } from "@mongez/react-atom";
import { PlainLocalStorageDriver, setCacheConfigurations } from "@mongez/cache";
import { ITodo } from "../types/type";
import cache from "@mongez/cache";

setCacheConfigurations({
  driver: new PlainLocalStorageDriver(),
});

export const todoAtom = atom<ITodo[]>({
  key: "todos",
  default: cache.get("todos") ? cache.get("todos") : [],
  beforeUpdate: function (data: ITodo[]) {
    cache.set("todos", data);
    return data;
  },
});

export const modalAtom = atom({
  key: "modal",
  default: false,
});
