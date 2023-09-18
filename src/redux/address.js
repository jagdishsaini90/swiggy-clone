import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function ADDRESS(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADDRESS_LOADING:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.ADDRESS_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.ADDRESS_ERROR:
      return { ...state, isLoading: false, data: [], error: action.payload };

    default:
      return state;
  }
}

export default ADDRESS;
