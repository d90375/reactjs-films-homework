import { FETCHED_MOVIES, FETCH_START, FETCHED_GENRES, FETCH_ERROR, FETCHED_GENRES_BY_ID } from "../actionTypes";

import { API, KEY, LANG, PAGE, REGION, QUERY, ADULT } from "../../constants";

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

export const finishedFetchGenresById = (data) => ({
  type: FETCHED_GENRES_BY_ID,
  data
});

export const errorFetch = (error) => ({
  type: FETCH_ERROR,
  error
});

export const fetchGenresDataById = (id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}discover/movie${KEY}&with_genres=${id}`)
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetchGenresById(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};

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

export const fetchUpcomingData = () => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}movie/upcoming${KEY}${LANG}${PAGE}${REGION}`)
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

export const fetchTopRatedData = () => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(`${API}movie/top_rated${KEY}${LANG}${PAGE}${REGION}`)
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
