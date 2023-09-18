import { useState } from "react";
import swiggyFull from "../../assets/swiggyFull.svg";
import "./locate.scss";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationCrosshairs,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner";
import AuthPageSidebar from "../auth";
import { useNavigate } from "react-router-dom";
import { fetchAddress, fetchLocation } from "../../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";

function Locate() {
  const [headingText, setHeadingText] = useState("Movie marathon?");
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const [enable, setEnable] = useState(false);
  const [viewPage, setViewPage] = useState("");
  const [error, setError] = useState({
    state: null,
    message: "",
    loading: "",
  });
  const headingRef = useRef();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const locationSelector = useSelector((state) => state.locations);
  const addressSelector = useSelector((state) => state.address);

  const address = JSON.parse(localStorage.getItem("user_address"));

  if (address) {
    navigate("/");
  }

  useEffect(() => {
    const textList = [
      "Movie marathon?",
      "Unexpected guests?",
      "Late night at office?",
      "Game night?",
      "Hungry?",
      "Cooking gone wrong?",
    ];

    const interval = setInterval(() => {
      let index = textList.indexOf(headingText);
      index = index + 1 >= textList.length ? 0 : index + 1;
      setHeadingText(() => textList[index]);
      headingRef.current.style.animationName = "downliftText";
    }, 4000);

    const interval2 = setInterval(() => {
      headingRef.current.style.animationName = "upliftText";
    }, 3900);

    return () => {
      clearInterval(interval);
      clearInterval(interval2);
    };
  }, [headingText]);

  function loadAddress(lng, lat, place_id) {
    if (place_id) {
      dispatch(fetchAddress({ place_id }));
    } else {
      dispatch(fetchAddress({ lat, lng }));
    }
  }

  useEffect(() => {
    if (addressSelector.data.length > 0) {
      localStorage.setItem(
        "user_address",
        JSON.stringify(addressSelector.data[0])
      );
      navigate("/");
    }
  }, [addressSelector]);

  function getLocation() {
    setError({ state: null, message: "" });
    Promise.resolve().then(() => {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          loadAddress(position.coords.longitude, position.coords.latitude);
        },
        () => {
          setError({
            state: true,
            message:
              "You have blocked Swiggy from tracking your location. To use this, change your location settings in browser.",
          });
        }
      );
    });
  }

  useEffect(() => {
    if (search) {
      dispatch(fetchLocation(search));
    }
  }, [search]);

  return (
    <>
      <div className="locate-container">
        <div className="left">
          <div className="left-auth">
            <img src={swiggyFull} alt="swiggy" width="auto" height="55" />
            <div>
              <button
                onClick={() => {
                  setEnable(true);
                  setViewPage("login");
                }}
                className="button"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setEnable(true);
                  setViewPage("signup");
                }}
                className="button signup"
              >
                Sign up
              </button>
            </div>
          </div>
          <div className="search-heading">
            <h1 ref={headingRef} className="heading">
              {headingText}
            </h1>
            <h2 className="sub-heading">
              Order food from favourite restaurants near you.
            </h2>
          </div>
          <div className="search">
            <input
              className="input"
              type="text"
              value={search}
              name="location"
              id="location"
              autoComplete="off"
              tabIndex="1"
              placeholder="Enter your delivery location"
              maxLength="30"
              onChange={(e) => setSearch(e.target.value)}
            />
            {error.state || addressSelector.error ? (
              <div className="error-message">
                {error.message || addressSelector.error}
              </div>
            ) : null}
            {searchList.length > 0 ? (
              <p
                onClick={() => {
                  setSearch("");
                  setSearchList([]);
                }}
                className="clear-button"
              >
                Clear
              </p>
            ) : (
              <button onClick={getLocation} className="locate-button">
                <FontAwesomeIcon icon={faLocationCrosshairs} />
                <span className="locate-me">Locate Me</span>
              </button>
            )}
            <button className="button search-button">
              {addressSelector.isLoading ? (
                <div className="locate-spinner">
                  <Spinner />
                </div>
              ) : (
                "FIND FOOD"
              )}
            </button>
            <div className="search-results">
              <ul>
                {locationSelector.data.map((result) => {
                  return (
                    <li
                      onClick={() => loadAddress(null, null, result.place_id)}
                      key={result}
                    >
                      <FontAwesomeIcon
                        className="search-results-location"
                        icon={faLocationDot}
                      />
                      <span>{result.description}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <h3 className="_1nQLS">POPULAR CITIES IN INDIA</h3>
          <ul className="_3TE0x">
            <li className="_1jdR4">
              <a href="/city/ahmedabad" className="_3zoZ8">
                Ahmedabad
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/bangalore" className="_3zoZ8">
                Bangalore
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/chennai" className="_3zoZ8">
                Chennai
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/delhi" className="_3zoZ8">
                Delhi
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/gurgaon" className="_3zoZ8">
                Gurgaon
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/hyderabad" className="_3zoZ8">
                Hyderabad
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/kolkata" className="_3zoZ8">
                Kolkata
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/mumbai" className="_3zoZ8">
                Mumbai
              </a>
            </li>
            <li className="_1jdR4">
              <a href="/city/pune" className="_3zoZ8">
                Pune
              </a>
            </li>
            <li className="_1jdR4">
              <a href="#city-links" className="_3zoZ8">
                &amp; more.
              </a>
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
      <AuthPageSidebar
        viewPage={viewPage}
        setViewPage={setViewPage}
        enable={enable}
        setEnable={setEnable}
      />

      <div className="_2tnu- ">
        <div className="_2RZDN">
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="105"
                height="199"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_210,h_398/4x_-_No_min_order_x0bxuf"
              />
            </div>
            <div className="_3fted">No Minimum Order</div>
            <div className="_12i5X">
              Order in for yourself or for the group, with no restrictions on
              order value
            </div>
          </div>
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="112"
                height="206"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_224,h_412/4x_Live_order_zzotwy"
              />
            </div>
            <div className="_3fted">Live Order Tracking</div>
            <div className="_12i5X">
              Know where your order is at all times, from the restaurant to your
              doorstep
            </div>
          </div>
          <div className="_2Zn3W">
            <div className="_1Vw_y">
              <img
                className="_2dYjq"
                width="124"
                height="188"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_248,h_376/4x_-_Super_fast_delivery_awv7sn"
              />
            </div>
            <div className="_3fted">Lightning-Fast Delivery</div>
            <div className="_12i5X">
              Experience {"Swiggy's"} superfast delivery for food delivered
              fresh &amp; on time
            </div>
          </div>
        </div>
      </div>

      <div className="_3tAmb">
        <div className="_2ZpEk">
          <div className="_221uw">Restaurants in your pocket</div>
          <div className="_1C4_O">
            Order from your favorite restaurants &amp; track on the go, with the
            all-new Swiggy app.
          </div>
          <div>
            <a
              style={{ marginRight: "20px" }}
              href="https://play.google.com/store/apps/details?id=in.swiggy.android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="_12dJy"
                height="54"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
              />
            </a>
            <a
              href="https://itunes.apple.com/in/app/swiggy-food-order-delivery/id989540920"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="_37Cft"
                height="54"
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
              />
            </a>
          </div>
          <img
            className="_3QGpR"
            width="384"
            height="489"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
          />
          <img
            className="_2SJnz"
            width="384"
            height="489"
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
          />
        </div>
      </div>
    </>
  );
}

export default Locate;
