import { createSelector } from "reselect";

export const getMovieDataSelector = (state) => state.movieListReducer.data;
export const getMovieGenresSelector = (state) => state.movieListReducer.genresData;
export const getMovieIsLoadingSelector = (state) => state.movieListReducer.loading;
export const getMovieDataError = (state) => state.movieListReducer.error;

export const getCompletedMovieList = createSelector(
  [getMovieDataSelector, getMovieGenresSelector],
  (data, genresData) => {
    return { ...data, genres: genresData };
  }
);
