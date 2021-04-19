import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { API_KEY } from "../credentials";
import { Container, Row, Col } from "react-bootstrap";
import FavoriteTwoToneIcon from "@material-ui/icons/FavoriteTwoTone";
import { useDispatch, useSelector } from "react-redux";
import { whislistMovies } from "../actions/fetchAction";

const DetailPage = () => {
  const [detail, setDetail] = useState([]);
  const { detailId } = useParams();
  const dispatch = useDispatch();
  const wishlistMovies = useSelector((state) => state.wishlist);

  const movieInWishlist = wishlistMovies.find(
    (movie) => movie.id === detail.id
  );
  console.log(movieInWishlist);

  const handleFetch = async (url) => {
    const { data } = await axios.get(url);

    if (data) {
      setDetail(data);
    }
  };

  const handleWishlist = () => {
    dispatch(whislistMovies(detail));
  };

  useEffect(() => {
    handleFetch(
      `https://api.themoviedb.org/3/movie/${detailId}?api_key=${API_KEY}&language=en-US`
    );
    const movieInWishlist = wishlistMovies.find(
      (movie) => movie.id === detail.id
    );
  }, []);

  return (
    <>
      {detail.length === 0 ? (
        <img
          src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
          alt=""
          className="loading"
        />
      ) : (
        <Container className="detail_container">
          <Row>
            <Col sm={12} md={8}>
              {detail.backdrop_path || detail.poster_path ? (
                <img
                  className="img_page"
                  style={{ width: "100%" }}
                  src={`https://image.tmdb.org/t/p/w500${
                    detail.backdrop_path || detail.poster_path
                  }`}
                  alt=""
                />
              ) : (
                <img
                  src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif"
                  alt=""
                  width="400px"
                  className="loading_img"
                />
              )}
            </Col>
            <Col sm={12} md={4}>
              <div style={{ textAlign: "center" }}>
                <h2>
                  <strong>
                    {detail.original_title || detail.original_name}
                  </strong>
                </h2>
                {detail.tagline && <span>{detail.tagline}</span>}
              </div>
              <hr />
              {detail.original_language && (
                <p>
                  {" "}
                  <strong>Language:</strong> {detail.original_language}
                </p>
              )}
              {detail.genres && <strong>Genre :</strong>}
              {detail.genres &&
                detail.genres.map((genre) => (
                  <ul>
                    <li key={genre.id}>{genre.name}</li>
                  </ul>
                ))}
              {detail.release_date && (
                <p>
                  {" "}
                  <strong> Released on: </strong> {detail.release_date}
                </p>
              )}

              {detail.runtime && (
                <p>
                  {" "}
                  <strong>Runtime:</strong> {detail.runtime} Minutes
                </p>
              )}
            </Col>
          </Row>
          {!movieInWishlist && (
            <Link to="/wishlist">
              {" "}
              <span className="wishlist_btn" onClick={handleWishlist}>
                {" "}
                <FavoriteTwoToneIcon />
                <h5>Wishlist</h5>
              </span>
            </Link>
          )}
          <p>
            <strong> Story Overview </strong> : <br /> {detail.overview}
          </p>
        </Container>
      )}
    </>
  );
};
export default DetailPage;
