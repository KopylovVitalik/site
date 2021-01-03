import { SET_THEME, SET_CATEGORY } from "./types"

export default (state, action) => {
  switch (action.type) {
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      }
    case SET_CATEGORY:
      return {
        ...state,
        category: action.payload,
      }
    default:
      return state
  }
}
