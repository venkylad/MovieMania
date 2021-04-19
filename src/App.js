import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/NavHeader";
import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage";
import Movie from "./components/MoviePage";
import TV from "./components/TVPage";
import DetailPage from "./components/DetailPage";
import Wishlist from "./components/Whislist";
import ControlledCarousel from "./components/Carousel";
import { Button } from "@material-ui/core";

export default function App() {
  const [login, setLogin] = useState(false);

  const handleLogin = () => {
    setLogin(true);
  };

  const handleLogout = () => {
    setLogin(false);
  };

  return (
    <div className="App">
      {login === false ? (
        <Container className="login_container">
          <h1>Movie Mania</h1>
          <h2>Need to Login</h2>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className="btn-block btn-lg mb-3"
            onClick={handleLogin}
          >
            Demo Login
          </Button>
          <ControlledCarousel />
        </Container>
      ) : (
        <Container fluid>
          <Header handleLogout={handleLogout} login={login} />
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
      )}
    </div>
  );
}
