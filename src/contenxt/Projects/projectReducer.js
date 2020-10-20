import { FORM_PROJECT, GET_PROJECTS, ADD_PROJECT } from "../../types";

export default (state, action) => {
  switch (action.type) {
    case FORM_PROJECT: {
      return {
        ...state,
        form: true,
      };
    }
    case GET_PROJECTS: {
      return {
        ...state,
        projectsArray: action.payload,
      };
    }
    case ADD_PROJECT: {
      return {
        ...state,
        projectsArray: [...state.projectsArray, action.payload],
      };
    }
    default:
      return state;
  }
};
