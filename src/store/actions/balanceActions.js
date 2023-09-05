import axios from "axios";
import {
  BALANCE_FAIL,
  BALANCE_LOADING,
  BALANCE_SUCCESS,
  CLEAR_ERRORS,
} from "../constans/balanceConstans";
import { getCookie } from "../../helpers";

export const getBalance = () => async (dispatch) => {
  try {
    dispatch({
      type: BALANCE_LOADING,
    });

    const { data } = await axios.get(
      `${process.env.REACT_APP_PUBLIC_API}balance`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getCookie("nutech_token")}`,
        },
      }
    );

    dispatch({
      type: BALANCE_SUCCESS,
      payload: data,
    });

    return data;
  } catch (error) {
    dispatch({
      type: BALANCE_FAIL,
      payload: error.response,
    });
  }
};

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
