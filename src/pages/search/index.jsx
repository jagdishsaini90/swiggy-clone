import { useEffect, useRef, useState } from "react";
import Input from "./input";
import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSearchRestaunrants,
  fetchrPreSearch,
} from "../../redux/action-creators";
import Popular from "./popular";
import Shimmer from "./shimmer";
import SearchResult from "./searchResult";
import { debounce } from "lodash-es";
import SingleRestuarants from "./singleRestuarants";

const Search = () => {
  const [search, setSearch] = useState("");
  const [showSingleRest, setShowSingleRest] = useState({
    show: false,
    name: "",
  });
  const dispatch = useDispatch();
  const searchRestaurantsSelector = useSelector(
    (state) => state.searchRestaurants
  );
  const preSearchSelector = useSelector((state) => state.preSearch);
  const address = JSON.parse(localStorage.getItem("user_address"));
  const { lat, lng } = address.geometry.location;

  if (!address) {
    return (window.location.replace = "/locate");
  }

  useEffect(() => {
    console.log();
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });

    dispatch(fetchrPreSearch({ lat, lng }));
  }, []);

  const setServicesValueDebounced = useRef(
    debounce((value) => {
      const { lat, lng } = address.geometry.location;
      dispatch(fetchSearchRestaunrants({ lat, lng, str: value }));
    }, 300)
  );

  useEffect(() => {
    setServicesValueDebounced.current(search);
  }, [search]);

  return (
    <div>
      <Input
        setShowSingleRest={setShowSingleRest}
        search={search}
        setSearch={setSearch}
        showSingleRest={showSingleRest}
      />
      {showSingleRest.show ? (
        <SingleRestuarants lat={lat} lng={lng} name={showSingleRest.name} />
      ) : searchRestaurantsSelector.data.data?.length === 0 && !search ? (
        preSearchSelector.isLoading ? (
          <Shimmer />
        ) : (
          <Popular data={preSearchSelector.data} />
        )
      ) : (
        <SearchResult
          isLoading={searchRestaurantsSelector.isLoading}
          data={searchRestaurantsSelector.data.data}
          query={searchRestaurantsSelector.data.query}
          setShowSingleRest={setShowSingleRest}
        />
      )}
    </div>
  );
};

export default Search;
