import * as types from "./types";
import {
  fetchUserService
} from "../../services/user";

export const setUser = user  => ({
  type: types.SET_USER,
  payload: user
});

export const fetchUser = name => async dispatch => {
  const user = await fetchUserService (name);

  dispatch(setUser(user));
};
