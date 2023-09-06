import axios from "axios";
import {
  CLEAR_ERRORS,
  PROFILE_FAIL,
  PROFILE_LOADING,
  PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  UPDATE_PROFILE_LOADING,
  UPDATE_PROFILE_SUCCESS,
} from "../constans/userConstans";
import { getCookie } from "../../helpers";

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

export const updateProfile =
  ({ first_name, last_name }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: UPDATE_PROFILE_LOADING,
      });

      const { data } = await axios.put(
        `${process.env.REACT_APP_PUBLIC_API}profile/update`,
        { first_name, last_name },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );

      dispatch({
        type: UPDATE_PROFILE_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: UPDATE_PROFILE_FAIL,
        payload: error.response,
      });
    }
  };

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
