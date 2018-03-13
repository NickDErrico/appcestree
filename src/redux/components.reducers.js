import {
  FETCH_COMPONENTS_SUCCESS,
  FETCH_COMPONENTS_FAILED,
  ADD_COMPONENT_SUCCESS,
  ADD_COMPONENT_FAILED
} from './components.actions';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_COMPONENTS_SUCCESS:
      return [...action.payload.data]
    case FETCH_COMPONENTS_FAILED:
      return action.payload
    case ADD_COMPONENT_SUCCESS:
      return [...state, action.payload.data]
    case ADD_COMPONENT_FAILED:
      return action.payload.data
    default:
      return state
  }
}
