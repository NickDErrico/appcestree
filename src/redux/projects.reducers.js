import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILED
} from './projects.actions';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return [...action.payload]
    case FETCH_PROJECTS_FAILED:
      return action.payload
    case ADD_PROJECT_SUCCESS:
      return [...state, action.payload]
    case ADD_PROJECT_FAILED:
      return action.payload
    default:
      return state
  }
}
