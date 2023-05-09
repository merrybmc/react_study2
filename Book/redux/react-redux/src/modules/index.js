import { combineReducers } from "redux";
import counter from "./counter";
import todos from "./todos";

// 기존에 만들었던 리듀서를 하나로 합쳐주어야함.
const rootReducer = combineReducers({
  counter,
  todos,
});

export default rootReducer;
