import {
  FETCH_CURRENT_MOVIE_REJECTED,
  FETCH_CURRENT_MOVIE_FULFILLED,
  FETCH_CURRENT_MOVIE_PENDING
} from "../actionTypes";

const initialState = {
  isLoadingHeader: false,
  isFulfilledHeader: false,
  hasErrorHeader: false,
  errorHeader: {},
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CURRENT_MOVIE_PENDING:
      return { ...state, isFulfilledHeader: false, isLoadingHeader: true, hasErrorHeader: false, data: {} };
    case FETCH_CURRENT_MOVIE_FULFILLED:
      return {
        ...state,
        isFulfilledHeader: true,
        isLoadingHeader: false,
        hasErrorHeader: false,
        data: action.payload.data
      };
    case FETCH_CURRENT_MOVIE_REJECTED:
      return {
        ...state,
        isFulfilledHeader: false,
        isLoadingHeader: false,
        hasErrorHeader: true,
        errorHeader: action.payload
      };
    default:
      return state;
  }
};
