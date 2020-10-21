import axios from "axios";

import {
  FETCH_TRAILER_FULFILLED,
  FETCH_TRAILER_PENDING,
  FETCH_TRAILER_REJECTED,
  FETCH_TRAILER_REMOVE
} from "../actionTypes";

import { API, KEY, LANG } from "../../constants";

const startFetch = () => ({
  type: FETCH_TRAILER_PENDING
});

const finishedFetchTrailerById = (data) => ({
  type: FETCH_TRAILER_FULFILLED,
  payload: data
});

const errorFetch = (error) => ({
  type: FETCH_TRAILER_REJECTED,
  error
});

export const removeVideoFrame = () => ({
  type: FETCH_TRAILER_REMOVE
});

export const fetchTrailerById = (id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return axios
      .get(`${API}movie/${id}/videos${KEY}${LANG}`)
      .then((res) => {
        dispatch(finishedFetchTrailerById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
        throw Error(error);
      });
  };
};
