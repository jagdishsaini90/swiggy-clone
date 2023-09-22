import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: JSON.parse(localStorage.getItem("user_data")) || {},
};

function LOGIN(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_LOGIN:
      return { ...state, isLoading: true, data: {}, error: null };
    case ActionTypes.ADD_LOGIN:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.ERROR_LOGIN:
      return { ...state, isLoading: false, data: {}, error: action.payload };
    default:
      return state;
  }
}

export default LOGIN;
