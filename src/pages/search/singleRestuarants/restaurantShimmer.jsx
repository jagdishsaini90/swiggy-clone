import React from "react";

const RestaurantShimmer = () => {
  return (
    <div className="RestaurantShimmer">
      <div
        className="NavTabs_wrapper__1me4c _3DdnR"
        data-testid="search-nav-tabs-pl"
      >
        <span className="RESTAURANT-nav-tab-pl">
          <span className={"styles_container__1ieVH_active"} role="button">
            <span></span>
          </span>
        </span>
        <span className="DISH-nav-tab-pl">
          <span className={"styles_container__1ieVH_active"} role="button">
            <span></span>
          </span>
        </span>
      </div>
      <div className="single-restaurant">
        {Array(4)
          .fill()
          .map((value, index) => {
            return (
              <div key={index} className="RestaurantShimmer_card">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default RestaurantShimmer;
