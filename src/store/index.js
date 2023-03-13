import { createStore, compose, applyMiddleware, combineReducers } from 'redux';

import gameReducer from './game.js';

const rootReducer = combineReducers({
    game: gameReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware();
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
};

const configureStore = (preLoadedState) => {
    return createStore(rootReducer, preLoadedState, enhancer);
};

export default configureStore;