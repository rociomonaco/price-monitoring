import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthContext'

export function PrivatedRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContext)

  return true ? (
    <>
      <h2>Navbar</h2>
      {children}
    </>
  ) : (
    <Navigate to='/login' replace />
  )
}
