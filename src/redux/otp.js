import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: {},
};

function OTP(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.LOADING_OTP:
      return { ...state, isLoading: true, data: {}, error: null };
    case ActionTypes.ADD_OTP:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.ERROR_OTP:
      return { ...state, isLoading: false, data: {}, error: action.payload };
    default:
      return state;
  }
}

export default OTP;
