import { createPortal } from "react-dom";

function Modal({ onSetModal }) {
  return createPortal(
    <div
      className="
    fixed top-0 left-0 w-full h-full bg-[#445f5993]
    backdrop-filter
    z-10
    transition-all
    duration-500
    "
      onClick={() => onSetModal(false)}
    ></div>,
    document.body
  );
}

export default Modal;
