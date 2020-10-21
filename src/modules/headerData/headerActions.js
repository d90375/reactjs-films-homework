import axios from "axios";
import {
  FETCH_CURRENT_MOVIE_PENDING,
  FETCH_CURRENT_MOVIE_FULFILLED,
  FETCH_CURRENT_MOVIE_REJECTED
} from "../actionTypes";
import { API, KEY, LANG } from "../../constants";

const startFetchMoviesById = () => ({
  type: FETCH_CURRENT_MOVIE_PENDING
});

const finishFetchMoviesById = (data) => ({
  type: FETCH_CURRENT_MOVIE_FULFILLED,
  payload: data
});

const errorFetchMoviesById = (error) => ({
  type: FETCH_CURRENT_MOVIE_REJECTED,
  error
});

const fetchMovieById = (id) => {
  return (dispatch) => {
    dispatch(startFetchMoviesById());
    return axios
      .get(`${API}movie/${id}${KEY}${LANG}`)
      .then((res) => {
        dispatch(finishFetchMoviesById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetchMoviesById(error));
      });
  };
};

export default fetchMovieById;
