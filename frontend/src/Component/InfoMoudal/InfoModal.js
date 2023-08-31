import React, { useEffect } from "react";

import "./InfoModal.css";

export default function InfoModal ({ onHide,children }) {
  useEffect(() => {
    const chrckKey = (event) => {
      if (event.keyCode==27) {
        onHide()
      }
    };
    window.addEventListener('keydown', chrckKey);
    return ()=> window.removeEventListener('keydown',chrckKey)

  });

  return (
    <div className="modal-parent active">
      <div className="detail-modal ">
        {children}
        
      </div>
    </div>
  );
}
