import { APPWRITE_ACCOUNT, APPWRITE_ID } from "../appwrite";
import * as ActionTypes from "./action-types";
import axios from "axios";

export const restaurantsLoading = () => ({
  type: ActionTypes.RESTAURANTS_LOADING,
});
export const restaurantsData = (payload) => ({
  type: ActionTypes.RESTAURANTS_DATA,
  payload,
});
export const restaurantsError = (payload) => ({
  type: ActionTypes.RESTAURANTS_ERROR,
  payload,
});

export const fetchRestaurants = (queryString) => (dispatch) => {
  dispatch(restaurantsLoading());

  let url = `${import.meta.env.VITE_LOCALHOST_API_END_POINT}/api/restaurants?`;

  Object.keys(queryString).map((key, index) => {
    url += `${key}=${queryString[key]}`;
    if (index < Object.keys(queryString).length - 1) {
      url += "&";
    }
  });

  return axios
    .get(url)
    .then((response) => {
      localStorage.setItem(
        "pageOffset",
        JSON.stringify(response.data.data.pageOffset)
      );
      dispatch(restaurantsData(response.data.data.cards));
    })
    .catch((error) => {
      dispatch(restaurantsError(error.message));
    });
};

export const locationsLoading = () => ({
  type: ActionTypes.LOCATIONS_LOADING,
});
export const locationsData = (payload) => ({
  type: ActionTypes.LOCATIONS_DATA,
  payload,
});
export const locationsError = (payload) => ({
  type: ActionTypes.LOCATIONS_ERROR,
  payload,
});

export const fetchLocation = (data) => (dispatch) => {
  dispatch(locationsLoading());
  return axios
    .get(
      `${
        import.meta.env.VITE_LOCALHOST_API_END_POINT
      }/api/search?search=${data}`
    )
    .then((response) => {
      dispatch(locationsData(response.data.data));
    })
    .catch((error) => {
      dispatch(locationsError(error.message));
    });
};

export const addressLoading = () => ({
  type: ActionTypes.ADDRESS_LOADING,
});
export const addressData = (payload) => ({
  type: ActionTypes.ADDRESS_DATA,
  payload,
});
export const addressError = (payload) => ({
  type: ActionTypes.ADDRESS_ERROR,
  payload,
});

export const fetchAddress = (data) => (dispatch) => {
  const { place_id, lat, lng } = data;
  const urlQuery = place_id ? `place_id=${place_id}` : `latlng=${lat}%2C${lng}`;

  dispatch(addressLoading());

  return axios
    .get(
      `${import.meta.env.VITE_LOCALHOST_API_END_POINT}/api/address?${urlQuery}`
    )
    .then((response) => {
      localStorage.setItem(
        "csrfToken",
        JSON.stringify(response.data.csrfToken)
      );
      dispatch(addressData(response.data.data));
    })
    .catch((error) => {
      dispatch(addressError(error.message));
    });
};

export const updateLoading = () => ({
  type: ActionTypes.UPDATE_LOADING,
});
export const updateData = (payload) => ({
  type: ActionTypes.UPDATE_DATA,
  payload,
});
export const updateError = (payload) => ({
  type: ActionTypes.UPDATE_ERROR,
  payload,
});

export const fetchUpdate = (data) => (dispatch) => {
  dispatch(updateLoading());

  return axios
    .post(`${import.meta.env.VITE_LOCALHOST_API_END_POINT}/api/update`, {
      data,
    })
    .then((response) => {
      dispatch(updateData(response.data.data));
    })
    .catch((error) => {
      dispatch(updateError(error.message));
    });
};

export const preSearchLoading = () => ({
  type: ActionTypes.PRE_SEARCH_LOADING,
});
export const preSearchData = (payload) => ({
  type: ActionTypes.PRE_SEARCH_DATA,
  payload,
});
export const preSearchError = (payload) => ({
  type: ActionTypes.PRE_SEARCH_ERROR,
  payload,
});

export const fetchrPreSearch = (data) => (dispatch) => {
  dispatch(preSearchLoading());

  return axios
    .get(
      `${import.meta.env.VITE_LOCALHOST_API_END_POINT}/api/pre_search?lat=${
        data.lat
      }&lng=${data.lng}`
    )
    .then((response) => {
      dispatch(preSearchData(response.data.data.cards));
    })
    .catch((error) => {
      dispatch(preSearchError(error.message));
    });
};

export const searchRestaurantsLoading = () => ({
  type: ActionTypes.SEARCHRESTAURANTS_LOADING,
});
export const searchRestaurantsData = (payload) => ({
  type: ActionTypes.SEARCHRESTAURANTS_DATA,
  payload,
});
export const searchRestaurantsError = (payload) => ({
  type: ActionTypes.SEARCHRESTAURANTS_ERROR,
  payload,
});

export const fetchSearchRestaunrants = (data) => (dispatch) => {
  dispatch(searchRestaurantsLoading());

  return axios
    .get(
      `${
        import.meta.env.VITE_LOCALHOST_API_END_POINT
      }/api/search_restaurants?lat=${data.lat}&lng=${data.lng}&str=${data.str}`
    )
    .then((response) => {
      dispatch(
        searchRestaurantsData({
          data: response.data.data.suggestions,
          query: response.data.data.query,
        })
      );
    })
    .catch((error) => {
      dispatch(searchRestaurantsError(error.message));
    });
};

export const singleRestaurantLoading = () => ({
  type: ActionTypes.SINGLE_RESTAURANTS_LOADING,
});
export const singleRestaurantData = (payload) => ({
  type: ActionTypes.SINGLE_RESTAURANTS_DATA,
  payload,
});
export const singleRestaurantError = (payload) => ({
  type: ActionTypes.SINGLE_RESTAURANTS_ERROR,
  payload,
});

export const fetchSingleRestaunrant = (data) => (dispatch) => {
  dispatch(singleRestaurantLoading());

  return axios
    .get(
      `${
        import.meta.env.VITE_LOCALHOST_API_END_POINT
      }/api/single_restaurant?lat=${data.lat}&lng=${data.lng}&str=${data.str}`
    )
    .then((response) => {
      dispatch(singleRestaurantData(response.data.data.cards));
    })
    .catch((error) => {
      dispatch(singleRestaurantError(error.message));
    });
};

export const searchedRestaurantLoading = () => ({
  type: ActionTypes.LOADING_SEARCH_RESTAURANT,
});
export const addSearchedRestaurantData = (payload) => ({
  type: ActionTypes.ADD_SEARCH_RESTAURANT,
  payload,
});
export const searchedRestaurantError = (payload) => ({
  type: ActionTypes.ERROR_SEARCH_RESTAURANT,
  payload,
});

export const fetchSearchedRestaunrant = (data) => (dispatch) => {
  dispatch(searchedRestaurantLoading());
  const { lat, lng, restaurantId, query } = data;

  return axios
    .get(
      `${
        import.meta.env.VITE_LOCALHOST_API_END_POINT
      }/api/searched_restaurant?lat=${lat}&lng=${lng}&restaurantId=${restaurantId}&query=${query}`
    )
    .then((response) => {
      dispatch(addSearchedRestaurantData(response.data.data.cards));
    })
    .catch((error) => {
      dispatch(searchedRestaurantError(error.message));
    });
};

export const addToCart = (payload) => ({
  type: ActionTypes.ADD_TO_CART,
  payload,
});

export const addItemToCart = (data) => (dispatch) => {
  return dispatch(addToCart(data));
};

// Authentication

// SIGNUP
export const signupLoading = () => ({
  type: ActionTypes.LOADING_SIGNUP,
});
export const signupData = (payload) => ({
  type: ActionTypes.ADD_SIGNUP,
  payload,
});
export const signupError = (payload) => ({
  type: ActionTypes.ERROR_SIGNUP,
  payload,
});

export const signupHelper = (data) => (dispatch) => {
  dispatch(signupLoading());

  const { email, name, number, updatedUser } = data;

  return axios
    .post(`${import.meta.env.VITE_LOCALHOST_API_END_POINT}/api/create_user`, {
      name,
      email,
      phone: number,
      updatedUser,
    })
    .then((data) => dispatch(signupData(data.data.user)))
    .catch((error) => dispatch(signupError(error.message)));
};

// OTP
export const otpLoading = () => ({
  type: ActionTypes.LOADING_OTP,
});
export const otpData = (payload) => ({
  type: ActionTypes.ADD_OTP,
  payload,
});
export const otpError = (payload) => ({
  type: ActionTypes.ERROR_OTP,
  payload,
});

export const sendOTP = (data) => (dispatch) => {
  dispatch(otpLoading());
  const { number } = data;

  return APPWRITE_ACCOUNT.createPhoneSession(
    APPWRITE_ID.unique(),
    `+91${number}`
  )
    .then((response) => dispatch(otpData({ ...response, otpSent: true })))
    .catch((error) => dispatch(otpError(error.message)));
};

export const verifyOTP = (data) => (dispatch) => {
  dispatch(signupLoading());
  const { otp, userId, email, name, number } = data;

  return APPWRITE_ACCOUNT.updatePhoneSession(userId, otp)
    .then((updatedUser) => {
      dispatch(sendOTP({}));
      dispatch(signupHelper({ updatedUser, email, name, number }));
    })
    .catch((error) => dispatch(otpError(error.message)));
};
