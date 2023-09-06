import { combineReducers } from "redux";
import { loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
import { getTransactionHistoryReducer } from "./transactionReducers";
import { topupReducer } from "./topupReducers";
import { getProfileReducer, updateProfileReducer } from "./userReducers";

const reducer = combineReducers({
  login: loginReducer,
  profile: getProfileReducer,
  profileUpdate: updateProfileReducer,
  balance: getBalanceReducer,
  transaction: getTransactionHistoryReducer,
  topup: topupReducer,
});
export default reducer;
