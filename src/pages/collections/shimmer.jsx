import React from "react";

const Shimmer = () => {
  return (
    <div className="mt-36 min-w-[1260px] max-w-[1260px] m-auto">
      <div className="animate-pulse flex flex-col">
        <div className="bg-[#b3b3b4] h-10 w-[30%]"></div>
        <div className="bg-[#b3b3b4] h-4 w-[60%] mt-4"></div>

        <div className="flex justify-start items-center flex-wrap mt-10 mb-10">
          {Array(10)
            .fill()
            .map((val, index) => {
              return (
                <div className="m-3" key={index}>
                  <div className="w-56 h-32 bg-[#b3b3b4]"></div>
                  <div className="bg-[#b3b3b4] h-4 mt-4"></div>
                  <div className="bg-[#b3b3b4] h-8 w-[60%] mt-4"></div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
