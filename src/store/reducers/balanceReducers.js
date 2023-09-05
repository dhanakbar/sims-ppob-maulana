import {
  BALANCE_FAIL,
  BALANCE_LOADING,
  BALANCE_SUCCESS,
  CLEAR_ERRORS,
} from "../constans/balanceConstans";

export const getBalanceReducer = (
  state = {
    balance: {},
    isSuccessBalance: false,
    isLoadingBalance: false,
    isFailBalance: false,
  },
  action
) => {
  switch (action.type) {
    case BALANCE_SUCCESS:
      return {
        balance: action.payload,
        isSuccessBalance: true,
        isLoadingBalance: false,
        isFailBalance: false,
      };
    case BALANCE_LOADING:
      return {
        isSuccessBalance: false,
        isLoadingBalance: true,
        isFailBalance: false,
      };
    case BALANCE_FAIL:
      return {
        balance: action.payload,
        isSuccessBalance: false,
        isLoadingBalance: false,
        isFailBalance: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        login: null,
        isSuccessBalance: false,
        isLoadingBalance: false,
        isFailBalance: false,
      };
    default:
      return state;
  }
};
