import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import Cards from "../cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Row = ({ data, name, setWidth }) => {
  let width, height;
  if (name === "topical_banner") {
    (width = "425"), (height = "252");
  }
  if (name === "whats_on_your_mind") {
    (width = "144"), (height = "180");
  }
  useEffect(() => {
    setWidth(width);
  }, []);

  const addressData = JSON.parse(localStorage.getItem("user_address"));

  return (
    <>
      {data?.info?.map((image) => {
        const query = image?.action?.link?.split("?")[1];
        const collectionId = image?.action?.link?.split("?")[0]?.split("/");

        const isMenu = image?.action?.link?.search("menu");
        let link = `/collections/${collectionId.pop()}?${query}`;

        if (isMenu > 0) {
          link = `/restaurants/${image?.action?.text?.toLowerCase()}-${addressData?.formatted_address
            ?.split(", ")
            ?.join("-")}-${image?.entityId}`;
        }
        return (
          <div
            style={{
              height: `${height}px`,
            }}
            className={`min-w-[${width}px] mr-5 transition-all duration-300`}
            key={image.id}
          >
            <Link
              to={link}
              state={{
                title: image.action.text,
              }}
            >
              <img
                className={`max-w-none h-[100%]`}
                src={`${import.meta.env.VITE_SWIGGY_CLOUDINARY_API}/${
                  image.imageId
                }`}
                width={width}
                height={height}
                alt={image.accessibility.altText}
              />
            </Link>
          </div>
        );
      })}
    </>
  );
};

const Carousal = ({ data }) => {
  const { imageGridCards, gridElements, header, id } = data;
  const [width, setWidth] = useState("");
  const ref = useRef();

  if (!gridElements) return null;

  const handleForward = () => {
    ref.current.scrollLeft += Number(width);
  };

  const handleBackward = () => {
    ref.current.scrollLeft -= Number(width);
  };

  return (
    <div className="w-[1066px] m-auto relative">
      <div className="absolute right-0">
        <FontAwesomeIcon
          onClick={handleBackward}
          className="w-[20px] h-[20px] p-2 rounded-full bg-[#E2E2E7] rotate-[-180deg] mr-3 cursor-pointer"
          icon={faArrowRight}
        />
        <FontAwesomeIcon
          onClick={handleForward}
          className="w-[20px] h-[20px] p-2 rounded-full bg-[#E2E2E7] text-[#02060C] rotate-[180deg] cursor-pointer"
          icon={faArrowLeft}
        />
      </div>
      <h2 className="text-[24px] font-bold text-[#02060C]">
        {header?.title || "Best offers for you"}
      </h2>

      <div
        ref={ref}
        className="flex justify-between items-center overflow-x-scroll flex-row [&::-webkit-scrollbar]:hidden mt-4 mb-8 transition-all duration-500"
      >
        {gridElements?.infoWithStyle?.restaurants ? (
          <Cards data={data} />
        ) : (
          <Row setWidth={setWidth} name={id} data={imageGridCards} />
        )}
      </div>
    </div>
  );
};

export default Carousal;
