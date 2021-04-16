import { Grid } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearArr, fetchMovies } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import MovieCard from "./MovieCard";

const Movie = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(false);
    dispatch(clearArr([]));
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
    setChecked(true);
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3}>
          {movies.map(
            (movie) =>
              movie.poster_path && (
                <MovieCard key={movie.id} checked={checked} {...movie} />
              )
          )}
        </Grid>
      </Grid>
    </>
  );
};
export default Movie;
