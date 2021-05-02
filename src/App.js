import { useState, useEffect } from "react";
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
  const [login, setLogin] = useState("true");

  useEffect(() => {
    localStorage.setItem("logged", false);
    setLogin(localStorage.getItem("logged"));
    console.log(typeof localStorage.getItem("logged"));
  }, []);

  const handleLogin = () => {
    localStorage.setItem("logged", true);
    const loggedIn = localStorage.getItem("logged");
    setLogin(loggedIn);
  };

  const handleLogout = () => {
    localStorage.setItem("logged", false);
    const loggedIn = localStorage.getItem("logged");
    setLogin(loggedIn);
  };

  return (
    <div className="App">
      {8 === "8" ? (
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
