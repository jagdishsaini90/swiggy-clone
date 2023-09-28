import React from "react";
import { Link } from "react-router-dom";
import errorPng from "../../assets/error.png";

const Error = () => {
  return (
    <div className="flex items-start justify-center w-[99%] h-screen">
      <div className="text-center w-[430px] py-[80px]">
        <img
          className="w-[200px] h-[260px] m-auto"
          src={errorPng}
          alt="error"
        />
        <div className="text-[#282c3f] text-[32px] font-bold mt-[35px] mb-[14px]">
          {"We'll be back shortly"}
        </div>
        <div className="text-[#686b78] text-[15px]">
          We are fixing a temporary glitch. Sorry for the inconvenience.
        </div>
        <Link role="button" to="/">
          <button className="bg-[#fc8019] text-white px-[20px] mt-[25px] outline-none h-[40px] font-bold">
            Go Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
