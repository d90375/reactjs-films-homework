import { FETCH_ERROR_TRAILER, FETCH_START_TRAILER, FETCHED_TRAILER } from "../actionTypes";

const initialState = {
  loading: true,
  error: null,
  data: {}
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_TRAILER:
      return { ...state, loading: true };
    case FETCHED_TRAILER:
      return { ...state, loading: false, data: action.data };
    case FETCH_ERROR_TRAILER:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default trailerReducer;
