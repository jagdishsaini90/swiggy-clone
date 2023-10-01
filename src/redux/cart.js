import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function CART(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      return {
        ...state,
        isLoading: false,
        data: [],
        error: null,
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        isLoading: false,
        error: null,
        data: [],
      };
    case ActionTypes.LOADING_CART:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.ERROR_CART:
      return { ...state, isLoading: false, data: [], error: action.payload };
    case ActionTypes.CART_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    default:
      return state;
  }
}

export default CART;
