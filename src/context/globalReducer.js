import { SET_THEME, SET_CATEGORY, ANIMATE_PROJECTS_EXIT } from "./types";

export default (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      };
    case ANIMATE_PROJECTS_EXIT:
      return {
        ...state,
        category: action.payload,
      };
    default:
      return state;
  }
};
