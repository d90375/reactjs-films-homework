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
  data: null,
  genresData: null
};

let adjustmentGenreData = {};

export default (state = initialState, action) => {
  const { type, error, payload } = action;

  switch (type) {
    case FETCH_MOVIES_PENDING:
      return { ...state, isFulfilledMovieList: false, isLoadingMovieList: true };
    case FETCH_MOVIES_FULFILLED:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        data: payload.data
      };
    case FETCH_MOVIES_GENRES_BY_ID:
      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        data: payload.data
      };

    case FETCH_MOVIES_GENRES:
      adjustmentGenreData = Object.values(payload.data.genres).reduce((acc, genre) => {
        return { ...acc, [genre.id]: genre.name };
      }, {});

      return {
        ...state,
        isFulfilledMovieList: true,
        isLoadingMovieList: false,
        genresData: adjustmentGenreData
      };

    case FETCH_MOVIES_REJECTED:
      return {
        ...state,
        isFulfilledMovieList: false,
        isLoadingMovieList: false,
        error
      };
    default:
      return state;
  }
};
