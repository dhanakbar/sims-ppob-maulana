import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  CLEAR_ERRORS,
} from "../constans/authConstans";

export const loginReducer = (
  state = {
    login: {},
    isSuccessLogin: false,
    isLoadingLogin: false,
    isFailLogin: false,
  },
  action
) => {
  switch (action.type) {
    case AUTH_LOGIN_SUCCESS:
      return {
        login: action.payload,
        isSuccessLogin: true,
        isLoadingLogin: false,
        isFailLogin: false,
      };
    case AUTH_LOGIN_LOADING:
      return {
        isSuccessLogin: false,
        isLoadingLogin: true,
        isFailLogin: false,
      };
    case AUTH_LOGIN_FAIL:
      return {
        login: action.payload,
        isSuccessLogin: false,
        isLoadingLogin: false,
        isFailLogin: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        login: null,
        isSuccessLogin: false,
        isLoadingLogin: false,
        isFailLogin: false,
      };
    default:
      return state;
  }
};
