import { combineReducers } from "redux";
import { fetchMovieReducer, fetchTVReducer } from "./fetchReducer";

export const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  tv: fetchTVReducer
});
