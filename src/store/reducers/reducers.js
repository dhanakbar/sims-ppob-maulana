import { combineReducers } from "redux";
import { getProfileReducer, loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
import { getTransactionHistoryReducer } from "./transactionReducers";
const reducer = combineReducers({
  login: loginReducer,
  profile: getProfileReducer,
  balance: getBalanceReducer,
  transaction: getTransactionHistoryReducer,
});
export default reducer;
