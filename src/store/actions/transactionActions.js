import axios from "axios";
import {
  CLEAR_ERRORS,
  TRANSACTION_FAIL,
  TRANSACTION_LOADING,
  TRANSACTION_SUCCESS,
  PAY_TRANSACTION_FAIL,
  PAY_TRANSACTION_LOADING,
  PAY_TRANSACTION_SUCCESS,
} from "../constans/transactionConstans";
import { getCookie } from "../../helpers";

export const getTransactionHistory =
  ({ limit, offset }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TRANSACTION_LOADING,
      });

      const { data } = await axios.get(
        `${process.env.REACT_APP_PUBLIC_API}transaction/history?limit=${limit}&offset=${offset}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );

      dispatch({
        type: TRANSACTION_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: TRANSACTION_FAIL,
        payload: error.response,
      });
    }
  };

export const payTransactionAction =
  ({ service_code }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: PAY_TRANSACTION_LOADING,
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API}transaction`,
        { service_code },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );

      dispatch({
        type: PAY_TRANSACTION_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: PAY_TRANSACTION_FAIL,
        payload: error.response,
      });
    }
  };

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
