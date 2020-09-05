import { createSelector } from "reselect";

export const getDataSelector = (state) => state.dataReducer.data;
export const getDataIsLoading = (state) => state.dataReducer.loading;
export const getDataError = (state) => state.dataReducer.error;
export const getGenresSelector = (state) => state.dataReducer.genres;

export const getDataReselctor = createSelector(getDataSelector, (data) => {
  return data;
});

export const getDataIsLoadingReselector = createSelector(getDataIsLoading, (bool) => {
  return bool;
});

export const getGenresReselector = createSelector(getGenresSelector, (genres) => {
  console.log(genres);
  return genres;
  // return genres.reduce((acc, genre) => {
  //   const arr = acc;
  //   const { id, name } = genre;
  //   arr[id] = name;
  //   return arr;
  // }, []);
});
