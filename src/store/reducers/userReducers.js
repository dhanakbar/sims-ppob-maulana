import {
  CLEAR_ERRORS,
  PROFILE_FAIL,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
} from "../constans/userConstans";

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

export const updateProfileReducer = (
  state = {
    profileUpdate: {},
    isSuccessProfileUpdate: false,
    isLoadingProfileUpdate: false,
    isFailProfileUpdate: false,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_PROFILE_SUCCESS:
      return {
        profileUpdate: action.payload,
        isSuccessProfileUpdate: true,
        isLoadingProfileUpdate: false,
        isFailProfileUpdate: false,
      };
    case UPDATE_PROFILE_LOADING:
      return {
        isSuccessProfileUpdate: false,
        isLoadingProfileUpdate: true,
        isFailProfileUpdate: false,
      };
    case UPDATE_PROFILE_FAIL:
      return {
        profileUpdate: action.payload,
        isSuccessProfileUpdate: false,
        isLoadingProfileUpdate: false,
        isFailProfileUpdate: true,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        profileUpdate: null,
        isSuccessProfileUpdate: false,
        isLoadingProfileUpdate: false,
        isFailProfileUpdate: false,
      };
    default:
      return state;
  }
};
