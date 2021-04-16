import { Grid } from "@material-ui/core";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import MovieCard from "./MovieCard";

const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
  }, [dispatch]);

  return (
    <>
      <h1> movie page</h1>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {movies.map((movie) => (
            <MovieCard key={movie.id} {...movie} />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Movie;
