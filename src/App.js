import { useEffect } from "react";
import "./styles.css";
import { useSelector, useDispatch } from "react-redux";
import { API_KEY } from "./credentials";
import { fetchMovies } from "./actions/fetchAction";
import { Container } from "@material-ui/core";
import Header from "./components/NavHeader";
import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Movie from "./components/MoviePage";
import TV from "./components/TVPage";

export default function App() {
  return (
    <div className="App">
      <Container maxWidth="xl">
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
        </Switch>
      </Container>
    </div>
  );
}
