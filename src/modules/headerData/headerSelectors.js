import { createSelector } from "reselect";

const getDataById = (state) => state.header.data;
export const getHeaderSelector = (state) => state.header;

export const getDataByIdSelector = createSelector(getDataById, (data) => {
  return data;
});
