import axios from "axios";
import { setCookie } from "nookies";
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  PROFILE_FAIL,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  CLEAR_ERRORS,
} from "../constans/authConstans";
import { getCookie } from "../../../helpers";

export const loginAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AUTH_LOGIN_LOADING,
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API}login`,
        { email, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      setCookie(null, "nutech_token", data?.data?.token);

      dispatch({
        type: AUTH_LOGIN_SUCCESS,
        payload: data,
        token: data?.data?.token,
      });

      return data;
    } catch (error) {
      dispatch({
        type: AUTH_LOGIN_FAIL,
        payload: error.response,
      });
    }
  };

export const getProfile = () => async (dispatch) => {
  try {
    dispatch({
      type: PROFILE_LOADING,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_PUBLIC_API}profile`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("nutech_token")}`,
        },
      }
    );

    dispatch({
      type: PROFILE_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: PROFILE_FAIL,
      payload: error.response,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
