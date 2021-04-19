import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MovieCreationRoundedIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link to="/">Movie Marathon</Link>
          </Typography>
          <Button color="inherit">
            <Link to="/movie">Movies</Link>
          </Button>
          <Link to="/tv">
            {" "}
            <Button color="inherit">Top Movies</Button>{" "}
          </Link>
          <Button color="inherit">
            <Link to="/wishlist">Wishlist</Link>
          </Button>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
