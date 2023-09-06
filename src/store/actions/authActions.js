import axios from "axios";
import { setCookie } from "nookies";
import {
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_FAIL,
  CLEAR_ERRORS,
  AUTH_REGISTER_FAIL,
  AUTH_REGISTER_LOADING,
  AUTH_REGISTER_SUCCESS,
} from "../constans/authConstans";

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

export const registerAction =
  ({ email, first_name, last_name, password }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: AUTH_REGISTER_LOADING,
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API}registration`,
        { email, first_name, last_name, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch({
        type: AUTH_REGISTER_SUCCESS,
        payload: data,
        token: data?.data?.token,
      });

      return data;
    } catch (error) {
      dispatch({
        type: AUTH_REGISTER_FAIL,
        payload: error.response,
      });
    }
  };

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
