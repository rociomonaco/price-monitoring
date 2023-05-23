import { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { AuthContext } from '@context/AuthContext'
import { Navbar } from '@components/navigation/Navbar'

export function PrivatedRoutes({ children }) {
  const { isAuthenticated } = useContext(AuthContext)

  return isAuthenticated ? (
    <div className='relative'>
      <Navbar />
      <div className='ml-64 mt-24'>{children}</div>
    </div>
  ) : (
    <Navigate to='/login' replace />
  )
}
