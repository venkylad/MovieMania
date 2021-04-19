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

export const moviePage = (num) => {
  return {
    type: "MOVIE_PAGE",
    payload: num
  };
};

export const topMoviePage = (num) => {
  return {
    type: "TOP_MOVIE_PAGE",
    payload: num
  };
};

export const whislistMovies = (movies) => {
  return {
    type: "WISHlIST_MOVIE",
    payload: movies
  };
};

export const wishlistRemoveMovie = (id) => {
  return {
    type: "WISHlIST_REMOVE_MOVIE",
    payload: id
  };
};
