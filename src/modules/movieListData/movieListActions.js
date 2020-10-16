import axios from "axios";
import {
  FETCH_MOVIES_PENDING,
  FETCH_MOVIES_FULFILLED,
  FETCH_MOVIES_GENRES,
  FETCH_MOVIES_REJECTED,
  FETCH_MOVIES_GENRES_BY_ID
} from "../actionTypes";
import { API, KEY, LANG, PAGE, REGION, QUERY, ADULT, TRENDING, TOP_RATED, COMING_SOON } from "../../constants";

const startFetch = () => ({
  type: FETCH_MOVIES_PENDING
});

const finishedFetchMovies = (movieData) => ({
  type: FETCH_MOVIES_FULFILLED,
  payload: movieData
});

const finishedFetchGenres = (genresData) => ({
  type: FETCH_MOVIES_GENRES,
  payload: genresData
});

const finishedFetchGenresById = (movieData) => ({
  type: FETCH_MOVIES_GENRES_BY_ID,
  payload: movieData
});

const errorFetch = (error) => ({
  type: FETCH_MOVIES_REJECTED,
  payload: error
});

export const fetchGenresDataById = (id) => {
  return (dispatch) => {
    dispatch(startFetch());
    return axios
      .get(`${API}discover/movie${KEY}&with_genres=${id}`)
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
    return axios
      .get(`${API}genre/movie/list${KEY}${LANG}`)
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
    return axios
      .get(`${API}movie/popular${KEY}${LANG}${PAGE}${REGION}`)
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
    return axios
      .get(`${API}movie/upcoming${KEY}${LANG}${PAGE}${REGION}`)
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
    return axios
      .get(`${API}movie/top_rated${KEY}${LANG}${PAGE}${REGION}`)
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
    return axios
      .get(`${API}search/movie${KEY}${LANG}${QUERY + query}${PAGE}${ADULT}`)
      .then((res) => {
        dispatch(finishedFetchMovies(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};

export const fetchMovieDataFilter = (type) => {
  return (dispatch) => {
    switch (type) {
      case TRENDING.replace(/\s/g, "").toLowerCase():
        dispatch(fetchPopularData());
        break;
      case TOP_RATED.replace(/\s/g, "").toLowerCase():
        dispatch(fetchTopRatedData());
        break;
      case COMING_SOON.replace(/\s/g, "").toLowerCase():
        dispatch(fetchUpcomingData());
        break;
      default:
        dispatch(fetchPopularData());
        break;
    }
  };
};
