// import Modal from "./Modal";
// import AddTodoForm from "./AddTodoForm";
// import { ITodo } from "../types/type";

import { useDispatch, useSelector } from "react-redux";
import { displayModal } from "../redux/modalSlice";
import Modal from "./Modal";
import AddTodoForm from "./AddTodoForm";

const Add = () => {
  const dispatch = useDispatch();
  const modal = useSelector(
    (state: { modal: { modalWindow: boolean } }) => state.modal
  );

  return (
    <div>
      {modal.modalWindow && <Modal />}

      {modal.modalWindow && <AddTodoForm />}

      <button
        onClick={() => dispatch(displayModal(true))}
        className="fixed md:right-16 md:bottom-16 right-4 bottom-4 flex justify-center items-center 
    md:text-4xl text-xl rounded-full
    md:w-20 md:h-20 w-8 h-12 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        +{" "}
      </button>
    </div>
  );
};

export default Add;
