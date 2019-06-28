import { createStore, applyMiddleware } from "redux";
import Logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "./reducers";

const store = createStore(RootReducer, applyMiddleware(Logger, thunk));

export default store;
