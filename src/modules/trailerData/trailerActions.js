import { useCallback } from "react";
import { useDispatch } from "react-redux";
import fetchJSON from "../../utils/fetch";

import { FETCH_START_TRAILER, FETCH_ERROR_TRAILER, FETCHED_TRAILER, REMOVE_TRAILER } from "../actionTypes";
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

export const removeVideoFrame = () => ({
  type: REMOVE_TRAILER
});

export const fetchTrailerById = (id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetchJSON(`${API}movie/${id}/videos${KEY}${LANG}`)
      .then((res) => {
        dispatch(finishedFetchTrailerById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};

export const useTrailerActions = () => {
  const dispatch = useDispatch();

  const handleRemoveVideoFrame = useCallback(() => dispatch(removeVideoFrame()), [dispatch]);

  return { handleRemoveVideoFrame };
};

export const useTrailerFetchActions = (id) => {
  const dispatch = useDispatch();

  const onShowTrailer = useCallback(() => dispatch(fetchTrailerById(id)), [id, dispatch]);

  return { onShowTrailer };
};
