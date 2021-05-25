import { createContext, useReducer, useContext } from "react"
import { userReducer } from "../reducers/userReducer"

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {
  const [state, userDispatch] = useReducer(userReducer, {
    loading: false,
    error: "",
    user: null,
  })
  const { loading, error, user } = state
  return (
    <UserContext.Provider value={{ loading, error, user, userDispatch }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error(
      `It seems that you use useUser outside of UserContextProvider`
    )
  }
  return context
}
