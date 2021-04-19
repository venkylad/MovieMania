import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import { Link } from "react-router-dom";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
  }, [dispatch]);

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      {movies.slice(0, 5).map((movie) => {
        return (
          movie.backdrop_path && (
            <Carousel.Item key={movie.id} className="carousel carousel_img">
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.original_title}
                />
                <Carousel.Caption>
                  <h5>{movie.original_title || movie.original_name}</h5>
                  <p className="d-none d-lg-block">
                    {movie.overview.substring(0, 150)}
                  </p>
                </Carousel.Caption>
              </Link>
            </Carousel.Item>
          )
        );
      })}
    </Carousel>
  );
};

export default ControlledCarousel;
