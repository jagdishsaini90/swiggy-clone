import { useState, useDeferredValue, Suspense } from "react";
import swiggyFull from "../../assets/swiggyFull.svg";
import { useEffect } from "react";
import { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationCrosshairs } from "@fortawesome/free-solid-svg-icons";
import Spinner from "../../components/spinner";
import { fetchAddress, fetchLocation } from "../../redux/action-creators";
import { useDispatch, useSelector } from "react-redux";
import SearchList from "./searchList";
import Download from "./download";
import Auth from "./auth";
import "./locate.scss";

const CITIES_LIST = [
  "Ahmedabad",
  "Bangalore",
  "Chennai",
  "Delhi",
  "Gurgaon",
  "Hyderabad",
  "Kolkata",
  "Mumbai",
  "Pune",
];

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
  const dispatch = useDispatch();
  const locationSelector = useSelector((state) => state.locations);
  const addressSelector = useSelector((state) => state.address);

  const address = JSON.parse(localStorage.getItem("user_address"));
  const deferredValue = useDeferredValue(searchList);

  if (address) {
    window.location.href = "/";
    return;
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
      window.location.href = "/";
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
    // if (search) {
    dispatch(fetchLocation(search));
    // }
  }, [search]);

  useEffect(() => {
    if (locationSelector.data?.length > 0) {
      setSearchList(locationSelector.data);
    }
  }, [locationSelector]);

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
            {deferredValue?.length > 0 ? (
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
            <Suspense fallback={<></>}>
              <SearchList
                loadAddress={loadAddress}
                deferredValue={deferredValue}
              />
            </Suspense>
          </div>

          <h3 className="_1nQLS">POPULAR CITIES IN INDIA</h3>
          <ul className="_3TE0x">
            {CITIES_LIST.map((city) => {
              return (
                <li key={city} className="_1jdR4">
                  <a href="/locate" className="_3zoZ8">
                    {city}
                  </a>
                </li>
              );
            })}
            <li key="29389032890" className="_1jdR4">
              <a href="/locate" className="_3zoZ8">
                &amp; more.
              </a>
            </li>
          </ul>
        </div>
        <div className="right"></div>
      </div>
      <Auth
        viewPage={viewPage}
        setViewPage={setViewPage}
        enable={enable}
        setEnable={setEnable}
      />
      <Download />
    </>
  );
}

export default Locate;
