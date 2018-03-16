import {
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILED,
  FETCH_SINGLE_PROJECT_SUCCESS,
  FETCH_SINGLE_PROJECT_FAILED,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILED,
  SELECT_COMPONENT
} from './projects.actions';

const initialState = {
  currProject: {
    components:[]
  },
  allProjects: [],
  selectedComponent: {}
};

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCH_PROJECTS_SUCCESS:
      return {
        ...state,
        allProjects: action.payload
      };
    case FETCH_PROJECTS_FAILED:
      return action.payload;
    case FETCH_SINGLE_PROJECT_SUCCESS:
      return {
        ...state,
        components: action.payload[0]
      };
    case FETCH_SINGLE_PROJECT_FAILED:
      return action.payload
    case ADD_PROJECT_SUCCESS:
      return state;
    case ADD_PROJECT_FAILED:
      return action.payload;
    case SELECT_COMPONENT:
      return {
        ...state,
        selectedComponent: {...action.payload}
      };
    default:
      return state;
  }
}
