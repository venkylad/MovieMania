import { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "./credentials";
import { fetchMovies } from "./actions/fetchAction";
import { Container } from "@material-ui/core";
import Header from "./components/NavHeader";

export default function App() {
  const data = useSelector((state) => state.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      fetchMovies(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
    );
    console.log(data);
  }, []);

  return (
    <Container maxWidth="lg">
      <Header />
    </Container>
  );
}
