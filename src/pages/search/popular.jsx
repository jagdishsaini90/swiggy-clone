import React from "react";

const Popular = ({ data }) => {
  const cards = data[1]?.card?.card?.imageGridCards?.info || [];
  return (
    <div>
      <div className="Search_widgetsV2__27BBR">
        <div className="styles_container__jxIGl">
          <div></div>
          <div
            data-testid="grid-header"
            className="styles_headerContainer__2UgeD"
          >
            <div style={{ padding: "28px 0px 0px 16px" }}>
              <h2 className="styles_headerContainerTitle__27_ET">
                <span>Popular Cuisines</span>
              </h2>
              <span
                className="styles_headerContainerSubtitle__1WRg5"
                aria-hidden="true"
              ></span>
            </div>
          </div>
        </div>
        <div>
          <div className="styles_slide__2c207">
            <div className="Carousel_slide__klR8u">
              {cards.map((item) => {
                return (
                  <div
                    key={item.id}
                    data-testid="image-info-container"
                    className="styles_container__1Nshr"
                  >
                    <button
                      data-testid="image-info-ripple"
                      className="Ripple_container__17nxL styles_containerImg__3AXGh"
                    >
                      <img
                        alt=""
                        className="styles_img__3HNZ4"
                        loading="lazy"
                        src={`${import.meta.env.VITE_SWIGGY_CLOUDINARY_API}/${
                          item.imageId
                        }`}
                      />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
