import { FETCH_ERROR_TRAILER, FETCH_START_TRAILER, FETCHED_TRAILER, REMOVE_TRAILER } from "../actionTypes";

const initialState = {
  isLoadingTrailer: false,
  isFulfilledTrailer: false,
  hasErrorTrailer: false,
  errorTrailer: {},
  data: {}
};

const trailerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_TRAILER:
      return {
        ...state,
        isFulfilledTrailer: true,
        isLoadingTrailer: false,
        hasErrorTrailer: false,
        data: {}
      };
    case FETCHED_TRAILER:
      return {
        ...state,
        isFulfilledTrailer: true,
        isLoadingTrailer: false,
        hasErrorTrailer: false,
        data: action.data
      };
    case FETCH_ERROR_TRAILER:
      return {
        ...state,
        isFulfilledTrailer: false,
        isLoadingTrailer: false,
        hasErrorTrailer: true,
        errorTrailer: action.error
      };
    case REMOVE_TRAILER: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};

export default trailerReducer;
