import { combineReducers } from "redux";
import { fetchMovieReducer, moviePage, topMoviePage, wishlistReducer } from "./fetchReducer";

export const rootReducer = combineReducers({
  movies: fetchMovieReducer,
  moviePage: moviePage,
  topMoviePage: topMoviePage,
  wishlist: wishlistReducer
});
