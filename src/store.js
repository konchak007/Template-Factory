import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import RootReducer from "./reducers";
import thunk from "redux-thunk";

const store = createStore(RootReducer, applyMiddleware(Logger, thunk));

export default store;
