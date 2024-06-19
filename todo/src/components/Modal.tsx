import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { displayModal } from "../redux/modalSlice";

function Modal() {
  const dispatch = useDispatch();
  return createPortal(
    <div
      className="
    fixed top-0 left-0 w-full h-full bg-[#445f5993]
    backdrop-filter
    z-10
    transition-all
    duration-500
    "
      onClick={() => dispatch(displayModal(false))}
    ></div>,
    document.body
  );
}

export default Modal;
