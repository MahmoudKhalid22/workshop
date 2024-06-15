import { useState } from "react";
import Modal from "./Modal";

const Add = () => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      {modal &&
      
      <Modal />
      
      }
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
