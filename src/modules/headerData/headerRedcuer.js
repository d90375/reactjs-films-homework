import { FETCH_ERROR_BY_ID, FETCH_START_BY_ID, FETCHED_MOVIE_BY_ID } from "../actionTypes";

const initialState = {
  loading: true,
  data: {},
  error: null
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_BY_ID:
      return { ...state, loading: true };
    case FETCHED_MOVIE_BY_ID:
      return { ...state, loading: false, data: action.data };
    case FETCH_ERROR_BY_ID:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default headerReducer;
