export const FETCH_COMPONENTS_SUCCESS = 'FETCH_COMPONENTS_SUCCESS';
export const FETCH_COMPONENTS_FAILED = 'FETCH_COMPONENTS_FAILED';

export const ADD_COMPONENT_SUCCESS = 'ADD_COMPONENT_SUCCESS';
export const ADD_COMPONENT_FAILED = 'ADD_COMPONENT_FAILED';

const BASE_URL = `http://localhost:8000/components`;

export const fetchComponents = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}`);
      let components = await response.json();
      dispatch({
        type: FETCH_COMPONENTS_SUCCESS,
        payload: components
      })
    }catch(err) {
      dispatch({
        type: FETCH_COMPONENTS_FAILED,
        payload: err
      })
    }
  }
}

export const addComponent = newComponent => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}`, {
        method: 'post',
        body: JSON.stringify(newComponent),
        headers: {
          'content-type': 'application/json'
        },
      })
      let addedComponent = await response.json();
      dispatch({
        type: ADD_COMPONENT_SUCCESS,
        payload: addedComponent
      })
    }catch(err) {
      dispatch({
        type: ADD_COMPONENT_FAILED,
        payload: err
      })
    }
  }
}
