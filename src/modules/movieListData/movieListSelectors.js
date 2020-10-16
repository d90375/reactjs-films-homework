import { createSelector } from "reselect";

const getMovieDataSelector = (state) => state.movieList.data;
const getMovieGenresSelector = (state) => state.movieList.genresData;
export const getMovieSelector = (state) => state.movieList;

export const getCompletedMovieListSelector = createSelector(
  [getMovieDataSelector, getMovieGenresSelector],
  (data, genresData) => {
    return { ...data, genres: genresData };
  }
);
