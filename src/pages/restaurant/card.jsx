import {
  faBurger,
  faIndianRupeeSign,
  faMinus,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/action-creators";

const Card = ({ data = {} }) => {
  const [addingToCart, setAddToCart] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    if (addingToCart >= 0) {
      dispatch(addItemToCart({ ...data, quantity: addingToCart }));
    }
  }, [addingToCart]);

  return (
    <>
      <div className="border-b-[1px] border-gray-500 pb-[40px] mb-[40px]">
        <div className="styles_container__-kShr" data-testid="normal-dish-item">
          <div className="flex justify-between items-center">
            <div className="styles_detailsContainer__22vh8">
              <div aria-hidden="true">
                <FontAwesomeIcon
                  icon={faBurger}
                  className={`${
                    data.itemAttribute?.vegClassifier === "VEG"
                      ? "text-[#0f8a65]"
                      : "text-[#e43b4f]"
                  } mr-2`}
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
                <h3 className="font-semibold text-[#3e4152]">{data.name}</h3>
              </div>
              <div
                className="styles_itemPortionContainer__1u_tj"
                aria-hidden="true"
              >
                <span
                  className="styles_price__2xrhD styles_itemPrice__1Nrpd styles_s__66zLz"
                  aria-hidden="true"
                >
                  {data.defaultPrice && (
                    <>
                      <FontAwesomeIcon
                        icon={faIndianRupeeSign}
                        className="mr-1 text-[11px]"
                      />
                      <span className="line-through text-[11px] mr-1">
                        {data.defaultPrice / 100}
                      </span>
                    </>
                  )}
                  <FontAwesomeIcon
                    icon={faIndianRupeeSign}
                    className="mr-[1px] w-[15px] h-[15px]"
                  />
                  {data.finalPrice / 100 || data.price / 100}
                </span>
              </div>
              <div
                className={`text-[12px] max-w-[600px] mt-4 text-[rgba(40,44,63,.45)]`}
                aria-hidden="true"
              >
                {data.description}
              </div>
            </div>
            <div className="styles_itemImageContainer__3Czsd">
              <div className="rounded overflow-hidden" aria-hidden="true">
                {data.imageId && (
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
                )}
              </div>
              <div
                className={`${!data?.imageId ? "relative left-[-115px]" : ""}`}
              >
                <div className="relative">
                  <div
                    onClick={() =>
                      addingToCart > 0 ? {} : setAddToCart((prev) => prev + 1)
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
                  <div className="text-[10px] absolute ml-[25px] mt-1">
                    Customisable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="styles_divider__2JelH styles_customized__3n4RE"></div>
        <div></div>
      </div>
    </>
  );
};

export default Card;
