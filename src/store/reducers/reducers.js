import { combineReducers } from "redux";
import { loginReducer, registerReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
import {
  getTransactionHistoryReducer,
  payTransactionReducer,
} from "./transactionReducers";
import { topupReducer } from "./topupReducers";
import {
  getProfileReducer,
  updateProfilePictureReducer,
  updateProfileReducer,
} from "./userReducers";

const reducer = combineReducers({
  login: loginReducer,
  registerUser: registerReducer,
  profile: getProfileReducer,
  profileUpdate: updateProfileReducer,
  pictureUpdate: updateProfilePictureReducer,
  balance: getBalanceReducer,
  transaction: getTransactionHistoryReducer,
  payTransaction: payTransactionReducer,
  topup: topupReducer,
});
export default reducer;
