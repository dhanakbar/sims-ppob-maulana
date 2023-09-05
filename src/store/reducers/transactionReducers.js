import {
  CLEAR_ERRORS,
  TRANSACTION_FAIL,
  TRANSACTION_LOADING,
  TRANSACTION_SUCCESS,
} from "../constans/transactionConstans";

export const getTransactionHistoryReducer = (
  state = {
    transaction: {},
    isSuccessTransaction: false,
    isLoadingTransaction: false,
    isFailTransaction: false,
  },
  action
) => {
  switch (action.type) {
    case TRANSACTION_SUCCESS:
      return {
        transaction: action.payload,
        isSuccessTransaction: true,
        isLoadingTransaction: false,
        isFailTransaction: false,
      };
    case TRANSACTION_LOADING:
      return {
        isSuccessTransaction: false,
        isLoadingTransaction: true,
        isFailTransaction: false,
      };
    case TRANSACTION_FAIL:
      return {
        transaction: action.payload,
        isSuccessTransaction: false,
        isLoadingTransaction: false,
        isFailTransaction: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        login: null,
        isSuccessTransaction: false,
        isLoadingTransaction: false,
        isFailTransaction: false,
      };
    default:
      return state;
  }
};
