import React, { useEffect } from "react";
import ReactDom from "react-dom";
import "./DeletModal.css";

export default function DeletModal({ closeModal, submitModal,title }) {
  useEffect(() => {
    const checkKey = (e) => {
      if (e.keyCode == 27) {
        closeModal();
      }
    };
    window.addEventListener("keydown", checkKey);
    return () => window.removeEventListener("keydown", checkKey);
  });

  return ReactDom.createPortal(
    <div className="modal-parent active">
      <div className="delet-modul">
        <h1>{title}</h1>
        <div className="delet-modal-btns">
          <button className="btn btn-primary accept" onClick={submitModal}>
            Yes
          </button>
          <button className="btn btn-primary reject" onClick={closeModal}>
            No
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modals-parent")
  );
}
