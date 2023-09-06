import {
  CLEAR_ERRORS,
  TRANSACTION_FAIL,
  TRANSACTION_LOADING,
  TRANSACTION_SUCCESS,
  PAY_TRANSACTION_FAIL,
  PAY_TRANSACTION_LOADING,
  PAY_TRANSACTION_SUCCESS,
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
        transaction: null,
        isSuccessTransaction: false,
        isLoadingTransaction: false,
        isFailTransaction: false,
      };
    default:
      return state;
  }
};

export const payTransactionReducer = (
  state = {
    payTransaction: {},
    isSuccessPayTransaction: false,
    isLoadingPayTransaction: false,
    isFailPayTransaction: false,
  },
  action
) => {
  switch (action.type) {
    case PAY_TRANSACTION_SUCCESS:
      return {
        payTransaction: action.payload,
        isSuccessPayTransaction: true,
        isLoadingPayTransaction: false,
        isFailPayTransaction: false,
      };
    case PAY_TRANSACTION_LOADING:
      return {
        isSuccessPayTransaction: false,
        isLoadingPayTransaction: true,
        isFailPayTransaction: false,
      };
    case PAY_TRANSACTION_FAIL:
      return {
        payTransaction: action.payload,
        isSuccessPayTransaction: false,
        isLoadingPayTransaction: false,
        isFailPayTransaction: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        payTransaction: null,
        isSuccessPayTransaction: false,
        isLoadingPayTransaction: false,
        isFailPayTransaction: false,
      };
    default:
      return state;
  }
};
