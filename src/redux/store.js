import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default () => {
  return createStore(applyMiddleware(thunk, logger))
}
