export const fetchMovieReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    case "CLEAR":
      return action.payload;
    default:
      return state;
  }
};

export const moviePage = (state = 1, action) => {
  switch (action.type) {
    case "MOVIE_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export const topMoviePage = (state = 1, action) => {
  switch (action.type) {
    case "TOP_MOVIE_PAGE":
      return action.payload;
    default:
      return state;
  }
};

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case "WISHlIST_MOVIE":
      return [...state, action.payload];
    case "WISHlIST_REMOVE_MOVIE":
      return state.filter((movie) => movie.id !== action.payload);
    default:
      return state;
  }
};
