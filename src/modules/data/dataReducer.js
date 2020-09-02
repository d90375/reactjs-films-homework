import { FETCHED_MOVIES, FETCH_START, FETCH_ERROR, FETCHED_GENRES } from "../actionTypes";

const initialState = {
  loading: true,
  error: null,
  data: {},
  searchText: "",
  genres: {}
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, loading: true };
    case FETCHED_MOVIES:
      return { ...state, loading: false, data: action.data };
    case FETCHED_GENRES:
      return { ...state, loading: false, genres: action.genres };
    case FETCH_ERROR:
      return { ...state, loading: true, error: action.error };
    default:
      return state;
  }
};

export default dataReducer;
