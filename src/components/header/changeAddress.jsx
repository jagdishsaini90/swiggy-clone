import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import SideBar from "../sidebar";
import { fetchAddress, fetchLocation } from "../../redux/action-creators";

const ChangeAddress = ({ open, setOpen }) => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState({
    state: null,
    message: "",
    loading: "",
  });
  const dispatch = useDispatch();

  const locationSelector = useSelector((state) => state.locations);
  const addressSelector = useSelector((state) => state.address);

  function loadAddress(lng, lat, place_id) {
    if (place_id) {
      dispatch(fetchAddress({ place_id }));
    } else {
      dispatch(fetchAddress({ lat, lng }));
    }
  }

  useEffect(() => {
    if (search) {
      dispatch(fetchLocation(search));
    }
  }, [search]);

  useEffect(() => {
    if (addressSelector.data.length > 0) {
      localStorage.setItem(
        "user_address",
        JSON.stringify(addressSelector.data[0])
      );
      setSearch("");
      setOpen(false);
      window.location.href = "/";
    }
  }, [addressSelector]);

  function getLocation() {
    setError({ state: null, message: "" });
    Promise.resolve().then(() => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          loadAddress(position.coords.longitude, position.coords.latitude);
        },
        () => {
          setError({
            state: true,
            message:
              "You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.",
          });
        }
      );
    });
  }
  return (
    <SideBar onClose={() => setOpen((prev) => !prev)} open={open}>
      <div className="pl-[70px] pr-[30px]">
        <FontAwesomeIcon
          onClick={() => setOpen((prev) => !prev)}
          className="text-2xl cursor-pointer"
          icon={faXmark}
        />
        <br />
        <br />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for area, street name..."
          className="h-[50px] border-[1px] border-gray w-full focus:outline-none pl-[20px] pr-[50px] focus-within:shadow-xl"
        />
        {search.length > 0 ? (
          <p
            onClick={() => setSearch("")}
            className="relative text-[#fc8019] font-bold right-[10px] cursor-pointer top-[-35px] text-right text-[13px]"
          >
            Cancel
          </p>
        ) : null}
        <ul className="transition-all duration-300 ease-in-out">
          {search.length > 0 &&
            locationSelector.data.map((item) => {
              return (
                <li
                  onClick={() => loadAddress(null, null, item.place_id)}
                  className="py-[22px] px-[24px] border-b-[1px] border-[#93959f] border-dashed flex justify-start items-start flex-row w-full whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-300 ease-in-out cursor-pointer hover:text-[#fc8019]"
                  key={item.place_id}
                >
                  <FontAwesomeIcon
                    className="mr-4 mt-1 text-[18px]"
                    icon={faLocationDot}
                  />
                  <div className="">
                    <h3>{item?.structured_formatting?.main_text}</h3>
                    <p className="text-[12px] text-[#93959f] mt-1 ">
                      {item?.structured_formatting?.secondary_text}
                    </p>
                  </div>
                </li>
              );
            })}
          {search.length > 0 && locationSelector.data?.length === 0 ? (
            <>
              <div>
                <img
                  className="mt-[40px] mb-[20px] mx-auto"
                  height="200"
                  width="200"
                  alt="img renderer"
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_404,h_400/empty_location_unserviceable_3x_dt3civ"
                />
                <div className="text-center font-bold">No results</div>
                <div className="text-[#93959f] text-[13px] text-center mt-2">
                  Are you sure you entered the right location?
                </div>
              </div>{" "}
            </>
          ) : null}
        </ul>
        {!locationSelector.data.length > 0 ? (
          <div className="border-[1px] border-gray mt-10 relative">
            <div className="flex justify-start py-[22px] px-[24px] w-fit ">
              <FontAwesomeIcon
                className="mt-1 mr-2"
                icon={faLocationCrosshairs}
              />
              <div>
                <div
                  onClick={getLocation}
                  className="hover:text-[#fc8019] cursor-pointer font-semibold"
                >
                  Get current location
                </div>
                <div className="text-[#93959f] text-[12px] mt-1">Using GPS</div>
              </div>
            </div>
            {error.state || addressSelector.error ? (
              <div className="absolute top-[100%] text-[13px] bg-[#fa4a5b] text-[white] min-w-full left-0 p-[17px]">
                {error.message || addressSelector.error}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </SideBar>
  );
};

export default ChangeAddress;
