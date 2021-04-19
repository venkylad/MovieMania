import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";
import { clearArr, fetchMovies } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import { Grid } from "@material-ui/core";
import MovieCard from "./MovieCard";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    width: "90%",
    margin: "20px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1
  },
  iconButton: {
    padding: 10
  }
}));

const CustomizedInputBase = () => {
  const classes = useStyles();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(clearArr([]));
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`;
    dispatch(fetchMovies(url));
    setChecked(true);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Paper className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Search Movies"
            inputProps={{ "aria-label": "search google maps" }}
            onChange={(e) => setQuery(e.target.value)}
          />

          <IconButton
            type="submit"
            className={classes.iconButton}
            aria-label="search"
          >
            <SearchIcon onClick={handleSubmit} />
          </IconButton>
        </Paper>
      </form>
      {!checked && (
        <div className="intro">
          <h2>Searched Movies will appear here...</h2>
          <img src="https://www.pngrepo.com/png/25245/512/search.png" alt="" />
        </div>
      )}
      {movies.length === 0 ? (
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
          className="loading"
        />
      ) : (
        <Grid container>
          <Grid container item>
            {movies.map(
              (movie) =>
                movie.poster_path && (
                  <MovieCard key={movie.id} checked={checked} {...movie} />
                )
            )}
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default CustomizedInputBase;
