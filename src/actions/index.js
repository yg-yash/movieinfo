import { FETCH_RESULTS, FETCH_SINGLE_RESULT } from "./actionTypes";
import axios from "../api/axios";

export const fetchResults = searchValue => async dispatch => {
  try {
    const response = await axios.get(`?apiKey=b36f9996&s=${searchValue}`);

    dispatch({ type: FETCH_RESULTS, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleResult = id => async dispatch => {
  try {
    const response = await axios.get(`?apiKey=b36f9996&i=${id}`);

    dispatch({ type: FETCH_SINGLE_RESULT, payload: response.data });
  } catch (error) {
    console.log(error);
  }
};
