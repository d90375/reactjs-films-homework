import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { HeaderReducer } from "./headerData";
import { MovieListReducer } from "./movieListData";
import { TrailerReducer } from "./trailerData";
import withProvider from "../withProvider";

const rootReducer = combineReducers({
  header: HeaderReducer,
  movieList: MovieListReducer,
  trailer: TrailerReducer
});

const middleware = thunk;

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(middleware)));

export default withProvider({ store, Provider });
