export const fetchMovieReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_MOVIES":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const fetchTVReducer = (state = [], action) => {
  switch (action.type) {
    case "FETCH_TV":
      return [...state, action.payload];
    default:
      return state;
  }
};
