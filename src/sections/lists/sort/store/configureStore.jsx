import { createStore, applyMiddleware, compose } from "redux";
// npm install --save redux-thunk
import thunk from "redux-thunk";
import { routerMiddleware } from "react-router-redux";
import { createBrowserHistory } from "history";

import rootReducer from "../reducers/index";

export const history = createBrowserHistory();

export function configureStore(initialState) {
  const state = {
    ...initialState
  };

  // const enhancers = [];

  const middleware = [thunk, routerMiddleware(history)];

  //const composeEnhancers =
  //  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  //    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
  //    : compose;

  const composedEnhancers = compose(applyMiddleware(...middleware));

  const store = createStore(rootReducer, state, composedEnhancers);

  return store;
}
