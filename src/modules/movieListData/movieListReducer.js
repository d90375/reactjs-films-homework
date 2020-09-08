import { FETCHED_MOVIES, FETCH_START, FETCH_ERROR, FETCHED_GENRES, FETCHED_GENRES_BY_ID } from "../actionTypes";

const initialState = {
  loading: true,
  error: null,
  data: { results: {} },
  genres: {}
};

let adjustmentGenreData = {};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCHED_MOVIES:
      return { ...state, loading: false, data: action.data };
    case FETCHED_GENRES_BY_ID:
      return { ...state, loading: false, data: action.data };
    case FETCHED_GENRES:
      adjustmentGenreData = Object.values(action.genresData.genres).reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {});
      return { ...state, loading: false, genresData: adjustmentGenreData };
    case FETCH_ERROR:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default movieListReducer;
