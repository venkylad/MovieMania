import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grow } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    width: 305,
    margin: "8px"
  },
  media: {
    height: 450
  },
  title: {
    color: "white",
    position: "absolute",
    bottom: 10,
    left: 20,
    top: "auto",
    fontFamily: "Trebuchet MS"
  }
});

const MovieCard = ({
  poster_path,
  original_title,
  original_language,
  release_date,
  original_name,
  first_air_date,
  checked
}) => {
  const classes = useStyles();

  return (
    <Grow
      in={checked}
      style={{ transformOrigin: "0 0 0" }}
      {...(checked ? { timeout: 1000 } : {})}
    >
      <Card className={classes.root} spacing="5">
        <CardActionArea>
          <CardMedia
            width="100%"
            className={classes.media}
            image={`https://image.tmdb.org/t/p/w500${poster_path}`}
            title={original_title}
          >
            <div className={classes.title}>
              <Typography variant="h4">
                {original_title || original_name} ({original_language})
              </Typography>
              <Typography variant="h5">
                <strong>{release_date ? "Release:" : "From:"}</strong>{" "}
                {release_date || first_air_date}
              </Typography>
            </div>
          </CardMedia>
        </CardActionArea>
      </Card>
    </Grow>
  );
};

export default MovieCard;
