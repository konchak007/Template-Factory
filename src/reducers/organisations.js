import * as types from "../actions/organisations/types";

const initialState = {
  data: [],
  currentOrganisation: {
    data: null,
    isLoading: false
  }
};

const OrganisationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DATA:
      return {
        ...state,
        data: action.payload
      };
    case types.SET_CURRENT_ORGANISATION:
      return {
        ...state,
        currentOrganisation: {
          data: action.payload,
          isLoading: false
        }
      };
    case types.REMOVE_CURRENT_ORGAISATION:
      return {
        ...state,
        currentOrganisation: {
          ...initialState.currentOrganisation
        }
      };
    case types.SET_LOADING_STATUS:
      return {
        ...state,
        currentOrganisation: {
          ...state.currentOrganisation,
          isLoading: action.payload
        }
      };
  }
  return state;
};

export default OrganisationsReducer;
