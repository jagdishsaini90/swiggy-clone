import React from "react";

const Shimmer = () => {
  return (
    <div className="w-[800px] p-4 mx-auto mt-28">
      <div className="animate-pulse">
        <div className="w-full bg-[#dcdcdd] h-16"></div>
        <div className="w-full bg-[#dcdcdd] h-16 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-16 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-20 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-20 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-20 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-20 mt-7"></div>
        <div className="w-full bg-[#dcdcdd] h-20 mt-7"></div>
      </div>
    </div>
  );
};

export default Shimmer;
