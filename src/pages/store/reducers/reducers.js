import { combineReducers } from "redux";
import { getProfileReducer, loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
const reducer = combineReducers({
  login: loginReducer,
  profile: getProfileReducer,
  balance: getBalanceReducer,
});
export default reducer;
