import { useState } from "react";
import Modal from "./Modal";

const Add = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div>
      {modal && <Modal onSetModal={setModal} />}

      {modal && (
        <form className="relative h-full block mx-auto w-fit z-50">
          <div className="w-fit h-fit gap-4 bg-[#ececec] px-6 py-10 rounded-lg ">
            <label className="text-lg mb-4 block cursor-pointer" htmlFor="todo">
              Add Todo
            </label>
            <input
              placeholder="todo"
              className="w-full px-2 py-4 text-xl rounded-lg mb-6"
              id="todo"
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
              onClick={() => setModal(false)}
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <button
        onClick={() => setModal(true)}
        className="absolute right-16 bottom-16 flex justify-center items-center 
    text-4xl rounded-full
    w-20 h-20 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        +{" "}
      </button>
    </div>
  );
};

export default Add;
