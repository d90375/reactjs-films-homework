import { FETCHED, FETCHING, FETCH_ERROR } from "../actionTypes";

const initialState = {
  loading: true,
  error: null,
  data: []
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, loading: true };
    case FETCHED:
      return { ...state, loading: false, data: action.data };
    case FETCH_ERROR:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
