import * as types from "../actions/organisations/types";

const initialState = {
  data: []
};

const OrganisationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
  }
  return state;
};

export default OrganisationsReducer;
