import { createStore, applyMiddleware } from 'redux';
import Logger from 'redux-logger';
 import RootReducer from './reducers';

const store = createStore(RootReducer, applyMiddleware(Logger));

export default store;

