import { combineReducers } from "redux";
import { getProfileReducer, loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
import { getTransactionHistoryReducer } from "./transactionReducers";
import { topupReducer } from "./topupReducers";
const reducer = combineReducers({
  login: loginReducer,
  profile: getProfileReducer,
  balance: getBalanceReducer,
  transaction: getTransactionHistoryReducer,
  topup: topupReducer,
});
export default reducer;
