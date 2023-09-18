import React, { useEffect } from "react";

const SideBar = ({
  open,
  children,
  customClass = "",
  onClose,
  width = "500",
  direction = "left",
  duration = "300",
}) => {
  let directionClass = "";
  if (direction === "left") {
    directionClass = " top-0 left-0";
  } else if (direction === "right") {
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
      className={`fixed inset-0 top-0 left-0 flex justify-center items-center transition-colors duration-[${duration}ms] ease-in-out w-[100%] h-[100%] z-[1000] ${
        open ? "visible bg-[rgba(40,44,62,.6)]" : "invisible"
      }`}
    >
      <div
        className={`bg-white shadow p-6 h-full transition-all duration-[${duration}ms] ease-in-out absolute ${directionClass} z-[1010] ${customClass} ${
          open ? `w-[${width}px] opacity-100` : "w-0 opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default SideBar;
