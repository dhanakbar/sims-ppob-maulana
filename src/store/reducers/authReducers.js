import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  CLEAR_ERRORS,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_LOADING,
  AUTH_REGISTER_SUCCESS,
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

export const registerReducer = (
  state = {
    register: {},
    isSuccessRegister: false,
    isLoadingRegister: false,
    isFailRegister: false,
  },
  action
) => {
  switch (action.type) {
    case AUTH_REGISTER_SUCCESS:
      return {
        registerUser: action.payload,
        isSuccessRegister: true,
        isLoadingRegister: false,
        isFailRegister: false,
      };
    case AUTH_REGISTER_LOADING:
      return {
        isSuccessRegister: false,
        isLoadingRegister: true,
        isFailRegister: false,
      };
    case AUTH_REGISTER_FAIL:
      return {
        registerUser: action.payload,
        isSuccessRegister: false,
        isLoadingRegister: false,
        isFailRegister: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        registerUser: null,
        isSuccessRegister: false,
        isLoadingRegister: false,
        isFailRegister: false,
      };
    default:
      return state;
  }
};
