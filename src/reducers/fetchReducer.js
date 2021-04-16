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
