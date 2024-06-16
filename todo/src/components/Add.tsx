import Modal from "./Modal";
import AddTodoForm from "./AddTodoForm";
import { ITodo } from "../types/type";

const Add = ({
  onAddTodo,
  error,
  modal,
  onSetModal,
}: {
  onAddTodo: (e: React.FormEvent, p: ITodo) => void;
  error: boolean;
  modal: boolean;
  onSetModal: (p: boolean) => void;
}) => {
  return (
    <div>
      {modal && <Modal onSetModal={onSetModal} />}

      {modal && (
        <AddTodoForm
          error={error}
          onSetModal={onSetModal}
          onAddTodo={onAddTodo}
        />
      )}

      <button
        onClick={() => onSetModal(true)}
        className="absolute md:right-16 md:bottom-16 right-4 bottom-4 flex justify-center items-center 
    md:text-4xl text-xl rounded-full
    md:w-20 md:h-20 w-8 h-12 bg-blue-500 text-white font-semibold  shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
      >
        +{" "}
      </button>
    </div>
  );
};

export default Add;
