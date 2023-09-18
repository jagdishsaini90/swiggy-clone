import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function PRESEARCH(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.PRE_SEARCH_LOADING:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.PRE_SEARCH_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.PRE_SEARCH_ERROR:
      return { ...state, isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

export default PRESEARCH;
