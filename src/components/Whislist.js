import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { wishlistRemoveMovie } from "../actions/fetchAction";
import MovieCard from "./MovieCard";

const Wishlist = () => {
  const wishlistMovies = useSelector((state) => state.wishlist);
  const [checked, setChecked] = useState(false);
  const [canRemove] = useState(true);
  const dispatch = useDispatch();

  const handleRemoveMovie = (id) => {
    dispatch(wishlistRemoveMovie(id));
  };

  useEffect(() => {
    setChecked(false);
    setChecked(true);
  }, []);

  return (
    <>
      <Grid container spacing={1}>
        {wishlistMovies.length === 0 ? (
          <h2 className="page_names">OOPS, Your Wishlist Bucket is empty.</h2>
        ) : (
          <h1 className="page_names">Wish-List</h1>
        )}
        <Grid container item xs={12} spacing={3}>
          <Link className="btn btn-outline-dark ml-3" to="/">
            Go Back to Search
          </Link>
          {wishlistMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              checked={checked}
              {...movie}
              canRemove={canRemove}
              handleClick={handleRemoveMovie}
            />
          ))}
        </Grid>
      </Grid>
    </>
  );
};
export default Wishlist;

// {
//   movies.length === 0 ? (
//     <img
//       src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
//       alt=""
//       className="loading"
//     />
//   ) : (
//     <Grid container spacing={1}>
//       <Grid container item xs={12} spacing={3}>
//         {movies.map(
//           (movie) =>
//             movie.poster_path && (
//               <MovieCard key={movie.id} checked={checked} {...movie} />
//             )
//         )}
//       </Grid>
//     </Grid>
//   )
// }
