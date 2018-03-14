export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const FETCH_USERS_FAILED = 'FETCH_USERS_FAILED';

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAILED = 'ADD_USER_FAILED';

const BASE_URL = `http://localhost:8000/users`;

export const fetchUsers = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}`);
      let users = await response.json();
      dispatch({
        type: FETCH_USERS_SUCCESS,
        payload: users
      })
    }catch(err) {
      dispatch({
        type: FETCH_USERS_FAILED,
        payload: err
      })
    }
  }
}

export const addUser = newUser => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}`, {
        method: 'post',
        body: JSON.stringify(newUser),
        headers: {
          'content-type': 'application/json'
        },
      })
      let addedUser = await response.json();
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: addedUser
      })
    }catch(err) {
      dispatch({
        type: ADD_USER_FAILED,
        payload: err
      })
    }
  }
}
