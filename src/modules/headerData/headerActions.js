import { FETCH_START_BY_ID, FETCH_ERROR_BY_ID, FETCHED_MOVIE_BY_ID } from "../actionTypes";

const KEY = "?api_key=6da466b0eb7061f0a6aba0e23f44d47d";
const API = "https://api.themoviedb.org/3/";
const LANG = "&language=en-US";

export const startFetchMoviesById = () => ({
  type: FETCH_START_BY_ID
});

export const finishFetchMoviesById = (data) => ({
  type: FETCHED_MOVIE_BY_ID,
  data
});

export const errorFetchMoviesById = (error) => ({
  type: FETCH_ERROR_BY_ID,
  error
});

export const fetchMovieById = (id) => {
  return (dispatch) => {
    dispatch(startFetchMoviesById());
    return fetch(`${API}movie/${id}${KEY}${LANG}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishFetchMoviesById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetchMoviesById(error));
      });
  };
};
