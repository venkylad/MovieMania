import { combineReducers } from "redux";
import { fetchMovieReducer } from "./fetchReducer";

export const rootReducer = combineReducers({
  movies: fetchMovieReducer
});
