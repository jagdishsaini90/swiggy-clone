import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSearchedRestaunrant } from "../../redux/action-creators";
import MenuItems from "./menuItems";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../components/modal";
import { TIME_ICONS } from "./timeImages";
import SearchMenu from "./searchMenu";
import Shimmer from "./shimmer";

const RestaurantPage = () => {
  const [open, setOpen] = useState(false);
  const [listCoords, setListCoords] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const params = useParams();
  const dispatch = useDispatch();
  const restaurantsData = useSelector((state) => state.searchedRestaurants);

  useEffect(() => {
    const addressData = JSON.parse(localStorage.getItem("user_address"));
    const { lat, lng } = addressData.geometry.location;

    dispatch(
      fetchSearchedRestaunrant({
        lat,
        lng,
        restaurantId: params?.name?.split("-")?.pop(),
        query: "",
      })
    );
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  }, []);

  if (restaurantsData.isLoading) {
    return <Shimmer />;
  }

  const { data: RestaurantData = [] } = restaurantsData;

  return (
    <div className="mt-24 max-w-[800px] m-auto">
      <SearchMenu
        open={showSearch}
        setShowSearch={setShowSearch}
        name={RestaurantData[0]?.card?.card?.info?.name}
        restaurantId={Number(
          RestaurantData[0]?.card?.card?.info?.sla?.restaurantId
        )}
        data={RestaurantData[2]}
        restaurantsData={restaurantsData}
      />
      {!showSearch ? (
        <>
          <div className="w-full flex justify-between items-center mb-6">
            <div>
              <p className="text-[1.2rem] text-[#282c3f] font-bold">
                {RestaurantData.length > 0 &&
                  RestaurantData[0]?.card?.card?.info?.name}
              </p>
              <p className="text-[#7e808c] text-[12px] mt-1">
                {RestaurantData.length > 0 &&
                  RestaurantData[0]?.card?.card?.info?.cuisines?.join(", ")}
              </p>
              <p className="text-[#7e808c] text-[12px] mt-1">
                {RestaurantData.length > 0 &&
                  RestaurantData[0]?.card?.card?.info?.areaName}
                {", "}
                {RestaurantData.length > 0 &&
                  RestaurantData[0]?.card?.card?.info?.sla?.lastMileTravel}{" "}
                km
              </p>
            </div>
            <div className="border-[1px] border-[#e9e9eb] w-[67px] h-[70px] flex justify-between flex-col items-center pt-2 pb-2">
              <p className="text-[13px] font-bold border-b-[1px] border-[#e9e9eb] pb-2">
                <FontAwesomeIcon
                  className="text-[#3d9b6d] mr-[2px]"
                  icon={faStar}
                />
                <span className="text-[#3d9b6d]">
                  {RestaurantData.length > 0 &&
                    RestaurantData[0]?.card?.card?.info?.avgRating}
                </span>
              </p>
              <p className="text-[#8b8d97] text-[10px]">
                {RestaurantData.length > 0 &&
                  RestaurantData[0]?.card?.card?.info?.totalRatingsString}
              </p>
            </div>
          </div>
          {RestaurantData.length > 0 &&
            RestaurantData[0]?.card?.card?.info?.feeDetails?.message && (
              <div className="text-[#7e808c] text-[13px] mt-1 flex justify-start items-center">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_18,h_18/SurgeAssets/distSurge"
                  alt="late"
                  className="mr-2"
                />
                {RestaurantData[0]?.card?.card?.info?.feeDetails?.message}
              </div>
            )}
          <hr className="border-[1px] border-[#d3d3d3] border-dashed mb-4 mt-4" />
          <div className="mb-6">
            <ul className="flex justify-start items-center">
              <li className="flex justify-start items-center mr-5">
                <img
                  src={
                    TIME_ICONS[
                      RestaurantData[0]?.card?.card?.info?.sla?.deliveryTime - 1
                    ]
                  }
                  className="w-[25px] h-[25px] mr-2"
                />
                <span className="text-[#3e4152] text-[14px] font-extrabold">
                  {RestaurantData[0]?.card?.card?.info?.sla?.slaString}
                </span>
              </li>
              <li className="flex justify-start items-center">
                <svg
                  className="RestaurantTimeCost_icon__8UdT4 mr-2"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <circle
                    cx="9"
                    cy="9"
                    r="8.25"
                    stroke="#3E4152"
                    strokeWidth="1.5"
                  ></circle>
                  <path
                    d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                    fill="#3E4152"
                  ></path>
                </svg>
                <span className="text-[#3e4152] text-[14px] font-extrabold">
                  {RestaurantData[0]?.card?.card?.info?.costForTwoMessage}
                </span>
              </li>
            </ul>
          </div>
          <hr className="border-[1px] border-[#d3d3d3] mb-4 mt-4" />
          <MenuItems
            setListCoords={setListCoords}
            data={restaurantsData.data}
          />
          {RestaurantData.length > 0 && (
            <div className="w-[800px] m-auto">
              <div className="MenuStickyBottom_fabButton__1BbIu MenuStickyBottom_fabButtonVisible__1sNK3">
                <button
                  onClick={() => setOpen(true)}
                  className="w-[150px] h-[40px] fixed bottom-14 left-[45%] bg-[#5D8ED5] rounded-[30px] drop-shadow-2xl"
                >
                  <div className="FabButton_container__O8oOh MenuFabButton_btn__1T0dx">
                    <FontAwesomeIcon
                      className="w-[13px] h-[13px] mr-2 text-[#fff]"
                      icon={faUtensils}
                    />
                    <span className="font-bold text-white text-[13px] uppercase">
                      Browse Menu
                    </span>
                  </div>
                </button>
              </div>
              <div className="MenuStickyBottom_viewCart__2nNZr"></div>
            </div>
          )}
          <Modal
            customClass="bottom-7"
            onClose={() => setOpen((prev) => !prev)}
            open={open}
          >
            <ul className="w-[500px]">
              {RestaurantData.length &&
                RestaurantData[2]?.groupedCard?.cardGroupMap[
                  "REGULAR"
                ]?.cards?.map((card, index) => {
                  return (
                    <li
                      onClick={() => listCoords[index].current.scrollIntoView()}
                      key={index}
                      className="mt-3 mb-3 flex justify-between cursor-pointer"
                    >
                      <span>{card.card.card.title}</span>
                      <span>
                        {card.card.card?.categories?.reduce(
                          (acc, val) => acc + val?.itemCards?.length,
                          0
                        )}
                        {card.card.card?.itemCards?.length}
                      </span>
                    </li>
                  );
                })}
            </ul>
          </Modal>
        </>
      ) : null}
    </div>
  );
};

export default RestaurantPage;
