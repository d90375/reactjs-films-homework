import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const getMovieDataSelector = (state) => state.movieListReducer.data;
const getMovieGenresSelector = (state) => state.movieListReducer.genresData;

const getCompletedMovieListSelector = createSelector(
  [getMovieDataSelector, getMovieGenresSelector],
  (data, genresData) => {
    return { ...data, genres: genresData };
  }
);

export const useMovieListData = () => useSelector(getCompletedMovieListSelector);

export const useMovieList = () => useSelector((state) => state.movieListReducer);
