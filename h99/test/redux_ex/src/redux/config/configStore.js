import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";

const rootReducer = combineReducers({
  Counter: counter,
});

const store = createStore(rootReducer);

export default store;
