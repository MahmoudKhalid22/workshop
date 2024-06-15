import { createPortal } from "react-dom";

function Modal() {
  return createPortal(
    <div
      className="
    fixed top-0 left-0 w-full h-full bg-[#445f5993]
    backdrop-filter
    z-50
    transition-all
    duration-500
    "
    >
      <form className="w-full h-full flex items-center gap-3 flex-col justify-center ">
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
        </div>
      </form>
    </div>,
    document.body
  );
}

export default Modal;
