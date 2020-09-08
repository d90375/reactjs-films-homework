import { FETCH_START_TRAILER, FETCH_ERROR_TRAILER, FETCHED_TRAILER } from "../actionTypes";

import { API, KEY, LANG } from "../../constants";

export const startFetch = () => ({
  type: FETCH_START_TRAILER
});

export const finishedFetchTrailerById = (data) => ({
  type: FETCHED_TRAILER,
  data
});

export const errorFetch = (error) => ({
  type: FETCH_ERROR_TRAILER,
  error
});

export const fetchTrailer = (id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}movie/${id}/videos${KEY}${LANG}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetchTrailerById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};
