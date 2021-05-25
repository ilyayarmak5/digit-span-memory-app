import { useData } from "./DataProvider";
import ReactDom from "react-dom";

const Modal = () => {
  const { showModal, setShowModal, userResult } = useData();

  const handleOnClose = () => setShowModal(false);

  if (!showModal) return null;
  return ReactDom.createPortal(
    <>
      <div className="modal-overlay" onClick={handleOnClose} />
      <div className="modal" onClick={handleOnClose}>
        <h1>Results</h1>
        <h2>You reached Level {userResult.level} </h2>
        <h2>Your score is {userResult.score}</h2>
      </div>
    </>,
    document.getElementById("modal-root")
  );
};

export default Modal;
