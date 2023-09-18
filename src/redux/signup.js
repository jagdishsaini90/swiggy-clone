import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: JSON.parse(localStorage.getItem("user_data")) || {},
};

function SIGNUP(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_SIGNUP:
      return { ...state, isLoading: true, data: {}, error: null };
    case ActionTypes.ADD_SIGNUP:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.ERROR_SIGNUP:
      return { ...state, isLoading: false, data: {}, error: action.payload };
    default:
      return state;
  }
}

export default SIGNUP;
