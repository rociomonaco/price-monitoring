import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token'))
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        token,
        setToken
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
