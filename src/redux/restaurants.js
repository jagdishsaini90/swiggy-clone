import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function RESTAURANTS(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.RESTAURANTS_LOADING:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.RESTAURANTS_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.RESTAURANTS_ERROR:
      return { ...state, isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

export default RESTAURANTS;
