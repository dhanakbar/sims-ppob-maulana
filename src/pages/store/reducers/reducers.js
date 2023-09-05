import { combineReducers } from "redux";
import { loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
const reducer = combineReducers({
  login: loginReducer,
  balance: getBalanceReducer,
});
export default reducer;
