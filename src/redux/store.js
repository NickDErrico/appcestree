import { createStore, combineReducers, applyMiddleware } from 'redux';
import projects from './projects.reducers';
import components from './components.reducers';
import users from './users.reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const rootReducer = combineReducers({
  users,
  components,
  projects
})

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk, logger))
}
