import { toast } from "react-toastify";
import { APPWRITE_ACCOUNT, APPWRITE_ID } from "../appwrite";
import * as ActionTypes from "./action-types";
import axios from "axios";

const toastCommonProps = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
};

const { VITE_LOCALHOST_API_END_POINT } = import.meta.env;

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

  let url = `${VITE_LOCALHOST_API_END_POINT}/api/restaurants?`;

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
    .get(`${VITE_LOCALHOST_API_END_POINT}/api/search?search=${data}`)
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
    .get(`${VITE_LOCALHOST_API_END_POINT}/api/address?${urlQuery}`)
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
    .post(`${VITE_LOCALHOST_API_END_POINT}/api/update`, {
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
      `${VITE_LOCALHOST_API_END_POINT}/api/pre_search?lat=${data.lat}&lng=${data.lng}`
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
      `${VITE_LOCALHOST_API_END_POINT}/api/search_restaurants?lat=${data.lat}&lng=${data.lng}&str=${data.str}`
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
      `${VITE_LOCALHOST_API_END_POINT}/api/single_restaurant?lat=${data.lat}&lng=${data.lng}&str=${data.str}`
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
      `${VITE_LOCALHOST_API_END_POINT}/api/searched_restaurant?lat=${lat}&lng=${lng}&restaurantId=${restaurantId.slice(
        4
      )}&query=${query}`
    )
    .then((response) => {
      console.log(response.data.data.cards);

      dispatch(addSearchedRestaurantData(response.data.data.cards));
    })
    .catch((error) => {
      dispatch(searchedRestaurantError(error.message));
    });
};

export const addToCart = () => ({
  type: ActionTypes.ADD_TO_CART,
});

export const cartLoading = () => ({
  type: ActionTypes.LOADING_CART,
});

export const cartError = (payload) => ({
  type: ActionTypes.ERROR_CART,
  payload,
});
export const cartData = (payload) => ({
  type: ActionTypes.CART_DATA,
  payload,
});

export const removeFromCart = () => ({
  type: ActionTypes.REMOVE_FROM_CART,
});

export const fetchCart = () => (dispatch) => {
  dispatch(cartLoading());
  const user = JSON.parse(localStorage.getItem("user_data"));

  return axios
    .get(
      `${VITE_LOCALHOST_API_END_POINT}/api/getcart?database=${user?.database}`
    )
    .then((data) => dispatch(cartData(data.data.cart)))
    .catch((error) => {
      dispatch(cartError(error?.response?.data?.message));
      toast.error(error?.response?.data?.message, toastCommonProps);
    });
};

export const addItemToCart = (data) => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return axios
    .post(`${VITE_LOCALHOST_API_END_POINT}/api/addToCart`, {
      number: user?.phone,
      cart: data,
      database: user?.database,
      userId: user?.userId,
    })
    .then(() => {
      dispatch(fetchCart());
      toast.success("successfully added to cart!", toastCommonProps);
    })
    .catch((error) => {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message, toastCommonProps);
    });
};

export const removeItemFromCart = (id) => (dispatch) => {
  const user = JSON.parse(localStorage.getItem("user_data"));

  return axios
    .post(`${VITE_LOCALHOST_API_END_POINT}/api/removeCart`, {
      number: user?.phone,
      id,
      database: user?.database,
    })
    .then(() => {
      dispatch(fetchCart());
      toast.success("successfully removed from cart!", toastCommonProps);
    })
    .catch((error) => {
      console.log(error?.response?.data?.message);
      toast.error(error?.response?.data?.message, toastCommonProps);
    });
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

export const signupHelper = (data) => async (dispatch) => {
  const { email, name, number, updatedUser } = data;

  return await axios
    .post(`${VITE_LOCALHOST_API_END_POINT}/api/create_user`, {
      name,
      email,
      phone: number,
      updatedUser,
    })
    .then((data) => {
      if (data.data.user.success) {
        localStorage.setItem("user_data", JSON.stringify(data.data.user));
        dispatch(signupData(data.data.user));
      } else {
        dispatch(signupError(data.data.message));
        toast.error(data.data.message, toastCommonProps);
      }
    })
    .catch((error) => {
      dispatch(signupError(error?.response?.data?.message));
      toast.error(error?.response?.data?.message, toastCommonProps);
    });
};

// LOGIN

export const loginLoading = () => ({
  type: ActionTypes.LOADING_LOGIN,
});
export const loginData = (payload) => ({
  type: ActionTypes.ADD_LOGIN,
  payload,
});
export const loginError = (payload) => ({
  type: ActionTypes.ERROR_LOGIN,
  payload,
});

export const loginHelper = (data) => (dispatch) => {
  const { number, updatedUser } = data;

  return axios
    .post(`${VITE_LOCALHOST_API_END_POINT}/api/login`, {
      phone: number,
      updatedUser,
    })
    .then((data) => {
      if (data.data.user) {
        localStorage.setItem("user_data", JSON.stringify(data.data.user));
        dispatch(loginData(data.data.user));
      } else {
        dispatch(loginError(data.data.message));
        toast.error(data.data.message, toastCommonProps);
      }
    })
    .catch((error) => {
      dispatch(loginError(error?.response?.data?.message));
      toast.error(error?.response?.data?.message, toastCommonProps);
    });
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
    .then((response) => {
      dispatch(otpData({ ...response, otpSent: true }));
      toast.success("otp sent successfully!", toastCommonProps);
    })
    .catch((error) => {
      dispatch(otpError(error.message));
      toast.error(error.message, toastCommonProps);
    });
};

export const verifyOTP = (data) => (dispatch) => {
  const { otp, userId, email, name, number, authType } = data;
  if (authType === "signup") {
    dispatch(signupLoading());
  } else {
    dispatch(loginLoading());
  }

  return APPWRITE_ACCOUNT.updatePhoneSession(userId, otp)
    .then((updatedUser) => {
      if (authType === "signup")
        dispatch(signupHelper({ updatedUser, email, name, number }));
      if (authType === "login") {
        dispatch(loginHelper({ updatedUser, number }));
      }
      dispatch(sendOTP({}));
    })
    .catch((error) => {
      dispatch(otpError(error.message));
      toast.error(error.message, toastCommonProps);
    });
};
