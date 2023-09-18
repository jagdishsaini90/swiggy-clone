import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: {
    data: [],
    query: "",
  },
};

function SEARCHRESTAURANTS(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.SEARCHRESTAURANTS_LOADING:
      return {
        ...state,
        isLoading: true,
        data: {
          data: [],
          query: "",
        },
        error: null,
      };
    case ActionTypes.SEARCHRESTAURANTS_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.SEARCHRESTAURANTS_ERROR:
      return {
        ...state,
        isLoading: false,
        data: {
          data: [],
          query: "",
        },
        error: action.payload,
      };
    default:
      return state;
  }
}

export default SEARCHRESTAURANTS;
