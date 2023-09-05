import { combineReducers } from "redux";
import { loginReducer } from "./authReducers";
const reducer = combineReducers({
  login: loginReducer,
});
export default reducer;
