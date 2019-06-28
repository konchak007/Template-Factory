import * as types from "../actions/users/types";

const initialState = {
  data: null,
  loadingStatus: false
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        data: action.payload
      };
    case types.SET_LOADING_STATUS:
      return {
        ...state,
        loadingStatus: action.payload
      };
    default:
      return state;
  }
};

export default UserReducer;
