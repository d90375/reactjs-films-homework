import { useCallback } from "react";
import { useDispatch } from "react-redux";
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

const errorFetch = (data) => ({
  type: FETCH_TRAILER_REJECTED,
  payload: data
});

const removeVideoFrame = () => ({
  type: FETCH_TRAILER_REMOVE
});

const fetchTrailerById = (id) => {
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

const useTrailerActions = (id) => {
  const dispatch = useDispatch();

  const handleRemoveVideoFrame = useCallback(() => dispatch(removeVideoFrame()), [dispatch]);
  const handleShowTrailer = useCallback(() => dispatch(fetchTrailerById(id)), [id, dispatch]);

  return { handleShowTrailer, handleRemoveVideoFrame };
};

export default useTrailerActions;
