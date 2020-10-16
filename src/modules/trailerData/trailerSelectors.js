import { createSelector } from "reselect";

const getDataTrailer = (state) => state.trailer.data;
export const getTrailerSelector = (state) => state.trailer;

export const getTrailerDataSelector = createSelector(getDataTrailer, (data) => {
  return data;
});
