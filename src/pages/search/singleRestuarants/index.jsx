import React, { useEffect, useState } from "react";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSingleRestaunrant } from "../../../redux/action-creators";
import Card from "./card";
import RestaurantShimmer from "./restaurantShimmer";
import DishCards from "./dishCards";

const SingleRestuarants = ({ name, lat, lng }) => {
  const [data, setData] = useState({
    primary: {},
    secondary: [],
  });
  const [tab, setTab] = useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.singleRestaurants);

  useEffect(() => {
    if (name) {
      dispatch(fetchSingleRestaunrant({ lat, lng, str: name }));
    }
  }, []);

  useEffect(() => {
    const RESTAURANTS =
      selector.data[1]?.groupedCard?.cardGroupMap["RESTAURANT"];
    const DISHES = selector.data[1]?.groupedCard?.cardGroupMap["DISH"];

    let suggestedRestaurants = [],
      mainResturant = {};

    if (RESTAURANTS) {
      mainResturant = RESTAURANTS?.cards[0].card.card.info;
      suggestedRestaurants = RESTAURANTS?.cards[1].card.card.restaurants;
      setTab("Restaurants");
    }
    if (DISHES) {
      suggestedRestaurants = DISHES?.cards
        ?.map((dish) => {
          if (dish.card.card?.sortConfigs) {
            return null;
          }
          return dish;
        })
        .filter(Boolean);
      setTab("Dishes");
    }

    setData({
      primary: mainResturant,
      secondary: suggestedRestaurants || [],
    });
  }, [selector, tab]);

  if (selector.isLoading) {
    return <RestaurantShimmer />;
  }

  return (
    <div>
      <div
        className="NavTabs_wrapper__1me4c _3DdnR"
        data-testid="search-nav-tabs-pl"
      >
        <span
          onClick={() => setTab("Restaurants")}
          className="RESTAURANT-nav-tab-pl"
        >
          <span
            className={`${
              tab === "Restaurants" ? "styles_container__1ieVH_active" : ""
            }`}
            role="button"
          >
            <span>Restaurants</span>
          </span>
        </span>
        <span onClick={() => setTab("Dishes")} className="DISH-nav-tab-pl">
          <span
            className={`${
              tab === "Dishes" ? "styles_container__1ieVH_active" : ""
            }`}
            role="button"
          >
            <span>Dishes</span>
          </span>
        </span>
      </div>
      <div className="single-restaurant">
        {tab !== "Dishes" ? (
          <>
            <Card data={data.primary} />
            <h4 style={{ margin: "50px 0 20px 20px", color: "#3e415" }}>
              More results like this
            </h4>
          </>
        ) : null}
        <div className="suggested_restaurants">
          {tab === "Dishes"
            ? data.secondary.map((value) => {
                return (
                  <DishCards
                    key={value.card.card.info.id}
                    data={value.card.card.info}
                    restaurant={value.card.card.restaurant.info}
                  />
                );
              })
            : data.secondary.map((value) => {
                return <Card data={value.info} key={value.info.id} />;
              })}
        </div>
      </div>
    </div>
  );
};

export default SingleRestuarants;
