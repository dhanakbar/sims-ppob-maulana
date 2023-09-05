import axios from "axios";
import {
  CLEAR_ERRORS,
  TRANSACTION_FAIL,
  TRANSACTION_LOADING,
  TRANSACTION_SUCCESS,
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
