import * as types from "./types";
import { fetchOrganisationsByQueryService } from "../../services/organisations";

export const setData = organistaionsData => ({
  type: types.SET_DATA,
  payload: organistaionsData
});

export const fetchDataByQuery = query => async dispatch => {
  const organisations = await fetchOrganisationsByQueryService(query);

  dispatch(setData(organisations));
};
