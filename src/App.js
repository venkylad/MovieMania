import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "./credentials";
import { fetchMovies } from "./actions/fetchAction";
import { Container } from "react-bootstrap";
import Header from "./components/NavHeader";
import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Movie from "./components/MoviePage";
import TV from "./components/TVPage";
import DetailPage from "./components/DetailPage";
import Wishlist from "./components/Whislist";

export default function App() {
  return (
    <div className="App">
      <Container fluid>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/movie">
            <Movie />
          </Route>
          <Route exact path="/tv">
            <TV />
          </Route>
          <Route path="/movie/:detailId">
            <DetailPage />
          </Route>
          <Route path="/wishlist">
            <Wishlist />
          </Route>
        </Switch>
        <footer>&copy; Movie Mania</footer>
      </Container>
    </div>
  );
}
