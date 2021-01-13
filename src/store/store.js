import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function reducer() {}

const saga = createSagaMiddleware();

export const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(saga))
);
