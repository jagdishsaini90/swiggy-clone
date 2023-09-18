import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function SEARCHEDRESTAURANT(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_SEARCH_RESTAURANT:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.ADD_SEARCH_RESTAURANT:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.ERROR_SEARCH_RESTAURANT:
      return { ...state, isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

export default SEARCHEDRESTAURANT;
