import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import RESTAURANTS from "./restaurants";
import LOCATIONS from "./locations";
import ADDRESS from "./address";
import UPDATE from "./update";
import PRESEARCH from "./preSearch";
import SEARCHRESTAURANTS from "./searchRestaurants";
import SINGLERESTAURANT from "./singleRestaurant";
import CART from "./cart";
import SEARCHEDRESTAURANT from "./searchedRestaurant";
import SIGNUP from "./signup";
import OTP from "./otp";

const ConfigStore = () => {
  const store = createStore(
    combineReducers({
      restaurants: RESTAURANTS,
      locations: LOCATIONS,
      address: ADDRESS,
      update: UPDATE,
      preSearch: PRESEARCH,
      searchRestaurants: SEARCHRESTAURANTS,
      singleRestaurants: SINGLERESTAURANT,
      cart: CART,
      searchedRestaurants: SEARCHEDRESTAURANT,
      signup: SIGNUP,
      otp: OTP,
    }),
    applyMiddleware(thunk, logger)
  );

  return store;
};

export default ConfigStore;
