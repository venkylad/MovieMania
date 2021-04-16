import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    width: 305,
    margin: "5px"
  },
  media: {
    height: 400
  }
});

const MovieCard = ({
  poster_path,
  original_title,
  original_language,
  release_date,
  original_name,
  first_air_date
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} spacing="5">
      <CardActionArea>
        <CardMedia
          width="100%"
          className={classes.media}
          image={`https://image.tmdb.org/t/p/w500${poster_path}`}
          title={original_title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {original_title || original_name} ({original_language})
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <strong>{release_date ? "Release:" : "From:"}</strong>{" "}
            {release_date || first_air_date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieCard;
