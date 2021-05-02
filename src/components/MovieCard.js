import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { Button, Grow } from "@material-ui/core";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

const useStyles = makeStyles({
  media: {
    height: 300
  }
});

const MovieCard = ({
  poster_path,
  original_title,
  original_language,
  release_date,
  original_name,
  first_air_date,
  id,
  checked,
  canRemove,
  handleClick
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className="card_group">
      <Grow
        in={checked}
        style={{ transformOrigin: "0 0 0" }}
        {...(checked ? { timeout: 1000 } : {})}
      >
        <Link to={`/movie/${id}`}>
          <Card className="card">
            <CardActionArea>
              <CardMedia
                image={`https://image.tmdb.org/t/p/w200${poster_path}`}
                title={original_title}
                className={classes.media}
              >
                <div className="card_title">
                  <h4>
                    {original_title || original_name} ({original_language})
                  </h4>
                </div>
              </CardMedia>
            </CardActionArea>
          </Card>
        </Link>
      </Grow>
      {canRemove && (
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleClick(id)}
        >
          Remove
        </Button>
      )}
    </div>
  );
};

export default MovieCard;
