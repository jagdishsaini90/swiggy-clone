import React, { useEffect } from "react";

const SideBar = ({
  open,
  children,
  customClass = "",
  onClose,
  width = "500",
  direction = "left",
}) => {
  let directionClass = "top-0 left-0";
  if (direction === "right") {
    directionClass = " top-0 right-0";
  }

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  return (
    <div
      onClick={(e) => {
        if (direction === "left") {
          if (e.clientX > Number(width)) {
            onClose();
          }
        } else if (direction === "right") {
          if (e.clientX + Number(width) < window.screen.width) {
            onClose();
          }
        }
      }}
      className={`fixed inset-0 top-0 left-0 flex justify-center items-center transition-colors duration-[300ms] ease-in-out w-[100%] h-[100%] z-[1000] ${
        open ? "visible bg-[rgba(40,44,62,.6)]" : "invisible"
      }`}
    >
      <div
        className={`bg-white shadow p-6 h-full transition-all duration-[300ms] ease-in-out absolute ${directionClass} z-[1010] ${customClass} ${
          open ? `w-[520px] opacity-100` : "w-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBar;
