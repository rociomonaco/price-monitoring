import { useAuth } from '@/hooks/useAuth'
import React, { createContext, useState } from 'react'

export const AuthContext = createContext({})

export const AuthContextProvider = ({ children }) => {
  const [JWT, setJWT] = useState()
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [user, setUser] = useState({})

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isAuthenticated,
        setIsAuthenticated,
        JWT,
        setJWT
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
