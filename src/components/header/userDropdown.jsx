import React from "react";

const UserDropdown = ({ enable, setEnable }) => {
  const list = ["Profile", "Orders", "Swiggy One", "Favourites", "Logout"];
  return (
    <div
      className={`absolute transition-all duration-500 right-[170px] z-[1000] 
     bg-white shadow-xl w-[200px] px-10 py-2 border-t-2 border-[#fc8019] ${
       enable
         ? "visible top-[72px] opacity-100"
         : "invisible top-[80px] opacity-0"
     } `}
      onMouseOver={() => setEnable(() => true)}
      onMouseOut={() => setEnable(() => false)}
    >
      <div className="absolute top-[-9px] left-[45%] border-solid border-b-[#fc8019] border-b-8 border-x-transparent border-x-8 border-t-0"></div>{" "}
      <ul>
        {list.map((item) => {
          return (
            <li
              className="py-2 cursor-pointer text-[13px] hover:font-semibold"
              key={item}
              onClick={() => {
                if (item === "Logout") {
                  localStorage.removeItem("user_data");
                  window.location.href = "/";
                }
              }}
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserDropdown;
