import { combineReducers } from "redux";
import { loginReducer } from "./authReducers";
import { getBalanceReducer } from "./balanceReducers";
import { getTransactionHistoryReducer } from "./transactionReducers";
import { topupReducer } from "./topupReducers";
import {
  getProfileReducer,
  updateProfilePictureReducer,
  updateProfileReducer,
} from "./userReducers";

const reducer = combineReducers({
  login: loginReducer,
  profile: getProfileReducer,
  profileUpdate: updateProfileReducer,
  pictureUpdate: updateProfilePictureReducer,
  balance: getBalanceReducer,
  transaction: getTransactionHistoryReducer,
  topup: topupReducer,
});
export default reducer;
