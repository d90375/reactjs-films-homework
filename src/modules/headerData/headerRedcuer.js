import { FETCH_ERROR_BY_ID, FETCH_START_BY_ID, FETCHED_MOVIE_BY_ID } from "../actionTypes";

const initialState = {
  isLoadingHeader: false,
  isFulfilledHeader: false,
  hasErrorHeader: false,
  errorHeader: {},
  data: {}
};

const headerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START_BY_ID:
      return { ...state, isFulfilledHeader: false, isLoadingHeader: true, hasErrorHeader: false, data: {} };
    case FETCHED_MOVIE_BY_ID:
      return { ...state, isFulfilledHeader: true, isLoadingHeader: false, hasErrorHeader: false, data: action.data };
    case FETCH_ERROR_BY_ID:
      return {
        ...state,
        isFulfilledHeader: false,
        isLoadingHeader: false,
        hasErrorHeader: true,
        errorHeader: action.error
      };
    default:
      return state;
  }
};

export default headerReducer;
