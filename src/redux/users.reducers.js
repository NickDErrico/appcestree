import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  ADD_USER_SUCCESS,
  ADD_USER_FAILED
} from './users.actions';

const initialState = {}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS_SUCCESS:
      return [...action.payload]
    case FETCH_USERS_FAILED:
      return action.payload
    case ADD_USER_SUCCESS:
      return [...state, action.payload]
    case ADD_USER_FAILED:
      return action.payload
    default:
      return state
  }
}
