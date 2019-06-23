import * as types from "../actions/users/types";

const initialState = {
 data: null
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_USER:
      return {
        ...state,
        data: action.payload
      };
  }
  return state;
};

export default UserReducer;
