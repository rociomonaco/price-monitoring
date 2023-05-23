import { useContext, useState } from 'react'
import { AuthContext } from '@context/AuthContext'
import { login } from '@services/auth'
import { useNavigate } from 'react-router-dom'

export const useAuth = () => {
  const { setIsAuthenticated, setToken } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const onLogin = async (data) => {
    setIsLoading(true)
    setError(false)
    return await login(data)
      .then(({ data }) => {
        const token = data.token_auth
        if (token) {
          localStorage.setItem('token', token)
          setIsAuthenticated(true)
          setToken(token)
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

  return { onLogin, isLoading, error }
}
