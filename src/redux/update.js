import * as ActionTypes from "./action-types";

const initialState = {
  isLoading: false,
  error: null,
  data: [],
};

function UPDATE(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.UPDATE_LOADING:
      return { ...state, isLoading: true, data: [], error: null };
    case ActionTypes.UPDATE_DATA:
      return { ...state, isLoading: false, data: action.payload, error: null };
    case ActionTypes.UPDATE_ERROR:
      return { ...state, isLoading: false, data: [], error: action.payload };
    default:
      return state;
  }
}

export default UPDATE;
