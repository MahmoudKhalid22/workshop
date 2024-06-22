import React, { useState } from "react";
import { ITodo } from "../types/type";
import { useRecoilState } from "recoil";
import { modalState, todoState } from "../atom/atom";
import { modalAtom, todoAtom } from "../mongezAtom/atom";

const AddTodoForm = () => {
  // const [modal, setModal] = useRecoilState(modalState);
  // const [todos, setTodos] = useRecoilState(todoState);

  const [modal, setModal] = modalAtom.useState();
  const [todos, setTodos] = todoAtom.useState();

  const [todo, setTodo] = useState<ITodo>({
    id: 0,
    title: "",
    description: "",
    date: "",
    completed: false,
  });
  const [error, setError] = useState(false);

  return (
    <form
      className="fixed top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 block mx-auto w-[90%] md:w-1/2 z-50"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        if (todo.title === "" || todo.description === "") {
          setError(true);
          return;
        }
        setTodos([...todos, todo]);
        setModal(false);
      }}
    >
      <div className="w-full h-fit gap-4 bg-[#ececec] px-6 py-10 rounded-lg ">
        <div className="mb-6">
          <label
            className="text-lg md:text-2xl font-semibold mb-4 block cursor-pointer"
            htmlFor="title"
          >
            Title
          </label>
          <input
            placeholder="todo"
            className="w-full py-4 px-6 md:text-xl text-md rounded-lg"
            id="title"
            defaultValue={todo.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.value === "" || e.target.value === undefined) {
                setError(true);
                return;
              }
              setTodo({ ...todo, title: e.target.value });
            }}
          />
          {error && (
            <p className="ml-6 text-red-600 text-lg text-left">
              you must provide this field
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="text-lg font-semibold md:text-2xl mb-4 block cursor-pointer"
            htmlFor="description"
          >
            Add Todo
          </label>
          <textarea
            placeholder="todo"
            className="w-full min-h-36 py-4 px-6 md:text-xl text-md rounded-lg "
            id="description"
            value={todo.description}
            onChange={(e) => {
              if (e.target.value === "" || e.target.value === undefined) {
                setError(true);
                return;
              }
              setTodo({ ...todo, description: e.target.value });
            }}
          />
          {error && (
            <p className="ml-6 text-red-600 text-lg text-left">
              you must provide this field
            </p>
          )}
        </div>
        <div className="mb-6">
          <label
            className="text-lg md:text-2xl font-semibold mb-4 block cursor-pointer"
            htmlFor="date"
          >
            Set the Deadline{" "}
          </label>
          <input
            placeholder="date"
            className="w-full py-4 px-6 md:text-xl text-md rounded-lg "
            id="date"
            type="date"
            value={todo.date}
            onChange={(e) => setTodo({ ...todo, date: e.target.value })}
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 transition-colors text-white w-full mt-6"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
