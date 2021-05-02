import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovies } from "../actions/fetchAction";
import { API_KEY } from "../credentials";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const ControlledCarousel = () => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    fade: true,
    speed: 500,
    width: 100
  };

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
  }, [dispatch]);

  return (
    <div className="text-center">
      <Slider {...settings}>
        {movies.slice(0, 5).map((movie) => {
          return (
            movie.backdrop_path && (
              <div key={movie.id} className="carousel">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.original_title}
                  />
                </Link>
              </div>
            )
          );
        })}
      </Slider>
    </div>
  );
};

export default ControlledCarousel;
