import { FETCHED_MOVIES, FETCH_START, FETCH_ERROR, FETCHED_GENRES, FETCHED_GENRES_BY_ID } from "../actionTypes";

const initialState = {
  isLoadingMovieList: false,
  isFulfilledMovieList: false,
  hasErrorMovieList: false,
  errorMovieList: {},
  data: {},
  genres: {}
};

let adjustmentGenreData = {};

const movieListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, isFulfilledMovieList: false, isLoadingMovieList: true, hasErrorMovieList: false, data: {} };
    case FETCHED_MOVIES:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        data: action.data
      };
    case FETCHED_GENRES_BY_ID:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        data: action.data
      };
    case FETCHED_GENRES:
      adjustmentGenreData = Object.values(action.genresData.genres).reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {});
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        genresData: adjustmentGenreData
      };
    case FETCH_ERROR:
      return {
        ...state,
        isFulfilledMovieList: false,
        isLoadingMovieList: false,
        hasErrorMovieList: true,
        errorMovieList: action.error
      };
    default:
      return state;
  }
};

export default movieListReducer;
