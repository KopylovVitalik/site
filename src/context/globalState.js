import React, { useReducer } from "react"
import GlobalContext from "./globalContext"
import GlobalReducer from "./globalReducer"

import { SET_THEME, SET_CATEGORY } from "./types"

const GlobalState = props => {
  const initialState = {
    theme: "gradient",
    category: "*",
  }

  const [state, dispatch] = useReducer(GlobalReducer, initialState)

  const setTheme = newTheme =>
    dispatch({
      type: SET_THEME,
      payload: newTheme,
    })

  const setCategory = newCategory =>
    dispatch({
      type: SET_CATEGORY,
      payload: newCategory,
    })

  return (
    <GlobalContext.Provider
      value={{
        theme: state.theme,
        category: state.category,
        setTheme,
        setCategory,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
