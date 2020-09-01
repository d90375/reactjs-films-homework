import { FETCHED, FETCHING, FETCH_ERROR } from "../actionTypes";

const KEY = "?api_key=6da466b0eb7061f0a6aba0e23f44d47d";
const API = "https://api.themoviedb.org/3/";
const LANG = "&language=en-US";
const QUERY = "&query=";
const PAGE = "&page=1";
const ADULT = "&include_adult=false";
const REGION = "US";

const POPULAR_LINK = `${API}movie/popular${KEY}${LANG}${PAGE}${REGION}`;
const SEARCH_LINK = (text) => {
  return `${API}search/movie${KEY}${LANG}${QUERY + text}${PAGE}${ADULT}`;
};

export const startFetch = () => ({
  type: FETCHING
});

export const finishedFetch = (data) => ({
  type: FETCHED,
  data
});

export const errorFetch = (error) => ({
  type: FETCH_ERROR,
  error
});

export const fetchData = (query) => {
  return (dispatch) => {
    dispatch(startFetch());
    return fetch(query === "" ? POPULAR_LINK : SEARCH_LINK(query))
      .then((res) => res.json())
      .then((res) => {
        dispatch(finishedFetch(res));
        return res;
      })
      .catch((error) => {
        dispatch(errorFetch(error));
      });
  };
};
