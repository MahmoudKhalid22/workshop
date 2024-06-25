import { createPortal } from "react-dom";
import { useRecoilState } from "recoil";
import { modalState } from "../recoil/atom";

function Modal() {
  const [modal, setModal] = useRecoilState(modalState);

  return createPortal(
    <div
      className="
    fixed top-0 left-0 w-full h-full bg-[#445f5993]
    backdrop-filter
    z-10
    transition-all
    duration-500
    "
      onClick={() => setModal(false)}
    ></div>,
    document.body
  );
}

export default Modal;
