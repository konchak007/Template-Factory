import * as types from "./types";
import { fetchOrganisationsByQueryService, fetchOrganisationByNameService } from "../../services/organisations";

export const setData = organistaionsData => ({
  type: types.SET_DATA,
  payload: organistaionsData
});

export const fetchDataByQuery = query => async dispatch => {
  const organisations = await fetchOrganisationsByQueryService(query);

  dispatch(setData(organisations));
};

export const setCurrentOrganisation = organistaion => ({
  type: types.SET_CURRENT_ORGANISATION,
  payload: organistaion
});

export const removeCurrentOrganisation = () => ({
  type: types.REMOVE_CURRENT_ORGAISATION
});

export const setLoadingStatus = status => ({
  type: types.SET_LOADING_STATUS,
  payload: status
});

export const fetchOrganisationByName = name => async dispatch => {
  dispatch(setLoadingStatus(true));

  const organisation = await fetchOrganisationByNameService(name)

  dispatch(setCurrentOrganisation(organisation));
  dispatch(setLoadingStatus(false));
}
