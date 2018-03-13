export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILED = 'FETCH_PROJECTS_FAILED';

export const ADD_PROJECT_SUCCESS = 'ADD_PROJECT_SUCCESS';
export const ADD_PROJECT_FAILED = 'ADD_PROJECT_FAILED';

const BASE_URL = `http://localhost:8000`;


export const fetchProjects = () => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/projects`);
      let projects = await response.json();
      dispatch({
        type: FETCH_PROJECTS_SUCCESS,
        payload: projects
      })
    }catch(err) {
      dispatch({
        type: FETCH_PROJECTS_FAILED,
        payload: err
      })
    }
  }
}

export const addProject = newProject => {
  return async dispatch => {
    try {
      let response = await fetch(`${BASE_URL}/projects`, {
        method: 'post',
        body: JSON.stringify(newProject),
        headers: {
          'content-type': 'application/json'
        },
      })
      let addedProject = await response.json();
      dispatch({
        type: ADD_PROJECT_SUCCESS,
        payload: addedProject
      })
    }catch(err) {
      dispatch({
        type: ADD_PROJECT_FAILED,
        payload: err
      })
    }
  }
}
