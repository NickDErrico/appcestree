import { createStore, combineReducers, applyMiddleware } from 'redux';
import projects from './projects.reducers';
import components from './components.reducers';
import users from './users.reducers';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'
import logger from 'redux-logger';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  users,
  components,
  projects,
  form: formReducer
})

export default () => {
  return createStore(rootReducer, applyMiddleware(thunk, promise(), logger))
}
