import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../redux/action-creators";
import { useLocation } from "react-router-dom";
import { Card } from "../../components/cards";
import Shimmer from "./shimmer";

const Collections = () => {
  const dispatch = useDispatch();
  const addressData = JSON.parse(localStorage.getItem("user_address"));
  const params = useLocation();
  const restaurantsSelector = useSelector((state) => state.restaurants);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (addressData) {
      console.log(params);
      const geometry = addressData.geometry.location;
      dispatch(
        fetchRestaurants({
          lat: geometry.lat,
          lng: geometry.lng,
          collection: params.search.split("&")[0].split("=")[1],
          tags: params.search.split("&")[1].split("=")[1],
          type: params.search.split("&")[2].split("=")[1],
          offset: 0,
          page_type: null,
        })
      );
    }
  }, []);

  if (restaurantsSelector.isLoading) {
    return <Shimmer />;
  }

  return (
    <div className="mt-36 min-w-[1260px] max-w-[1260px] m-auto">
      <h1 className="text-[#282c3f] text-[45px] font-bold">
        {restaurantsSelector.data[0]?.card?.card?.title}
      </h1>
      <p className="text-[#282c3f] text-[17px] opacity-[0.9] mb-8">
        {restaurantsSelector.data[0]?.card?.card?.description}
      </p>
      <h2
        className="text-[24px] font-bold"
        style={{ color: "rgba(2, 6, 12, 0.92)" }}
      >
        Restaurants to explore
      </h2>
      <div className="flex flex-wrap justify-between items-center">
        {restaurantsSelector.data?.map((card) => {
          if (card.card.card?.info) {
            return (
              <Card
                data={{
                  ...card.card.card,
                  cta: { ...card.card.card.cta, text: "" },
                }}
                key={card.card.card.info.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default Collections;
