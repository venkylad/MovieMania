import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MovieCreationRoundedIcon from "@material-ui/icons/MovieCreationRounded";
import { Link } from "react-router-dom";

import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1
//   },
//   menuButton: {
//     marginRight: theme.spacing(1)
//   },
//   title: {
//     flexGrow: 1
//   }
// }));

// const Header = ({handleLogout, login}) => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="fixed" color="inherit">
//         <Toolbar>
// <IconButton
//   edge="start"
//   className={classes.menuButton}
//   color="inherit"
//   aria-label="menu"
// >
//   <MovieCreationRoundedIcon />
// </IconButton>
//           <Typography variant="h6" className={classes.title}>
//             <Link to="/">Movie Marathon</Link>
//           </Typography>
//           <Button color="inherit">
//             <Link to="/movie">Movies</Link>
//           </Button>
//           <Link to="/tv">
//             {" "}
//             <Button color="inherit">Top Movies</Button>{" "}
//           </Link>
//           <Button color="inherit">
//             <Link to="/wishlist">Wishlist</Link>
//           </Button>

// <Button color="inherit" onClick={handleLogout}>{login ? "Log Out" : "Login"}</Button>

//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// };

// export default Header;

const NavHeader = ({ handleLogout, login }) => {
  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar" fixed="top">
        <Navbar.Brand href="/">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MovieCreationRoundedIcon />
          </IconButton>
          Movie Mania
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <LinkContainer to="/movie">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/tv">
              <Nav.Link>Top Rated</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/wishlist">
              <Nav.Link>Wishlist</Nav.Link>
            </LinkContainer>
            <Nav.Link>
              <button
                className="btn-sm btn-outline-dark"
                onClick={handleLogout}
              >
                {login ? "Log Out" : "Login"}
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default NavHeader;
