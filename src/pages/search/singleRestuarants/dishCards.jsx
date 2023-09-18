import React, { useEffect, useState } from "react";
import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faMinus,
  faPlus,
  faSquareCaretDown,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../../redux/action-creators";
import { Link } from "react-router-dom";

const joinString = (str = "") => {
  return str.split(" ").join("-").toLowerCase();
};

const DishCards = ({ data = {}, restaurant = {} }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [addingToCart, setAddToCart] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addingToCart > 0) {
      dispatch(addItemToCart({ ...data, quantity: addingToCart }));
    }
  }, [addingToCart]);

  const redirectLink = `${joinString(restaurant.name)}-${joinString(
    restaurant.locality
  )}-${restaurant.slugs.city}-${restaurant.id}`;

  return (
    <>
      <div className="Search_widgetsV2__27BBR Search_widgets__3o_bA">
        <div
          data-testid="search-pl-dish-first-v2-card"
          className="styles_container__2GTLR styles_containerV2__1_U51 min-w-[400px] max-w-[400px]"
        >
          <div className="styles_containerInner__2Q_JM styles_containerInnerV2__2yjT5">
            <Link
              to={`/restaurants/${redirectLink}?query=Korean`}
              className="styles_restaurant__20fB8"
            >
              <div>
                <div className="text-[14px] font-bolder styles_restaurantName__5VIQZ styles_restaurantNameBold__2OmFY">
                  {restaurant.name}
                </div>
                <div className="flex justify-start items-center">
                  <div>
                    <span className="text-[13px] mr-1 styles_restaurantMetaRatingStar__8olHv icon-star">
                      <FontAwesomeIcon
                        className="text-[#7e808c]"
                        icon={faStar}
                      />
                    </span>
                    <span className="text-[12px] styles_restaurantMetaRating__3MhTg">
                      {restaurant.avgRating}
                    </span>
                  </div>
                  <span className="styles_restaurantMetaDot__usB4d"></span>
                  <div className="text-[12px] ml-3">
                    {restaurant.sla.slaString}
                  </div>
                </div>
              </div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.2307 5.53999C12.9769 5.28615 12.5653 5.28615 12.3115 5.53999C12.0576 5.79383 12.0576 6.20539 12.3115 6.45923L17.2019 11.3496L5.39414 11.3496C5.03516 11.3496 4.74414 11.6406 4.74414 11.9996C4.74414 12.3586 5.03516 12.6496 5.39414 12.6496L17.2019 12.6496L12.3115 17.54C12.0576 17.7938 12.0576 18.2054 12.3115 18.4592C12.5653 18.7131 12.9769 18.7131 13.2307 18.4592L18.949 12.741C19.3584 12.3315 19.3584 11.6677 18.949 11.2583L13.2307 5.53999Z"
                  fill="#868891"
                ></path>
              </svg>
            </Link>
            <div className="styles_divider__3zP03"></div>
            <div>
              <div
                className="styles_container__-kShr"
                data-testid="normal-dish-item"
              >
                <div className="styles_item__3_NEA styles_hasImage__3OsYt">
                  <div className="styles_detailsContainer__22vh8">
                    <div aria-hidden="true">
                      <FontAwesomeIcon
                        icon={faSquareCaretDown}
                        className="text-[#fff] bg-[#e43b4f] border-1 border-[#e43b4f] mr-2"
                      />
                      {data.ribbon?.text && (
                        <FontAwesomeIcon
                          className="text-[13px] text-[#ee9c00]"
                          icon={faStar}
                        />
                      )}
                      <span
                        className={`${
                          data.ribbon?.text ? "text-[#ee9c00] font-bold" : ""
                        }  text-[13px] styles_ribbon__3tZ21 styles_itemRibbon__353Fy`}
                      >
                        {data.ribbon?.text || "Primary"}
                      </span>
                    </div>
                    <div className="styles_itemName__hLfgz" aria-hidden="true">
                      <h3 className="font-semibold text-[#3e4152]">
                        {data.name}
                      </h3>
                    </div>
                    <div
                      className="styles_itemPortionContainer__1u_tj"
                      aria-hidden="true"
                    >
                      <span
                        className="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz"
                        aria-hidden="true"
                      >
                        <span className="text-[#3e4152] text-[13px]">
                          <FontAwesomeIcon
                            icon={faIndianRupeeSign}
                            className="mr-1"
                          />
                          {data.price / 100}
                        </span>
                      </span>
                    </div>
                    <div
                      className={`text-[12px] mt-4 text-[rgba(40,44,63,.45)] styles_itemDesc__3vhM0 styles_hasMoreText__3fWkR`}
                      aria-hidden="true"
                    >
                      {data.description?.slice(0, 34)}
                    </div>
                    <div
                      className={`text-[12px] ${
                        data.description?.length > 68 && !showDescription
                          ? "whitespace-nowrap text-ellipsis overflow-hidden"
                          : ""
                      } text-[rgba(40,44,63,.45)] styles_itemDesc__3vhM0 styles_hasMoreText__3fWkR`}
                      aria-hidden="true"
                    >
                      {data.description?.slice(34)}
                    </div>
                    {data.description?.length > 68 && !showDescription && (
                      <button
                        onClick={(e) => setShowDescription(true)}
                        className="text-[#686b78] text-[13px] font-bold styles_itemDescButton__3Z6iB"
                        aria-hidden="true"
                      >
                        More
                      </button>
                    )}
                  </div>
                  <div className="styles_itemImageContainer__3Czsd">
                    <div className="rounded overflow-hidden" aria-hidden="true">
                      <button
                        className="styles_itemImage__3CsDL"
                        aria-label="See more information about Chicken Korean Spicy Ramen"
                        style={{ background: "rgb(246, 230, 233)" }}
                      >
                        <img
                          alt="Chicken Korean Spicy Ramen"
                          className="max-w-[118px] bg-cover min-w-[118px] max-h-[96px] min-h-[96px] styles_itemImage__3CsDL"
                          loading="lazy"
                          width="256"
                          src={
                            import.meta.env.VITE_SWIGGY_CLOUDINARY_API +
                            `/${data.imageId}`
                          }
                        />
                      </button>
                    </div>
                    <div className="styles_itemAddButton__zJ7-R">
                      <div className="relative">
                        <div
                          onClick={() =>
                            addingToCart > 0
                              ? {}
                              : setAddToCart((prev) => prev + 1)
                          }
                          className="cursor-pointer ml-[10px] hover:shadow-sm absolute border-[1px] border-gray-200 font-bold top-[-30px] bg-[#fff] flex justify-evenly items-center m-auto w-[95px] h-[35px] text-[#60b246] text-[12px]"
                        >
                          {addingToCart > 0 ? (
                            <>
                              <button
                                onClick={() =>
                                  addingToCart < 1
                                    ? {}
                                    : setAddToCart((prev) => prev - 1)
                                }
                              >
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                              <span>{addingToCart}</span>
                              <button
                                onClick={() =>
                                  addingToCart > 10
                                    ? {}
                                    : setAddToCart((prev) => prev + 1)
                                }
                              >
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </>
                          ) : (
                            "ADD"
                          )}
                        </div>
                        {addingToCart === 0 && (
                          <div className="text-[#60b246] absolute top-[-38px] left-[75%]">
                            +
                          </div>
                        )}
                        <div className="text-[10px] absolute ml-[25px] mt-1">
                          Customisable
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default DishCards;
