import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  PROFILE_FAIL,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
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

export const getProfileReducer = (
  state = {
    profile: {},
    isSuccessProfile: false,
    isLoadingProfile: false,
    isFailProfile: false,
  },
  action
) => {
  switch (action.type) {
    case PROFILE_SUCCESS:
      return {
        profile: action.payload,
        isSuccessProfile: true,
        isLoadingProfile: false,
        isFailProfile: false,
      };
    case PROFILE_LOADING:
      return {
        isSuccessProfile: false,
        isLoadingProfile: true,
        isFailProfile: false,
      };
    case PROFILE_FAIL:
      return {
        profile: action.payload,
        isSuccessProfile: false,
        isLoadingProfile: false,
        isFailProfile: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        profile: null,
        isSuccessProfile: false,
        isLoadingProfile: false,
        isFailProfile: false,
      };
    default:
      return state;
  }
};
