import React from "react";

const Modal = ({ open = false, children, onClose, customClass = "" }) => {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-colors duration-300 ease-in-out min-w-[100%] min-h-[100%] z-[1000] ${
        open ? "visible bg-[rgba(40,44,62,.6)]" : "invisible"
      }`}
    >
      <div
        className={`bg-white rounded-xl shadow p-6 transition-all duration-300 ease-in-out absolute ${customClass} ${
          open ? "scale-100 opacity-100" : "scale-20 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
