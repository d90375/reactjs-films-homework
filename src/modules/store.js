import { applyMiddleware, createStore, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import dataReducer from "./data/dataReducer";

const rootReducer = combineReducers({
  dataReducer
});

const store = () => {
  const middleware = [thunk];

  const composeEnhancers = typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

  return createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));
};

export default store();
