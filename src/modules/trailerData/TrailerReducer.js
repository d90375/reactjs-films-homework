import {
  FETCH_TRAILER_FULFILLED,
  FETCH_TRAILER_PENDING,
  FETCH_TRAILER_REJECTED,
  FETCH_TRAILER_REMOVE
} from "../actionTypes";

const initialState = {
  isLoadingTrailer: false,
  isFulfilledTrailer: false,
  error: null,
  data: null
};

export default (state = initialState, action) => {
  const { type, error, payload } = action;

  switch (type) {
    case FETCH_TRAILER_PENDING:
      return {
        ...state,
        isFulfilledTrailer: false,
        isLoadingTrailer: true,
        data: {}
      };
    case FETCH_TRAILER_FULFILLED:
      return {
        ...state,
        isFulfilledTrailer: true,
        isLoadingTrailer: false,
        data: payload.data
      };
    case FETCH_TRAILER_REJECTED:
      return {
        ...state,
        isFulfilledTrailer: false,
        isLoadingTrailer: false,
        error
      };
    case FETCH_TRAILER_REMOVE: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};
