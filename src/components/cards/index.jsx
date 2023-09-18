import { Link } from "react-router-dom";

export function Card({ data }) {
  const width = data?.cta?.text === "RESTAURANT_MENU" ? "235" : "273";
  const height = data?.cta?.text === "RESTAURANT_MENU" ? "156" : "181";

  return (
    <Link
      to={`/restaurants/${data?.cta?.link?.split("/")?.pop()}`}
      className={`mr-4 mb-4 mt-4 cursor-pointer transition-all duration-300 hover:scale-[.9]`}
    >
      <div
        style={{
          minHeight: `${height}px`,
          minWidth: `${width}px`,
        }}
        className={`relative shadow-[1px 1px 2px grey] rounded-lg overflow-hidden`}
      >
        <img
          className="max-w-[none]"
          src={`${import.meta.env.VITE_SWIGGY_CLOUDINARY_API}/${
            data.info.cloudinaryImageId
          }`}
          width={width}
          height={height}
          alt={data.info.name}
        />
        <div
          style={{
            background:
              "linear-gradient(rgba(27, 30, 36, 0) 0%, rgb(27, 30, 36) 84.21%)",
          }}
          className="absolute h-[50%] bottom-0 p-[12px] flex justify-center items-end m-auto text-white text-xl w-full font-extrabold"
        >
          <div></div>
          <div>
            {data?.info?.aggregatedDiscountInfoV3?.header}{" "}
            {data?.info?.aggregatedDiscountInfoV3?.subHeader}
          </div>
        </div>
      </div>
      <div>
        <div>
          <div
            style={{ color: "rgba(2, 6, 12, 0.75)" }}
            className="mt-2 font-bold text-[15px]"
          >
            {data.info.name}
          </div>
        </div>
        <div className="flex items-center">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            role="img"
            aria-hidden="true"
          >
            <circle
              cx="10"
              cy="10"
              r="9"
              fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"
            ></circle>
            <path
              d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z"
              fill="white"
            ></path>
            <defs>
              <linearGradient
                id="StoreRating20_svg__paint0_linear_32982_71567"
                x1="10"
                y1="1"
                x2="10"
                y2="19"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#21973B"></stop>
                <stop offset="1" stopColor="#128540"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div className="ml-1">{data?.info?.avgRating}</div>
        </div>
        <div
          style={{
            color: "rgba(2, 6, 12, 0.6)",
            maxWidth: `${width}px`,
          }}
          className={`whitespace-nowrap text-ellipsis overflow-hidden text-[14px]`}
        >
          <div className="whitespace-nowrap text-ellipsis overflow-hidden">
            {data.info.cuisines.join(", ")}
          </div>
          <div className="whitespace-nowrap text-ellipsis overflow-hidden">
            {data.info.areaName}
          </div>
        </div>
      </div>
    </Link>
  );
}

const Cards = ({ data }) => {
  return (
    <>
      {data?.gridElements?.infoWithStyle?.restaurants?.map((card, index) => {
        return <Card data={card} key={index} />;
      })}
    </>
  );
};

export default Cards;
