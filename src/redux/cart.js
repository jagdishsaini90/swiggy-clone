import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function CART(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_TO_CART:
      let filteredValues = state.data.filter(
        (item) => item.name !== action.payload.name
      );
      return {
        ...state,
        isLoading: true,
        data: [...filteredValues, action.payload],
        error: null,
      };
    default:
      return state;
  }
}

export default CART;
