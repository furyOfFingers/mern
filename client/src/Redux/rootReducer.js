import { combineReducers } from "redux";
import token from "./token";
import notification from "./notification";

const rootReducer = combineReducers({
  token,
  notification,
});

export default rootReducer;
