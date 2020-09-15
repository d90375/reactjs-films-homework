import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const getTrailerSelector = (state) => state.trailerReducer.data;

const getTrailerDataSelector = createSelector(getTrailerSelector, (data) => {
  return data;
});

export const useTrailer = () => useSelector((state) => state.trailerReducer);

export const useTrailerData = () => useSelector(getTrailerDataSelector);
