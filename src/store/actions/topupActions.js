import axios from "axios";
import {
  CLEAR_ERRORS,
  TOPUP_FAIL,
  TOPUP_LOADING,
  TOPUP_SUCCESS,
} from "../constans/topupConstans";
import { getCookie } from "../../helpers";

export const topupBalance =
  ({ top_up_amount }) =>
  async (dispatch) => {
    try {
      dispatch({
        type: TOPUP_LOADING,
      });

      const { data } = await axios.post(
        `${process.env.REACT_APP_PUBLIC_API}topup`,
        {
          top_up_amount,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie("nutech_token")}`,
          },
        }
      );

      dispatch({
        type: TOPUP_SUCCESS,
        payload: data,
      });

      return data;
    } catch (error) {
      dispatch({
        type: TOPUP_FAIL,
        payload: error.response,
      });
    }
  };

export const clearError = () => async (dispatch) => {
  dispatch({
    type: CLEAR_ERRORS,
  });
};
