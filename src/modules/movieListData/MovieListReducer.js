import {
  FETCH_MOVIES_REJECTED,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_GENRES,
  FETCH_MOVIES_GENRES_BY_ID
} from "../actionTypes";

const initialState = {
  isLoadingMovieList: false,
  isFulfilledMovieList: false,
  hasErrorMovieList: false,
  errorMovieList: {},
  data: {},
  genresData: {}
};

let adjustmentGenreData = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING:
      return { ...state, isFulfilledMovieList: false, isLoadingMovieList: true, hasErrorMovieList: false, data: {} };
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        data: action.payload.data
      };
    case FETCH_MOVIES_GENRES_BY_ID:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        data: action.payload.data
      };

    case FETCH_MOVIES_GENRES:
      adjustmentGenreData = Object.values(action.payload.data.genres).reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {});

      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        hasErrorMovieList: false,
        genresData: adjustmentGenreData
      };

    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        isFulfilledMovieList: false,
        isLoadingMovieList: false,
        hasErrorMovieList: true,
        errorMovieList: action.payload
      };
    default:
      return state;
  }
};
