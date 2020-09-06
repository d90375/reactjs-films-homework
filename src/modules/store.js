import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import headerReducer from "./headerData/headerRedcuer";
import movieListReducer from "./movieListData/movieListReducer";

const rootReducer = combineReducers({
  headerReducer,
  movieListReducer
});

const store = () => {
  const middleware = [thunk];

  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
};

export default store();
