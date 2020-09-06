import { createSelector } from "reselect";

export const getDataIsLoading = (state) => state.headerReducer.loading;
export const getDataById = (state) => state.headerReducer.data;

export const getDataByIdSelector = createSelector(getDataById, (data) => {
  return data;
});
