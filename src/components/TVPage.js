import { Grid } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearArr, fetchMovies, topMoviePage } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import MovieCard from "./MovieCard";

const TV = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const moviePageNum = useSelector((state) => state.topMoviePage);
  const [checked, setChecked] = useState(false);
  const [pageNum, setPageNum] = useState(moviePageNum);

  const handleChange = (event, value) => {
    setPageNum(value);
    console.log(pageNum);
  };

  useEffect(() => {
    setChecked(false);
    dispatch(clearArr([]));
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${pageNum}`
      )
    );
    dispatch(topMoviePage(pageNum));
    setChecked(true);
  }, [dispatch, pageNum]);

  return (
    <>
      {movies.length === 0 ? (
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
          className="loading"
        />
      ) : (
        <Grid container>
          <h1 className="page_names">Top Rated Movies</h1>
          <Grid container item xs={12}>
            {movies.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard key={movie.id} checked={checked} {...movie} />
                )
            )}
          </Grid>
          <Grid container item xs={12} spacing={3} className="my-4">
            <Pagination
              className="my-4 pagination"
              count={20}
              page={pageNum}
              onChange={handleChange}
              color="primary"
            />
          </Grid>
        </Grid>
      )}
    </>
  );
};
export default TV;
