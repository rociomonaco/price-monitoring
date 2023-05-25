import { useContext, useState } from 'react'
import { AuthContext } from '@context/AuthContext'
import { login, logout } from '@services/auth'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const { setIsAuthenticated, setToken } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const setAuthData = (token) => {
    const currentTime = new Date().getTime() //milisegundos
    localStorage.setItem('token', token)
    localStorage.setItem('lastLoginTime', currentTime)
    setIsAuthenticated(true)
    setToken(token)
  }

  const onLogin = async (data) => {
    setIsLoading(true)
    setError(false)
    return await login(data)
      .then(({ data }) => {
        const token = data.token_auth
        if (token) {
          setAuthData(token)
          navigate('/')
        }
      })
      .catch((error) => {
        setError(error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const onLogout = async () => {
    setIsLoading(true)
    setError(false)
    return await logout()
      .then(() => {
        localStorage.clear()
        setIsAuthenticated(false)
        setToken(null)
        navigate('/login')
      })
      .catch((error) => {
        setError(error)
        throw error
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return { isLoading, error, onLogin, onLogout }
}
