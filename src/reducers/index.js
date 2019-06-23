import { combineReducers } from "redux";

import OrganisationsReducer from "./organisations";
import UserReducer from './user'

const RootReducer = combineReducers({
  organisations: OrganisationsReducer,
  user :  UserReducer
});

export default RootReducer;
