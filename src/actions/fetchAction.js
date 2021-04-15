import axios from "axios";

export const fetchMovies = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_MOVIES", payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

export const fetchTV = (url) => async (dispatch) => {
  try {
    const { data } = axios.get(url);
    dispatch({ type: "FETCH_TV", payload: data });
  } catch (error) {
    console.log(error);
  }
};
