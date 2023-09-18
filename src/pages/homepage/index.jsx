import React, { Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../../redux/action-creators";
import HomePageShimmer from "./homePageShimmer";
import Carousal from "../../components/carousal.jsx";
import NoService from "../noService";
import LinkBanner from "../../components/LinkBanner";
import Bricks from "../../components/bricks";
import List from "../../components/list";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const restaurantsSelector = useSelector((state) => state.restaurants);

  useEffect(() => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
    const addressData = JSON.parse(localStorage.getItem("user_address"));

    if (addressData) {
      const geometry = addressData.geometry.location;
      dispatch(
        fetchRestaurants({
          lat: geometry.lat,
          lng: geometry.lng,
          "is-seo-homepage-enabled": true,
          page_type: "DESKTOP_WEB_LISTING",
        })
      );
    }
  }, []);

  useEffect(() => {
    if (restaurantsSelector.data.length > 0) {
      setData(restaurantsSelector.data);
    }
  }, [restaurantsSelector]);

  if (restaurantsSelector.isLoading) {
    return <HomePageShimmer />;
  }

  return (
    <Suspense fallback={<HomePageShimmer />}>
      <div className="mt-[100px]">
        {data[0]?.card?.card?.id === "swiggy_not_present" ? (
          <NoService data={data} />
        ) : (
          data.map((card, index) => {
            if (card.card.card.id === "restaurant_grid_listing") {
              return (
                <List
                  title={data[index - 2]?.card?.card?.title}
                  data={card.card.card}
                  key={index}
                />
              );
            }
            if (
              card.card.card.id === "restaurant_near_me_links" ||
              card.card.card.id === "best_city_link"
            ) {
              return (
                <Bricks
                  key={index}
                  cities={card.card.card.brands}
                  title={card.card.card.title}
                />
              );
            }
            if (card.card.card.id === "cuisines_near_you") {
              return (
                <Bricks
                  key={index}
                  cities={card.card.card.cuisines}
                  title={card.card.card.title}
                />
              );
            }
            if (card.card.card.id === "app_install_links") {
              return <LinkBanner key={index} card={card.card.card} />;
            }
            return <Carousal data={card.card.card} key={index} />;
          })
        )}
      </div>
    </Suspense>
  );
};

export default HomePage;
