import {
  FETCH_CURRENT_MOVIE_REJECTED,
  FETCH_CURRENT_MOVIE_FULFILLED,
  FETCH_CURRENT_MOVIE_PENDING
} from "../actionTypes";

const initialState = {
  isLoadingHeader: false,
  isFulfilledHeader: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  const { type, error, payload } = action;

  switch (type) {
    case FETCH_CURRENT_MOVIE_PENDING:
      return { ...state, isFulfilledHeader: false, isLoadingHeader: true };
    case FETCH_CURRENT_MOVIE_FULFILLED:
      return {
        ...state,
        isFulfilledHeader: true,
        isLoadingHeader: false,
        data: payload.data
      };
    case FETCH_CURRENT_MOVIE_REJECTED:
      return {
        ...state,
        isFulfilledHeader: false,
        isLoadingHeader: false,
        error
      };
    default:
      return state;
  }
};
