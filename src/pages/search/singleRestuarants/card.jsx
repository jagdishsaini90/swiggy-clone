import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Card = ({ data = {} }) => {
  return (
    <div>
      <div
        className="styles_container__zEwGm"
        data-testid="search-pl-restaurant-card"
      >
        <div className="styles_restaurantListItem__1lOsF">
          <a
            data-testid="resturant-card-anchor-container"
            className="styles_container__fLC0R"
            href="/restaurants/nandhana-palace-koramangala-koramangala-4-b-block-bangalore-18973"
            role="button"
          >
            <div className="styles_imgContainer__1uHo5" aria-hidden="true">
              <div
                className="styles_ImageContainer__2rk9a"
                data-testid="resturant-card-image-container"
                style={{ background: "rgb(229, 241, 211)" }}
              >
                <img
                  alt=""
                  className="styles_Image__1fplJ"
                  loading="lazy"
                  data-testid="resturant-card-image"
                  src={
                    import.meta.env.VITE_SWIGGY_CLOUDINARY_API +
                    `/${data.cloudinaryImageId}`
                  }
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="styles_containerRestaurant__3vhx3"
            >
              <div className="styles_containerImageBadge__14fk3">
                <div
                  data-testid="resturant-card-name"
                  className="styles_restaurantName__29jAP"
                >
                  {data.name}
                </div>
              </div>
              <div
                className="styles_restaurantMeta__2QtMf"
                data-testid="restaurant-card-meta-block"
              >
                <div data-testid="restaurant-card-rating">
                  <span
                    className="styles_restaurantMetaRating__4H1gt"
                    data-testid="restaurant-meta-rating"
                  >
                    <FontAwesomeIcon icon={faStar} />
                  </span>
                  {data.avgRating}
                </div>
                <span
                  className="styles_restaurantMetaDot__1AKA9"
                  data-testid="restaurant-meta-dot-one"
                ></span>
                <div data-testid="restaurant-card-time">
                  {data.sla?.deliveryTime} MINS
                </div>
                <span
                  className="styles_restaurantMetaDot__1AKA9"
                  data-testid="restaurant-meta-dot-two"
                ></span>
                <div
                  style={{ textTransform: "uppercase" }}
                  data-testid="restaurant-card-cost"
                >
                  {data.costForTwo}
                </div>
              </div>
              <div className="styles_restaurantCuisines__3lBL4">
                <span data-testid="restaurant-card-cuisines">
                  {data.cuisines?.join(", ")}
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
