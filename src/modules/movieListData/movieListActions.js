import { FETCHED_MOVIES, FETCH_START, FETCHED_GENRES, FETCH_ERROR } from "../actionTypes";

const KEY = "?api_key=6da466b0eb7061f0a6aba0e23f44d47d";
const API = "https://api.themoviedb.org/3/";
const LANG = "&language=en-US";
const QUERY = "&query=";
const PAGE = "&page=1";
const ADULT = "&include_adult=false";
const REGION = "US";

export const startFetch = () => ({
  type: FETCH_START
});

export const finishedFetchMovies = (data) => ({
  type: FETCHED_MOVIES,
  data
});

export const finishedFetchGenres = (genresData) => ({
  type: FETCHED_GENRES,
  genresData
});

export const errorFetch = (error) => ({
  type: FETCH_ERROR,
  error
});

export const fetchGenresData = () => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}genre/movie/list${KEY}${LANG}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetchGenres(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};

export const fetchPopularData = () => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}movie/popular${KEY}${LANG}${PAGE}${REGION}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetchMovies(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};

export const fetchData = (query) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}search/movie${KEY}${LANG}${QUERY + query}${PAGE}${ADULT}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetchMovies(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};
