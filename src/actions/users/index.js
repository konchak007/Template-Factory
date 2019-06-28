import * as types from "./types";
import { fetchUserService } from "../../services/user";

export const setUser = user => ({
  type: types.SET_USER,
  payload: user
});

export const setLoadingStatus = status => ({
  type: types.SET_LOADING_STATUS,
  payload: status
});

export const fetchUser = name => async dispatch => {
  dispatch(setLoadingStatus(true));

  const user = await fetchUserService(name);
  dispatch(setUser(user));

  dispatch(setLoadingStatus(false));
};
