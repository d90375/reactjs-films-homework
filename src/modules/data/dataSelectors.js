import { createSelector } from "reselect";

export const getDataSelector = (state) => state.dataReducer.data;
export const getDataIsLoading = (state) => state.dataReducer.loading;
export const getDataError = (state) => state.dataReducer.error;

export const getDataReselctor = createSelector(getDataSelector, (data) => {
  return data;
});
