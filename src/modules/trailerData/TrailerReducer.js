import {
  FETCH_TRAILER_FULFILLED,
  FETCH_TRAILER_PENDING,
  FETCH_TRAILER_REJECTED,
  FETCH_TRAILER_REMOVE
} from "../actionTypes";

const initialState = {
  isLoadingTrailer: false,
  isFulfilledTrailer: false,
  hasErrorTrailer: false,
  errorTrailer: {},
  data: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_TRAILER_PENDING:
      return {
        ...state,
        isFulfilledTrailer: false,
        isLoadingTrailer: true,
        hasErrorTrailer: false,
        data: {}
      };
    case FETCH_TRAILER_FULFILLED:
      return {
        ...state,
        isFulfilledTrailer: true,
        isLoadingTrailer: false,
        hasErrorTrailer: false,
        data: action.payload.data
      };
    case FETCH_TRAILER_REJECTED:
      return {
        ...state,
        isFulfilledTrailer: false,
        isLoadingTrailer: false,
        hasErrorTrailer: true,
        errorTrailer: action.payload
      };
    case FETCH_TRAILER_REMOVE: {
      return { ...state, ...initialState };
    }
    default:
      return state;
  }
};
