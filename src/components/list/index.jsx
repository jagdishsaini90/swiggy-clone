import React, { useEffect, useRef, useState } from "react";
import "./style.scss";
import { Card } from "../cards";
import { useDispatch } from "react-redux";
import { fetchUpdate } from "../../redux/action-creators";

const List = ({ data = {}, title }) => {
  const { restaurants = [] } = data.gridElements.infoWithStyle;
  const [listData, setListData] = useState(restaurants);
  const divRef = useRef();
  const dispatch = useDispatch();
  const addressData = JSON.parse(localStorage.getItem("user_address"));
  const pageOffset = JSON.parse(localStorage.getItem("pageOffset"));
  const _csrf = JSON.parse(localStorage.getItem("csrfToken"));

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      const { lat, lng } = addressData.geometry.location;
      dispatch(
        fetchUpdate({
          lat,
          lng,
          _csrf,
          nextOffset: pageOffset.nextOffset,
          widgetOffset: pageOffset.widgetOffset,
          page_type: "DESKTOP_WEB_LISTING",
          filters: {},
          seoParams: {
            seoUrl: "https://www.swiggy.com/",
            pageType: "FOOD_HOMEPAGE",
            apiName: "FoodHomePage",
          },
        })
      );
    });
    if (divRef.current) {
      observer.observe(divRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2
        className="w-[1066px] m-auto text-[24px] mb-6 font-bold"
        style={{ color: "rgba(2, 6, 12, 0.92)" }}
      >
        {data?.title ? data?.title : title}
      </h2>
      <div className="w-[1066px] flex m-auto flex-wrap items-center justify-between">
        {listData.map((card) => {
          return <Card key={card.info.id} data={card} />;
        })}
        <div ref={divRef}></div>
      </div>
    </>
  );
};

export default List;
