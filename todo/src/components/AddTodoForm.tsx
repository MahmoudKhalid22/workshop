import React, { useEffect, useState } from "react";

interface Props {
  onSetModal: (p: boolean) => void;
}

const AddTodoForm: React.FC<Props> = ({ onSetModal, onAddTodo }) => {
  const [todo, setTodo] = useState("");
  return (
    <form
      className="relative h-full block mx-auto w-fit z-50"
      onSubmit={(e: React.FormEvent) => {
        onSetModal(false);
        onAddTodo(e, todo);
      }}
    >
      <div className="w-fit h-fit gap-4 bg-[#ececec] px-6 py-10 rounded-lg ">
        <label className="text-lg mb-4 block cursor-pointer" htmlFor="todo">
          Add Todo
        </label>
        <input
          placeholder="todo"
          className="w-full py-4 px-6 md:text-xl text-md rounded-lg mb-6"
          id="todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 transition-colors text-white w-full"
        >
          Add
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 transition-colors text-white w-full mt-6"
          onClick={() => onSetModal(false)}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddTodoForm;
