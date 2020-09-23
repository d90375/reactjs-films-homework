import { createSelector } from "reselect";
import { useSelector } from "react-redux";

const getDataById = (state) => state.header.data;

const getDataByIdSelector = createSelector(getDataById, (data) => {
  return data;
});

export const useCurrentMovieData = () => useSelector(getDataByIdSelector);

export const useCurrentMovie = () => useSelector((state) => state.header);
