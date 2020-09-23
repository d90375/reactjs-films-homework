import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const getTrailerSelector = (state) => state.trailer.data;

const getTrailerDataSelector = createSelector(getTrailerSelector, (data) => {
  return data;
});

export const useTrailerData = () => useSelector(getTrailerDataSelector);

export const useTrailer = () => useSelector((state) => state.trailer);
