import { combineReducers } from 'redux';

import OrganisationsReducer from './organisations';

const RootReducer = combineReducers({
  organisations: OrganisationsReducer
});

export default RootReducer;

