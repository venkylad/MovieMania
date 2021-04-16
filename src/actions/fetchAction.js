import axios from "axios";

export const fetchMovies = (url) => async (dispatch) => {
  try {
    const { data } = await axios.get(url);
    dispatch({ type: "FETCH_MOVIES", payload: data.results });
  } catch (error) {
    console.log(error);
  }
};

export const clearArr = (arr) => {
  return {
    type: "CLEAR",
    payload: arr
  };
};
