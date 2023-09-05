import {
  CLEAR_ERRORS,
  TOPUP_FAIL,
  TOPUP_LOADING,
  TOPUP_SUCCESS,
} from "../constans/topupConstans";

export const topupReducer = (
  state = {
    topup: {},
    isSuccessTopup: false,
    isLoadingTopup: false,
    isFailTopup: false,
  },
  action
) => {
  switch (action.type) {
    case TOPUP_SUCCESS:
      return {
        topup: action.payload,
        isSuccessTopup: true,
        isLoadingTopup: false,
        isFailTopup: false,
      };
    case TOPUP_LOADING:
      return {
        isSuccessTopup: false,
        isLoadingTopup: true,
        isFailTopup: false,
      };
    case TOPUP_FAIL:
      return {
        topup: action.payload,
        isSuccessTopup: false,
        isLoadingTopup: false,
        isFailTopup: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        topup: null,
        isSuccessTopup: false,
        isLoadingTopup: false,
        isFailTopup: false,
      };
    default:
      return state;
  }
};
