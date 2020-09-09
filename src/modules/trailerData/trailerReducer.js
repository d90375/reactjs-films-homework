import { FETCH_ERROR_TRAILER, FETCH_START_TRAILER, FETCHED_TRAILER, REMOVE_TRAILER } from "../actionTypes";

const initialState = {
  loading: true,
  error: null,
  data: [],
  isShowVideoFrame: false
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_TRAILER:
      return { ...state, isShowVideoFrame: true, loading: true };
    case FETCHED_TRAILER:
      return { ...state, loading: false, data: action.data };
    case FETCH_ERROR_TRAILER:
      return { ...state, loading: true, error: action.error };
    case REMOVE_TRAILER: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};

export default trailerReducer;
