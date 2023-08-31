import React, { useEffect } from "react";
import "./EditModal.css";

export default function EditModal({ children, onClose, onsubmit }) {
  useEffect(() => {
    const chekKey = (event) => {
      if (event.keyCode == 27) {
        onClose();
      }
    };
    window.addEventListener("keydown", chekKey);
    return ()=> window.removeEventListener("keydown", chekKey);
  });

  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>Enter new Informaition</h1>
        {children}
        <button className="edit-form-submit" onClick={onsubmit}>Submit New Informaition</button>
      </form>
    </div>
  );
}
